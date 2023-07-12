/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  head: {
    // Add your favicon link to the head section
    // Replace "favicon.ico" with the actual name and extension of your favicon file
    link: [
      {
        rel: 'icon',
        type: 'image/png', // Modify the type if your favicon is in a different format
        href: 'https://res.cloudinary.com/dtisjc6sf/image/upload/v1689122984/Focassi/favicon_guckys.ico' // Replace with the actual path to your favicon file
      }
    ]
  },
  output: 'export',
};

module.exports = nextConfig