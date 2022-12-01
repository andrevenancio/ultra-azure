const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
}

module.exports = nextConfig
