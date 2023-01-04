/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
},
basePath:"/pepper",
  assetPrefix:"/pepper/",
}

module.exports = nextConfig
