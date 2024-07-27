import React, { useState, useCallback } from 'react';
import Button from '@mui/material/Button';

import RoutineTable from './RoutineTable';
import AddProductModal from '../AddProductModal';

export default function RoutineContainer() {
	const [showAddProductModal, setShowAddProductModal] = useState(false);

	const handleShowAddProductModal = useCallback((shouldShow: boolean) => {
		setShowAddProductModal(shouldShow);
	}, []);

	return (
		<div>
			<Button
				variant="contained"
				onClick={() => handleShowAddProductModal(true)}
			>
				Add Product
			</Button>
			<AddProductModal
				showModal={showAddProductModal}
				handleShowModal={handleShowAddProductModal}
			/>
			<RoutineTable />
		</div>
	);
}
