import { useState, useCallback } from 'react';
import Button from '@mui/material/Button';

import InventoryTable from './InventoryTable';
import ProductModal from '../ProductModal';
import { translations } from 'Utils/translations';

export default function InventoryContainer() {
	const [isOpen, setIsOpen] = useState(false);

	const handleShowProductModal = useCallback((open: boolean) => {
		setIsOpen(open);
	}, []);

	return (
		<div>
			<Button
				variant="contained"
				onClick={() => handleShowProductModal(true)}
			>
				{translations.addProduct}
			</Button>
			<ProductModal
				isOpen={isOpen}
				handleShowModal={handleShowProductModal}
			/>
			<InventoryTable />
		</div>
	);
}
