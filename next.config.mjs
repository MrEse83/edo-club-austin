/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add remote hosts here when real photos move to Cloudinary / a CDN,
    // e.g. { remotePatterns: [{ protocol: 'https', hostname: 'res.cloudinary.com' }] }
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
};

export default nextConfig;
