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
    link: [
      {
        rel: 'icon',
        type: 'image/png', // Modify the type if your favicon is in a different format
        href: 'https://res.cloudinary.com/dtisjc6sf/image/upload/v1689122984/Focassi/favicon_guckys.ico'
      }
    ]
  },
  output: 'export',
};

module.exports = nextConfig