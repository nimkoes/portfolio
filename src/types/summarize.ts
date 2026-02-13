export type SummarizeEntryType = "CAREER" | "ACTIVITIES" | "PROJECT";

export type BranchId = `career-${number}` | "student";

export type SummarizeEntry = {
  id: string;
  sourceId: number;
  type: SummarizeEntryType;
  date: string;
  title: string;
  org: string;
  branchId: BranchId;
  originalIndex: number;
};

export type BranchMeta = {
  id: BranchId;
  label: string;
  laneIndex: number;
  isMerge: boolean;
};
