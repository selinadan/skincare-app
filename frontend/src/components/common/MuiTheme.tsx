import { createTheme } from '@mui/material/styles';

export const palette = {
	lighter: '#FFEAE3',
	light: '#FFCBCB',
	medium: '#FFB1B1',
	dark: '#121481',
};

export const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: palette.light,
					marginLeft: 240,
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					color: 'transparent',
					stroke: palette.dark,
					strokeWidth: 1.15,
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					display: 'flex',
					flexDirection: 'column',
					position: 'fixed',
					boxShadow: 'none',
					alignItems: 'center',
					width: 240,
					top: 0,
					left: 0,
					borderRight: `1px solid ${palette.dark}`,
					height: '100vh',
					'& .MuiButton-root': {
						borderRadius: '0',
						borderBottom: `1px solid ${palette.dark}`,
						width: '100%',
						paddingTop: '1rem',
						paddingBottom: '1rem',
						// '&:first-of-type': {
						// 	borderBottom: 'none',
						// },
						// '&:last-of-type': {
						// 	borderTop: 'none',
						// },
						'&:hover': {
							boxShadow: `10px 10px ${palette.dark}`,
						},
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				outlined: {
					border: '1px',
					borderStyle: 'solid',
					borderColor: palette.dark,
					borderRadius: 0,
				},
			},
		},
	},
	typography: {
		fontFamily: `'Courier Prime', monospace`,
		fontSize: 18,
	},
	palette: {
		primary: {
			light: palette.lighter,
			main: palette.light,
			dark: palette.medium,
		},
		secondary: {
			main: palette.dark,
		},
		text: {
			primary: palette.dark,
		},
	},
});
