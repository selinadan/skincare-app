import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';

import { theme } from 'Components/common/MuiTheme';

export const StyledInventoryContainer = styled(Paper)(() => ({
	display: 'flex',
	margin: 90,
}));

export const StyledTableContainer = styled(TableContainer)(() => ({
	border: 1,
	borderStyle: 'solid',
	borderColor: theme.palette.secondary.dark,
	boxShadow: `10px 10px ${theme.palette.secondary.dark}`,
}));

export const StyledTable = styled(Table)(() => ({
	backgroundColor: theme.palette.primary.dark,
}));

export const StyledTableBody = styled(TableBody)(() => ({
	backgroundColor: theme.palette.primary.light,
}));

export const StyledTableCell = styled(TableCell)(() => ({
	borderColor: theme.palette.secondary.dark,
}));

export const StyledTableFooter = styled(TableFooter)(() => ({
	border: 1,
	borderStyle: 'solid',
	borderLeft: 'none',
	borderRight: 'none',
	borderBottom: 'none',
}));
