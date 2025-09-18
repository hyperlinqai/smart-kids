#!/usr/bin/env node

import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function buildProject() {
  try {
    console.log('Building STEM Kids Workshop...');
    
    await build({
      root: path.resolve(__dirname, 'client'),
      publicDir: path.resolve(__dirname, 'public'),
      build: {
        outDir: path.resolve(__dirname, 'dist/public'),
        emptyOutDir: true,
        rollupOptions: {
          external: [],
        },
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'client', 'src'),
          '@shared': path.resolve(__dirname, 'shared'),
        },
      },
      define: {
        global: 'globalThis',
      },
      optimizeDeps: {
        exclude: ['@rollup/rollup-linux-x64-gnu', '@rollup/rollup-linux-x64-musl']
      },
    });
    
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildProject();
