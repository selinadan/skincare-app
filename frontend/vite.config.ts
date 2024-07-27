import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	root: '.',
	publicDir: 'public',
	build: {
		outDir: '../build',
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, 'src/index.tsx'),
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			Components: path.resolve(__dirname, 'src/components'),
			Api: path.resolve(__dirname, 'src/api'),
			Utils: path.resolve(__dirname, 'src/utils'),
		},
	},
});
