import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const rootDir = process.cwd();
const mode = process.argv.includes("--loop") ? "loop" : "harness";
const shouldWrite = !process.argv.includes("--dry-run");

const severityOrder = {
  error: 3,
  warning: 2,
  info: 1,
};

const penaltyBySeverity = {
  error: 8,
  warning: 3,
  info: 1,
};

const readJson = async (relativePath) => {
  const filePath = path.join(rootDir, relativePath);
  return JSON.parse(await readFile(filePath, "utf8"));
};

const readTextIfExists = async (relativePath) => {
  try {
    return (await readFile(path.join(rootDir, relativePath), "utf8")).trim();
  } catch {
    return "";
  }
};

const readMarkdownDirectory = async (relativeDir) => {
  const absoluteDir = path.join(rootDir, relativeDir);

  try {
    const entries = await readdir(absoluteDir, { withFileTypes: true });
    const markdownFiles = entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map((entry) => entry.name)
      .sort();

    return Promise.all(
      markdownFiles.map(async (fileName) => {
        const relativePath = `${relativeDir}/${fileName}`;
        return {
          name: fileName.replace(/\.md$/, ""),
          path: relativePath,
          content: await readTextIfExists(relativePath),
        };
      }),
    );
  } catch {
    return [];
  }
};

const arrayValue = (value) => (Array.isArray(value) ? value : []);
const textValue = (value) => (typeof value === "string" ? value.trim() : "");

const parseStartYear = (period = "") => {
  const match = String(period).match(/(\d{4})/);
  return match ? Number(match[1]) : 0;
};

const normalizeActivities = (activitiesData) => [
  ...arrayValue(activitiesData.activities),
  ...arrayValue(activitiesData.awards ?? activitiesData.articles),
];

const makeIssue = ({ scope, source, severity, rule, message, suggestion }) => ({
  scope,
  source,
  severity,
  rule,
  message,
  suggestion,
});

const rankIssues = (issues) =>
  [...issues].sort((a, b) => {
    const severityDiff = severityOrder[b.severity] - severityOrder[a.severity];
    if (severityDiff !== 0) return severityDiff;
    return `${a.scope}:${a.source}`.localeCompare(`${b.scope}:${b.source}`);
  });

const createProjectIssues = (projects) => {
  const issues = [];

  for (const project of projects) {
    const source = `projects:${project.id ?? "unknown"}`;
    const title = textValue(project.title);
    const summary = textValue(project.summary);
    const details = arrayValue(project.details);
    const goals = arrayValue(project.goals);
    const techStack = arrayValue(project.techStack);
    const troubleshooting = arrayValue(project.troubleshooting);
    const infra = arrayValue(project.infra);
    const achievements = arrayValue(project.achievements);
    const startYear = parseStartYear(project.period);

    if (!title) {
      issues.push(
        makeIssue({
          scope: "project",
          source,
          severity: "error",
          rule: "project.title.required",
          message: "프로젝트 제목이 비어 있습니다.",
          suggestion: "목록과 상세 화면에서 기준이 되는 제목을 먼저 채워 주세요.",
        }),
      );
    }

    if (!summary) {
      issues.push(
        makeIssue({
          scope: "project",
          source,
          severity: "error",
          rule: "project.summary.required",
          message: `${title || source}의 요약이 비어 있습니다.`,
          suggestion: "무엇을 만들었는지 한 문장으로 적어 주세요.",
        }),
      );
    } else if (summary.length < 18) {
      issues.push(
        makeIssue({
          scope: "project",
          source,
          severity: "warning",
          rule: "project.summary.too_short",
          message: `${title}의 요약이 짧아 역할이나 결과가 잘 드러나지 않습니다.`,
          suggestion: "업무 대상, 맡은 역할, 결과 중 최소 2가지를 포함해 주세요.",
        }),
      );
    }

    if (details.length === 0) {
      issues.push(
        makeIssue({
          scope: "project",
          source,
          severity: "warning",
          rule: "project.details.required",
          message: `${title || source}의 개요가 비어 있습니다.`,
          suggestion: "핵심 기능이나 담당 범위를 1개 이상 추가해 주세요.",
        }),
      );
    }

    if (goals.length === 0) {
      issues.push(
        makeIssue({
          scope: "project",
          source,
          severity: "info",
          rule: "project.goals.recommended",
          message: `${title || source}의 목표가 비어 있습니다.`,
          suggestion: "왜 이 프로젝트가 필요했는지 1개만 적어도 설명력이 좋아집니다.",
        }),
      );
    }

    if (techStack.length === 0 && infra.length === 0) {
      issues.push(
        makeIssue({
          scope: "project",
          source,
          severity: "warning",
          rule: "project.environment.required",
          message: `${title || source}의 개발 환경 정보가 비어 있습니다.`,
          suggestion: "언어, 프레임워크, 데이터베이스, 인프라 중 확인 가능한 항목을 추가해 주세요.",
        }),
      );
    }

    if (achievements.length === 0) {
      issues.push(
        makeIssue({
          scope: "project",
          source,
          severity: "warning",
          rule: "project.achievements.recommended",
          message: `${title || source}의 성과가 비어 있습니다.`,
          suggestion: "정량 수치가 없으면 안정성, 운영 효율, 학습 성과처럼 검증 가능한 변화로 적어 주세요.",
        }),
      );
    }

    if (startYear >= 2020 && troubleshooting.length === 0) {
      issues.push(
        makeIssue({
          scope: "project",
          source,
          severity: "info",
          rule: "project.troubleshooting.recent_recommended",
          message: `${title || source}는 최근 경력 프로젝트지만 트러블슈팅이 비어 있습니다.`,
          suggestion: "문제와 해결을 1쌍만 추가해도 시니어 역량이 더 잘 보입니다.",
        }),
      );
    }

    for (const [index, item] of troubleshooting.entries()) {
      if (!textValue(item.title) || !textValue(item.problem) || !textValue(item.solution)) {
        issues.push(
          makeIssue({
            scope: "project",
            source: `${source}.troubleshooting:${index}`,
            severity: "error",
            rule: "project.troubleshooting.complete",
            message: `${title || source}의 트러블슈팅 항목에 제목, 문제, 해결 중 빈 값이 있습니다.`,
            suggestion: "각 항목은 title, problem, solution을 모두 채워 주세요.",
          }),
        );
      }
    }
  }

  return issues;
};

const createCareerIssues = (careers) => {
  const issues = [];

  for (const career of careers) {
    const source = `careers:${career.id ?? "unknown"}`;
    const company = textValue(career.company);
    const contents = arrayValue(career.contents);
    const techDecisions = arrayValue(career.techDecisions);
    const isCurrent = !textValue(career.to);

    if (!company) {
      issues.push(
        makeIssue({
          scope: "career",
          source,
          severity: "error",
          rule: "career.company.required",
          message: "회사명이 비어 있습니다.",
          suggestion: "타임라인 기준이 되는 회사명을 채워 주세요.",
        }),
      );
    }

    if (!textValue(career.role)) {
      issues.push(
        makeIssue({
          scope: "career",
          source,
          severity: "warning",
          rule: "career.role.recommended",
          message: `${company || source}의 역할명이 비어 있습니다.`,
          suggestion: "직책이나 수행 역할을 짧게 적어 주세요.",
        }),
      );
    }

    if (contents.length === 0) {
      issues.push(
        makeIssue({
          scope: "career",
          source,
          severity: "error",
          rule: "career.contents.required",
          message: `${company || source}의 경력 내용이 비어 있습니다.`,
          suggestion: "주요 업무를 3개 안팎으로 먼저 채워 주세요.",
        }),
      );
    } else if (contents.length > 10) {
      issues.push(
        makeIssue({
          scope: "career",
          source,
          severity: "info",
          rule: "career.contents.too_many",
          message: `${company || source}의 경력 내용이 많아 핵심이 흐려질 수 있습니다.`,
          suggestion: "중요도가 낮은 항목은 프로젝트 상세로 옮기거나 비슷한 항목끼리 묶어 주세요.",
        }),
      );
    }

    if (isCurrent && techDecisions.length === 0) {
      issues.push(
        makeIssue({
          scope: "career",
          source,
          severity: "warning",
          rule: "career.current.tech_decisions.recommended",
          message: `${company || source}는 현재 경력인데 기술 의사결정 항목이 비어 있습니다.`,
          suggestion: "설계 판단, 운영 기준, 품질 기준 중 1개 이상 추가해 주세요.",
        }),
      );
    }
  }

  return issues;
};

const createActivityIssues = (activitiesData) => {
  const issues = [];
  const activities = normalizeActivities(activitiesData);

  for (const activity of activities) {
    const source = `activities:${activity.id ?? "unknown"}`;

    if (!textValue(activity.title)) {
      issues.push(
        makeIssue({
          scope: "activity",
          source,
          severity: "error",
          rule: "activity.title.required",
          message: "활동 제목이 비어 있습니다.",
          suggestion: "활동, 수상, 자격명 중 하나를 제목으로 채워 주세요.",
        }),
      );
    }

    if (!textValue(activity.date)) {
      issues.push(
        makeIssue({
          scope: "activity",
          source,
          severity: "warning",
          rule: "activity.date.recommended",
          message: `${textValue(activity.title) || source}의 날짜가 비어 있습니다.`,
          suggestion: "연월만 알아도 타임라인에 배치할 수 있습니다.",
        }),
      );
    }
  }

  return issues;
};

const summarizeByRule = (issues) =>
  issues.reduce((acc, issue) => {
    acc[issue.rule] = (acc[issue.rule] ?? 0) + 1;
    return acc;
  }, {});

const createNextActions = (issues) => {
  const byRule = summarizeByRule(issues);
  const actions = [];

  if (byRule["project.achievements.recommended"]) {
    actions.push("성과가 비어 있는 프로젝트 2개를 골라 결과나 배운 점을 1문장씩 추가합니다.");
  }

  if (byRule["project.goals.recommended"]) {
    actions.push("최근 프로젝트부터 목표를 1개씩 채웁니다. 목표는 '왜 필요했는가'에 답하면 됩니다.");
  }

  if (byRule["project.troubleshooting.recent_recommended"]) {
    actions.push("최근 경력 프로젝트에 문제와 해결을 1쌍씩 추가합니다.");
  }

  if (byRule["project.summary.too_short"]) {
    actions.push("짧은 프로젝트 요약에 대상, 역할, 결과 중 2가지를 넣습니다.");
  }

  if (actions.length === 0) {
    actions.push("상위 이슈 1개를 고쳐 보고 다시 실행해 점수 변화를 확인합니다.");
  }

  return actions.slice(0, 4);
};

const getPreviousReport = async () => {
  const runsDir = path.join(rootDir, "ai-runs");

  try {
    const entries = await readdir(runsDir, { withFileTypes: true });
    const runDirs = entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort()
      .reverse();

    for (const runDir of runDirs) {
      try {
        const report = JSON.parse(await readFile(path.join(runsDir, runDir, "report.json"), "utf8"));
        return { runDir, report };
      } catch {
        // Ignore incomplete run directories.
      }
    }
  } catch {
    return null;
  }

  return null;
};

const createScore = (issues) => {
  const penalty = issues.reduce((total, issue) => total + penaltyBySeverity[issue.severity], 0);
  return Math.max(0, 100 - Math.min(75, penalty));
};

const findDoc = (docs, name) => docs.find((doc) => doc.name === name)?.content || "";

const formatDocList = (docs) => docs.map((doc) => `- \`${doc.path}\``).join("\n") || "- 없음";

const formatDocBundle = (docs) =>
  docs
    .map(
      (doc) => `## ${doc.path}

${doc.content || "(내용 없음)"}`,
    )
    .join("\n\n");

const loadAiConfig = async () => {
  const [policies, agents, workflows, prompts] = await Promise.all([
    readMarkdownDirectory("ai/policies"),
    readMarkdownDirectory("ai/agents"),
    readMarkdownDirectory("ai/workflows"),
    readMarkdownDirectory("ai/prompts"),
  ]);

  return {
    projectProfile: await readTextIfExists("ai/project-profile.md"),
    policies,
    agents,
    workflows,
    prompts,
    globalPolicy: findDoc(policies, "global"),
    agentRegistry: findDoc(agents, "README"),
    portfolioWorkflow: findDoc(workflows, "portfolio-content-loop"),
    portfolioReviewPrompt: findDoc(prompts, "portfolio-review"),
  };
};

const createContextMarkdown = ({ inventory, topIssues, nextActions, aiConfig }) => `# Portfolio AI Context

이 파일은 AI에게 줄 컨텍스트입니다.
하네스가 현재 포트폴리오 데이터를 읽고 자동으로 만들었습니다.

## 데이터 범위

- careers: ${inventory.careers}개
- projects: ${inventory.projects}개
- activities: ${inventory.activities}개

## 현재 상위 이슈

${topIssues.map((issue, index) => `${index + 1}. [${issue.severity}] ${issue.message}\n   - 제안: ${issue.suggestion}`).join("\n")}

## 다음 개선 후보

${nextActions.map((action, index) => `${index + 1}. ${action}`).join("\n")}

## 적용할 공통 지침

${aiConfig.globalPolicy || "- `ai/policies/global.md` 파일이 없습니다."}

## 프로젝트 분석

${aiConfig.projectProfile || "- `ai/project-profile.md` 파일이 없습니다."}

## 사용 가능한 policy

${formatDocList(aiConfig.policies)}

## 사용 가능한 agent

${formatDocList(aiConfig.agents)}

## 사용 가능한 workflow

${formatDocList(aiConfig.workflows)}
`;

const createPromptMarkdown = ({ topIssues, aiConfig }) => `# Portfolio Review Prompt

이 프롬프트는 하네스가 \`ai/\` 설정 파일을 읽어 만든 실행용 프롬프트입니다.

## 프로젝트 분석

${aiConfig.projectProfile || "프로젝트 분석 파일이 없습니다."}

## 공통 지침

${aiConfig.globalPolicy || "공통 지침 파일이 없습니다. 확인되지 않은 사실은 만들지 마세요."}

## agent 선택 기준

${aiConfig.agentRegistry || "agent registry 파일이 없습니다."}

## 사용 가능한 agent 정의

${formatDocBundle(aiConfig.agents.filter((doc) => doc.name !== "README"))}

## 작업 프롬프트

${aiConfig.portfolioReviewPrompt || "포트폴리오를 점검하고 개선 후보를 제안해 주세요."}

## workflow 참고

${aiConfig.portfolioWorkflow || "workflow 파일이 없습니다."}

## 우선 검토할 이슈

${topIssues.map((issue, index) => `${index + 1}. ${issue.source}: ${issue.message}`).join("\n")}
`;

const createManifestMarkdown = ({ aiConfig }) => `# AI Configuration Manifest

이 파일은 현재 하네스가 인식한 AI 설정 목록입니다.

## project profile

- \`ai/project-profile.md\`: ${aiConfig.projectProfile ? "인식됨" : "없음"}

## policies

${formatDocList(aiConfig.policies)}

## agents

${formatDocList(aiConfig.agents)}

## workflows

${formatDocList(aiConfig.workflows)}

## prompts

${formatDocList(aiConfig.prompts)}
`;

const createLoopMarkdown = ({ mode, report, previous, nextActions }) => {
  const comparison = previous
    ? `이전 실행(${previous.runDir}) 대비 점수 ${report.comparison.scoreDelta >= 0 ? "+" : ""}${report.comparison.scoreDelta}, 이슈 ${report.comparison.issueDelta >= 0 ? "+" : ""}${report.comparison.issueDelta}개입니다.`
    : "이전 실행 결과가 없어 이번 실행을 기준점으로 삼습니다.";

  return `# Portfolio AI Loop

## 이번 루프

- mode: ${mode}
- score: ${report.score}
- issues: ${report.issueCount}
- comparison: ${comparison}

## 루프 구조

1. 관찰: \`public/resources/*.json\`을 읽습니다.
2. 점검: 하네스 규칙으로 이슈를 찾습니다.
3. 결정: 다음 수정 후보를 고릅니다.
4. 실행: JSON 데이터를 직접 수정합니다.
5. 반복: \`npm run ai:loop\`를 다시 실행합니다.

## 다음 행동

${nextActions.map((action, index) => `${index + 1}. ${action}`).join("\n")}

## 학습 포인트

- 하네스 엔지니어링은 AI 작업을 실행할 환경과 규칙을 만드는 일입니다.
- 루프 엔지니어링은 실행 결과를 보고 다음 개선으로 이어지게 만드는 일입니다.
- 지금 프로젝트에서는 모델 호출보다 데이터 점검 루프를 먼저 만들었습니다.
`;
};

const main = async () => {
  const [careers, projects, activitiesData] = await Promise.all([
    readJson("public/resources/careers.json"),
    readJson("public/resources/projects.json"),
    readJson("public/resources/activities.json"),
  ]);

  const issues = rankIssues([
    ...createCareerIssues(arrayValue(careers)),
    ...createProjectIssues(arrayValue(projects)),
    ...createActivityIssues(activitiesData),
  ]);
  const score = createScore(issues);
  const previous = await getPreviousReport();
  const aiConfig = await loadAiConfig();
  const nextActions = createNextActions(issues);
  const topIssues = issues.slice(0, 12);
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const runDirName = `${timestamp}-${mode}`;
  const runDir = path.join(rootDir, "ai-runs", runDirName);
  const inventory = {
    careers: arrayValue(careers).length,
    projects: arrayValue(projects).length,
    activities: normalizeActivities(activitiesData).length,
  };
  const comparison = previous
    ? {
        previousRunDir: previous.runDir,
        scoreDelta: score - previous.report.score,
        issueDelta: issues.length - previous.report.issueCount,
      }
    : null;
  const report = {
    runAt: timestamp,
    mode,
    score,
    issueCount: issues.length,
    inventory,
    comparison,
    issues,
    nextActions,
  };

  if (shouldWrite) {
    await mkdir(runDir, { recursive: true });
    await writeFile(path.join(runDir, "report.json"), `${JSON.stringify(report, null, 2)}\n`);

    if (mode === "loop") {
      await writeFile(path.join(runDir, "context.md"), createContextMarkdown({ inventory, topIssues, nextActions, aiConfig }));
      await writeFile(path.join(runDir, "prompt.md"), createPromptMarkdown({ topIssues, aiConfig }));
      await writeFile(path.join(runDir, "loop.md"), createLoopMarkdown({ mode, report, previous, nextActions }));
      await writeFile(path.join(runDir, "manifest.md"), createManifestMarkdown({ aiConfig }));
    }
  }

  console.log(`Portfolio AI ${mode} completed`);
  console.log(`score: ${score}`);
  console.log(`issues: ${issues.length}`);
  if (comparison) {
    console.log(`previous: ${comparison.previousRunDir}`);
    console.log(`scoreDelta: ${comparison.scoreDelta >= 0 ? "+" : ""}${comparison.scoreDelta}`);
    console.log(`issueDelta: ${comparison.issueDelta >= 0 ? "+" : ""}${comparison.issueDelta}`);
  }
  console.log("nextActions:");
  nextActions.forEach((action, index) => console.log(`${index + 1}. ${action}`));
  if (shouldWrite) console.log(`runDir: ai-runs/${runDirName}`);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
