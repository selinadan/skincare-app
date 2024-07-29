import Button from '@mui/material/Button';

import InventoryTable from './InventoryTable';
import { useProductModal } from 'Components/Modal/ModalContext';
import { translations } from 'Utils/translations';
import { MODAL_MODES } from 'Utils/constants';

export default function InventoryContainer() {
	const { handleOpenModal } = useProductModal();

	return (
		<div>
			<Button
				variant="contained"
				onClick={() => {
					handleOpenModal(true, MODAL_MODES.create);
				}}
			>
				{translations.addProduct}
			</Button>
			<InventoryTable />
		</div>
	);
}
