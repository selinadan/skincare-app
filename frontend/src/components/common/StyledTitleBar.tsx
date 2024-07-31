import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import DisabledByDefaultSharpIcon from '@mui/icons-material/DisabledByDefaultSharp';

import { palette } from 'Components/common/MuiTheme';

interface StyledTitleBarProps {
	onClose: () => void;
}

const StyledBox = styled(Box)(() => ({
	borderBottom: `2px solid ${palette.dark}`,
	height: 90,
	alignContent: 'center',
	justifyContent: 'center',
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

export default function StyledTitleBar({ onClose }: StyledTitleBarProps) {
	return (
		<StyledBox>
			<IconButton onClick={() => onClose()}>
				<DisabledByDefaultSharpIcon />
			</IconButton>
			wrowwwww
		</StyledBox>
	);
}
