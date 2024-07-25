import React from 'react';
import Button from '@mui/material/Button';

import RoutineTable from './RoutineTable.tsx';

export default function RoutineContainer() {
	return (
		<div>
			<Button variant='contained'>Add Product</Button>
			<RoutineTable />
		</div>
	);
}