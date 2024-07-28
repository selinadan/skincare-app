import { useState, useCallback } from 'react';
import Button from '@mui/material/Button';

import InventoryTable from './InventoryTable';
import { useProductModal } from '../Modal/ModalContext';
import { translations } from 'Utils/translations';
import { MODAL_MODES } from 'Utils/const';

export default function InventoryContainer() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenModal = useCallback((open: boolean) => {
		setIsOpen(open);
	}, []);

	return (
		<div>
			<Button
				variant="contained"
				onClick={() => {
					handleOpenModal(true);
					useProductModal(isOpen, MODAL_MODES.create);
				}}
			>
				{translations.addProduct}
			</Button>
			{/* <ProductModal isOpen={isOpen} handleOpenModal={handleOpenModal} /> */}
			<InventoryTable />
		</div>
	);
}
