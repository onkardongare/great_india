import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    // images: {
    //   remotePatterns: [
    //     {
    //       protocol: "https",
    //       hostname: "via.placeholder.com",
    //     },
    //   ],
    // },
    // next.config.js
    images: {
      domains: ["images.unsplash.com", "example.com", "via.placeholder.com"],
    },
  }; 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);