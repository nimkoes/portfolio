# AI Operating System

이 폴더는 AI 도구와 분리된 프로젝트 운영 설정입니다.
Codex, Cursor, Claude, OpenAI API 등 도구가 바뀌어도 이 파일들을 입력으로 줄 수 있습니다.

## 폴더 구조

```text
ai/
  project-profile.md
  policies/
    global.md
    engineering.md
    design.md
    quality.md
    content.md
    release.md
  agents/
    README.md
    ai-orchestrator.md
    senior-product-manager.md
    senior-frontend-engineer.md
    senior-designer.md
    senior-qa-engineer.md
    portfolio-content-strategist.md
    portfolio-reviewer.md
    portfolio-content-editor.md
    portfolio-quality-judge.md
    release-engineer.md
    ai-harness-engineer.md
  prompts/
    agent-router.md
    portfolio-review.md
  workflows/
    project-operating-loop.md
    feature-delivery-loop.md
    portfolio-content-loop.md
  templates/
    agent-definition.md
    task-brief.md
```

## 파일 역할

- `project-profile.md`: 현재 프로젝트를 분석한 기준 문서입니다.
- `policies/*.md`: 모든 agent가 따르는 분야별 지침입니다.
- `agents/*.md`: agent별 역할, 입력, 출력, 금지 사항입니다.
- `prompts/*.md`: 특정 작업에 사용할 프롬프트입니다.
- `workflows/*.md`: 여러 agent가 어떤 순서로 협업할지 정합니다.
- `templates/*.md`: 새 agent나 새 작업을 추가할 때 쓰는 양식입니다.

## AI 도구에 처음 줄 입력

AI 도구가 프로젝트를 모르는 상태라면 아래처럼 입력합니다.

```text
AGENTS.md, ai/README.md, ai/project-profile.md를 먼저 읽어 주세요.
이후 작업 성격에 맞는 workflow와 agent 파일을 읽고 진행해 주세요.
확인되지 않은 사실은 만들지 말고, 수정 후 검증 명령을 제안하거나 실행해 주세요.
```

## 현재 운영 방식

현재 하네스는 외부 AI API를 직접 호출하지 않습니다.
대신 프로젝트 데이터, 정책, agent 정의를 읽어서 `ai-runs/<실행시각>/context.md`와 `prompt.md`를 만듭니다.
또한 `manifest.md`를 만들어 현재 인식한 설정 파일 목록을 보여 줍니다.

자동 agent 실행은 다음 단계입니다.
지금은 사람이 agent를 선택하거나, AI 도구에게 필요한 agent 파일을 읽게 하는 방식으로 운영합니다.
