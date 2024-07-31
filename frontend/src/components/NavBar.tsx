import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

import { translations } from 'Utils/translations';
import { useProductModal } from 'Components/Modal/ModalContext';
import { MODAL_MODES, NAV_ITEM_TYPE } from 'Utils/constants';

export default function NavBar() {
	const { handleOpenModal } = useProductModal();

	const navLinks = [
		{
			type: NAV_ITEM_TYPE.ROUTE,
			label: translations.routine,
			path: '/routine',
		},
		{
			type: NAV_ITEM_TYPE.ROUTE,
			label: translations.inventory,
			path: '/inventory',
		},
		{
			type: NAV_ITEM_TYPE.BUTTON,
			label: translations.addProduct,
			action: () => handleOpenModal(true, MODAL_MODES.create),
		},
	];

	return (
		<AppBar component="nav">
			{navLinks.map((link, index) => (
				<Button
					key={index}
					color="secondary"
					component={link.action ? 'button' : NavLink}
					to={link.path}
					onClick={link.action ? link.action : undefined}
				>
					{link.label}
				</Button>
			))}
		</AppBar>
	);
}
