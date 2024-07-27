import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
	plugins: [react()],
	root: './src',
	publicDir: '../public',
	build: {
		outDir: '../build',
		emptyOutDir: true,
		rollupOptions: {
			input: resolve(__dirname, './src/index.tsx'),
		},
	},
	resolve: {
		alias: {
			// '@': resolve(__dirname, './src'),
			Components: resolve(__dirname, './src/components'),
			Api: resolve(__dirname, './src/api'),
			Utils: resolve(__dirname, './src/utils'),
		},
	},
});
