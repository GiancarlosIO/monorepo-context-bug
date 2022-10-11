const withTM = require('next-transpile-modules')(['@my-org/web']); // pass the modules you would like to see transpiled


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withTM(nextConfig)
