import { NavLink } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { StyledAppBar } from 'Components/common/StyledAppBar';
import { translations } from 'Utils/translations';

export default function NavBar() {
	return (
		<StyledAppBar position="static">
			<Grid container>
				<Grid item>
					<Button>
						<NavLink to="/routine">
							<Typography>{translations.routine}</Typography>
						</NavLink>
					</Button>
				</Grid>
				<Grid item>
					<Button>
						<NavLink to="/inventory">
							<Typography>{translations.inventory}</Typography>
						</NavLink>
					</Button>
				</Grid>
			</Grid>
		</StyledAppBar>
	);
}
