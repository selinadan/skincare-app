import { useState, useCallback } from 'react';
import Button from '@mui/material/Button';

import InventoryTable from './InventoryTable';
import AddProductModal from '../AddProductModal';

export default function InventoryContainer() {
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
			<InventoryTable />
		</div>
	);
}
