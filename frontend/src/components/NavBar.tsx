import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { translations } from 'Utils/translations';

export default function NavBar() {
	return (
		<AppBar position="static">
			<Grid container>
				<Grid item>
					<Button>
						<NavLink
							to="/routine"
							style={({ isActive }) => ({
								color: isActive ? 'red' : 'inherit',
							})}
						>
							<Typography color="pink">
								{translations.routine}
							</Typography>
						</NavLink>
					</Button>
				</Grid>
				<Grid item>
					<Button>
						<NavLink
							to="/inventory"
							style={({ isActive }) => ({
								color: isActive ? 'red' : 'inherit',
							})}
						>
							<Typography color="pink">
								{translations.inventory}
							</Typography>
						</NavLink>
					</Button>
				</Grid>
			</Grid>
		</AppBar>
	);
}
