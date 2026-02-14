/** @type {import('next').NextConfig['webpack']} */
const webpack = (config) => {
  // css에서 케밥케이스와 tsx에서 카멜케이스 간의 전환
  config.module.rules
    .find(({ oneOf }) => !!oneOf)
    .oneOf.filter(({ use }) => JSON.stringify(use)?.includes("css-loader"))
    .reduce((acc, { use }) => acc.concat(use), [])
    .forEach(({ options }) => {
      // eslint-disable-next-line no-param-reassign
      if (options.modules) options.modules.exportLocalsConvention = "camelCase";
    });

  return config;
};

const normalizeBasePath = (value) => {
  if (!value || value === "/") return "";
  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.replace(/\/$/, "");
};

const isGithubPagesBuild = process.env.GITHUB_PAGES === "true" || process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubPagesBuild ? normalizeBasePath(process.env.GITHUB_PAGES_BASE_PATH || "/portfolio") : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  webpack,
};

export default nextConfig;
