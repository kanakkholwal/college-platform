/** @type {import('next').NextConfig} */
import withPWA from '@ducanh2912/next-pwa';

const pwaConfig = withPWA({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    disable: process.env.NODE_ENV !== "production",
    workboxOptions: {
        disableDevLogs: true,
    },
});

const nextConfig = {
    reactStrictMode: true,
    crossOrigin: 'anonymous',
    output: "standalone",
    logging: {
        fetches: {
            fullUrl: false
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "**",
            },
        ],
    },
}

export default pwaConfig(nextConfig);
