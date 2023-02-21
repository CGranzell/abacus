/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_KEY: "AIzaSyCKxxcBNdf_2OEMMquJ5LYnNQAYtkYg6qw",
    AUTH_DOMAIN: "abacus-camp.firebaseapp.com",
    PROJECT_ID: "abacus-camp",
    STORAGE_BUCKET: "abacus-camp.appspot.com",
    MESSAGING_SENDER_ID: "19598447285",
    APP_ID: "1:19598447285:web:d4c9de7956317df4aae4fc",
    MEASUREMENT_ID: "G-2S5FFW8RT9",
   
  },
}



module.exports = nextConfig;
