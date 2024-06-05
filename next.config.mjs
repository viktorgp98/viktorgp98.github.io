/**
 * @type {import('next').NextConfig}
 */
let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true

const nextConfig = {
  
  reactStrictMode: true,

 // Add basePath
  basePath: 'https://viktorgp98.github.io/',

}
    module.exports = nextConfig
  
  
    // output:  process.env.NODE_ENV !== "production" ? undefined: "export",
    //   images: {
    //     unoptimized: envImageUnoptimize,
    //     loader: 'imgix',
    //     path: '/',
    //       remotePatterns: [
    //         {
    //           protocol: 'https',
    //           hostname: 'firebasestorage.googleapis.com',
    //         },
    //       ],
    //   }


// module.exports = nextConfig
// export default nextConfig;