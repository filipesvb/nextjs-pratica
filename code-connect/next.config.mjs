/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  experimental: {
    

    // ⚠️ Desativa a verificação de origem para Server Actions
    serverActionsVerifyOrigin: false,

  }
};

export default nextConfig;
