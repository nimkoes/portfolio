const YEAR_MONTH_PATTERN = /(\d{4})\D+(\d{1,2})/;

export const toYearMonth = (rawValue?: string): string => {
  if (!rawValue) return "";

  const trimmed = rawValue.trim();
  if (!trimmed) return "";

  const match = trimmed.match(YEAR_MONTH_PATTERN);
  if (!match) return "";

  const year = match[1];
  const month = match[2].padStart(2, "0");
  return `${year}-${month}`;
};

export const toYearMonthSortValue = (yearMonth?: string): number => {
  if (!yearMonth) return 0;
  const [year, month] = yearMonth.split("-");
  if (!year || !month) return 0;
  return Number(`${year}${month}`);
};

export const parseYearMonthRange = (rawRange?: string): { start: string; end: string } => {
  if (!rawRange) return { start: "", end: "" };

  const [rawStart = "", rawEnd = ""] = rawRange.split("~").map((value) => value.trim());
  return {
    start: toYearMonth(rawStart),
    end: toYearMonth(rawEnd),
  };
};

export const formatYearMonthRange = (start?: string, end?: string): string => {
  const safeStart = start || "-";
  return end ? `${safeStart} ~ ${end}` : `${safeStart} ~`;
};
