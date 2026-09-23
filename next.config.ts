import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pins the project root explicitly — without this, Turbopack walks up and
  // finds an unrelated package-lock.json at the Windows user-profile root.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
