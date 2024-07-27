import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
	plugins: [react()],
	root: '.',
	publicDir: 'public',
	build: {
		outDir: '../build',
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
			},
		},
	},
	resolve: {
		alias: {
			// '@': resolve(__dirname, 'src'),
			Components: resolve(__dirname, 'src/components'),
			Api: resolve(__dirname, 'src/api'),
			Utils: resolve(__dirname, 'src/utils'),
		},
	},
});
