import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';

import DisabledByDefaultSharpIcon from '@mui/icons-material/DisabledByDefaultSharp';

import { palette } from 'Components/common/MuiTheme';

interface StyledTitleBarProps {
	title: string;
	onClose: () => void;
}

const StyledGrid = styled(Grid)(() => ({
	borderBottom: `2px solid ${palette.dark}`,
	height: 50,
	justifyContent: 'space-between',
	alignItems: 'center',
	display: 'flex',
	backgroundColor: palette.medium,
	'& .MuiIconButton-root': {
		backgroundColor: 'transparent',
		// border: `2px solid ${palette.dark}`,
		width: 25,
		height: 25,
		marginLeft: '5px',
		// stroke: 'transparent',
		border: 0,
		color: palette.dark,
	},
}));

export default function StyledTitleBar({
	title,
	onClose,
}: StyledTitleBarProps) {
	return (
		<StyledGrid container>
			<Grid item marginLeft={2}>
				{title}
			</Grid>
			<Grid item marginRight={2}>
				<IconButton onClick={() => onClose()}>
					<DisabledByDefaultSharpIcon />
				</IconButton>
			</Grid>
		</StyledGrid>
	);
}
