// stackbit.config.ts
import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

import { page } from './.stackbit/models/page';


export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'custom',
    nodeVersion: '18',
    devCommand: "node_modules/.bin/astro dev --port {PORT} --hostname 127.0.0.1",
    experimental: {
        ssg: {
          name: "Astro",
          logPatterns: {
            up: ["is ready", "astro"],
          },
          directRoutes: {
            "socket.io": "socket.io",
          },
          passthrough: ["/vite-hmr/**"],
        },
      },
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['src/content/docs'],
            models: [page],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'src/assets/',
                uploadDir: '_images',
                publicPath: '/src/assets/'
            }
        })
    ],
    modelExtensions: [{ name: 'page', type: 'page', urlPath: '/{slug}' }]
});