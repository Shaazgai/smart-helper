/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: { unoptimized: true },
    cache: false
};

module.exports = {
    env: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    },
}