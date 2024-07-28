import Button from '@mui/material/Button';

import RoutineTable from './RoutineTable';
import { useProductModal } from '../Modal/ModalContext';
import { translations } from 'Utils/translations';
import { MODAL_MODES } from 'Utils/constants';

export default function RoutineContainer() {
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
			<RoutineTable />
		</div>
	);
}
