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
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					color: 'transparent',
					stroke: palette.dark,
					strokeWidth: 1.5,
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				head: {
					fontWeight: 700,
				},
			},
		},
	},
	typography: {
		fontFamily: `'Roboto Mono', monospace`,
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
