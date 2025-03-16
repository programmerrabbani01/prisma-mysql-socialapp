// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   // output: "export",
//   productionBrowserSourceMaps: true,

//   experimental: {
//     reactCompiler: true,
//     // Remove or comment out ppr if not using a canary version
//     // ppr: "incremental",
//   },
//   images: {
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  experimental: {
    reactCompiler: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
