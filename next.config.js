/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    customKey: 'my-value',
    API_KEY: "AIzaSyC2D0X_Fd79rLk6KErLeHKMk4TnQpjslDo",
  },
}



module.exports = nextConfig;
