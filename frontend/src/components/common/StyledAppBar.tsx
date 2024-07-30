import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

import { theme } from 'Components/common/MuiTheme';

export const StyledAppBar = styled(AppBar)(() => ({
	backgroundColor: theme.palette.primary.dark,
	height: '5rem',
	boxShadow: 'none',
	justifyContent: 'center',
}));
