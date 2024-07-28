import { useState, useCallback } from 'react';
import Button from '@mui/material/Button';

import RoutineTable from './RoutineTable';
import ProductModal from '../ProductModal';
import { translations } from 'Utils/translations';

export default function RoutineContainer() {
	const [isOpen, setIsOpen] = useState(false);

	const handleShowProductModal = useCallback((shouldShow: boolean) => {
		setIsOpen(shouldShow);
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
			<RoutineTable />
		</div>
	);
}
