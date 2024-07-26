import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';

import Clear from '@mui/icons-material/Clear';

import { translations } from 'Utils/translations';

export default function RoutineTable() {
	function createData(
		name: string,
		calories: number,
		fat: number,
		carbs: number,
		price: number,
	  ) {
		return { name, calories, fat, carbs, price };
	  }
	  
	  const rows = [
		createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
		createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Cupcake', 305, 3.7, 67, 4.3),
		createData('Gingerbread', 356, 16.0, 49, 3.9),
	  ];
	  
		return (
		  <TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
			  <TableHead>
				<TableRow>
					<TableCell align='right'>Step</TableCell>
					<TableCell>{translations.name}</TableCell>
					<TableCell>{translations.type}</TableCell>
					<TableCell>{translations.price}</TableCell>
					<TableCell>{translations.rating}</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{rows.map((row, index) => (
					<TableRow
						key={index}
						sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
					>
						<TableCell component="th" scope="row" align='right'>
							{index}
						</TableCell>
						<TableCell component="th" scope="row">
							<TextField id="name" label="Outlined" variant="standard">
								{row.name}
							</TextField>
						</TableCell>
						<TableCell>
							{row.price}
						</TableCell>
						<TableCell>
							<TextField id="price" label="Outlined" variant="standard">
								{row.price}
							</TextField>
						</TableCell>
						<TableCell>
							<Rating />
						</TableCell>
						<TableCell>
							<Button color="error">
								<Clear />
							</Button>
							</TableCell>
						</TableRow>
					))}
			</TableBody>
			</Table>
		</TableContainer>
	);
}