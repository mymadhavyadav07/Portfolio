/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // shadergradient + three ship modern ESM; transpile so Next bundles them cleanly.
  transpilePackages: ["@shadergradient/react", "three"],
};

export default nextConfig;
