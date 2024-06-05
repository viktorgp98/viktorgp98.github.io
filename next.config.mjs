/**
 * @type {import('next').NextConfig}
 */
let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true

const nextConfig = {
  
  
  
    output:  process.env.NODE_ENV !== "production" ? undefined: "export",
      images: {
        unoptimized: envImageUnoptimize,
        loader: 'imgix',
        path: '/',
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'firebasestorage.googleapis.com',
            },
          ],
      }
}

// module.exports = nextConfig
export default nextConfig;