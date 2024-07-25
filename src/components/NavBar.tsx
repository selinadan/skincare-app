import React from 'react';

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
					<Typography color="pink">
						{translations.routine}
					</Typography>
				</Button>
				</Grid>
				<Grid item>
					<Button>
					<Typography color="pink">
						{translations.inventory}
					</Typography>
				</Button>
				</Grid>
			</Grid>
		</AppBar>
	)
}