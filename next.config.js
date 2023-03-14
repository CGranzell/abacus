/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    MEASURMENT_ID: process.env.MEASURMENT_ID,
  },
};

module.exports = nextConfig;


// env: {
 // EXMAPLE_ENVIRONMENT_VARIABLE: process.env.EXMAPLE_ENVIRONMENT_VARIABLE,
//},