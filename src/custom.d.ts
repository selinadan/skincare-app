declare module '*.css';
declare module 'react-hot-loader/patch';

declare module 'webpack' {
	interface HotModule {
		accept(dependencies?: any[], callback?: () => void): void;
		dispose(callback?: () => void): void;
	}

	interface NodeModule {
		hot: HotModule;
	}
}
