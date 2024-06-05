/**
 * @type {import('next').NextConfig}
 */


const nextConfig = {
  
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  
 // Add basePath
  basePath: 'https://viktorgp98.github.io/',
}
}
    module.exports = nextConfig
  
  //let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true
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