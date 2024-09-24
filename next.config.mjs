// /** @type {import('next').NextConfig} */
// const nextConfig = {

//     // next.config.js
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'example.com',
//         port: '', // leave empty if there's no specific port
//         pathname: '/**', // wildcard to allow all paths from this hostname
//       },
//     ],
//   },
// };

// };

// export default nextConfig;







// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '', // leave empty if there's no specific port
        pathname: '/**', // wildcard to allow all paths from this hostname
      },
    ],
  },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
};

export default nextConfig;
