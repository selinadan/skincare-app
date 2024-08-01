import { createTheme } from '@mui/material/styles';

export const palette = {
	lighter: '#ffffff',
	light: '#ffffff',
	medium: '#ffffff',
	dark: '#000000',
};
// export const palette = {
// 	lighter: '#000000',
// 	light: '#000000',
// 	medium: '#000000',
// 	dark: '#ffffff',
// };
// export const palette = {
// 	lighter: '#FFEAE3',
// 	light: '#FFCBCB',
// 	medium: '#FFB1B1',
// 	dark: '#121481',
// };

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
					borderRadius: 0,
					border: `2px solid ${palette.dark}`,
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
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 0,
					'&:hover': {
						boxShadow: `10px 10px ${palette.dark}`,
					},
				},
				outlined: {
					border: '1px',
					borderStyle: 'solid',
					borderColor: palette.dark,
				},
			},
		},
		MuiDialog: {
			styleOverrides: {
				root: {
					'& .MuiPaper-root': {
						backgroundColor: palette.lighter,
						border: 2,
						borderStyle: 'solid',
						borderRadius: 0,
						boxShadow: `10px 10px ${palette.dark}`,
					},
					'& .MuiButton-root': {
						border: 1,
						borderStyle: 'solid',
						borderRadius: 0,
						color: palette.dark,
						boxShadow: `10px 10px ${palette.dark}`,
					},
				},
			},
		},
		MuiDialogContentText: {
			styleOverrides: {
				root: {
					color: palette.dark,
					fontSize: '16px',
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					height: 30,
					borderRadius: 0,
					'&:hover': {
						boxShadow: `10px 10px ${palette.dark}`,
						border: 1,
						borderStyle: 'solid',
						borderColor: palette.dark,
					},
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: palette.dark,
					},
				},
			},
		},
	},
	typography: {
		fontFamily: `'Courier Prime', monospace`,
		fontSize: 16,
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
