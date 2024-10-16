// /** @type {import('next').NextConfig} */
// import { fileURLToPath } from 'url';
// import path from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const nextConfig = {

//     output: "export",
//     sassOptions: {
//     includePaths: [path.join(__dirname, 'src')],
// },

// eslint: {
//   ignoreDuringBuilds: true,
// },
// images: {
// unoptimized: true,
// },

// webpack: (
//   config,
//   { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
// ) => {
//   // Important: return the modified config
//   return config;
// },
// };


// export default nextConfig;


/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const nextConfig = {
  mode: "production",
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
  trailingSlash: true,
   output: 'export',
    webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
      // Important: return the modified config
      return config;
    },
  
  
};

export default nextConfig;