/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    ORG_ID: 'commercestore',
    API_KEY: 'xx1d7ba1c2-5daf-4205-a2d8-ca1be401b5d6',
  },
}

module.exports = nextConfig
