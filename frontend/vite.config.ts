import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { BACKEND_URL } from '../frontend/src/utils/constants';

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
			Components: resolve(__dirname, 'src/components'),
			Api: resolve(__dirname, 'src/api'),
			Utils: resolve(__dirname, 'src/utils'),
		},
	},
	server: {
		proxy: {
			'/api': {
				target: BACKEND_URL,
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			},
		},
	},
});
