/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    apiKey: 'AIzaSyCKxxcBNdf_2OEMMquJ5LYnNQAYtkYg6qw',
    authDomain: 'abacus-camp.firebaseapp.com',
    projectId: 'abacus-camp',
    storageBucket: 'abacus-camp.appspot.com',
    messagingSenderId: '19598447285',
    appId: '1:19598447285:web:d4c9de7956317df4aae4fc',
    measurementId: 'G-2S5FFW8RT9',
  },
};

module.exports = nextConfig;
