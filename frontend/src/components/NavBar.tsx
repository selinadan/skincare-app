import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { translations } from 'Utils/translations';
import { useProductModal } from 'Components/Modal/ModalContext';
import { palette } from 'Components/common/MuiTheme';
import { MODAL_MODES, NAV_ITEM_TYPE } from 'Utils/constants';

export default function NavBar() {
	const [buttonClick, setButtonClicked] = useState(false);

	const { handleOpenModal } = useProductModal();

	const navItems = [
		{
			type: NAV_ITEM_TYPE.ROUTE,
			name: translations.routine,
			route: '/routine',
		},
		{
			type: NAV_ITEM_TYPE.ROUTE,
			name: translations.inventory,
			route: '/inventory',
		},
		{
			type: NAV_ITEM_TYPE.BUTTON,
			name: translations.addProduct,
			route: handleOpenModal(buttonClick, MODAL_MODES.create),
		},
	];

	useEffect(() => setButtonClicked(false), []);

	return (
		<AppBar component="nav">
			{navItems.map(item =>
				item.type === NAV_ITEM_TYPE.ROUTE ? (
					<Button color="secondary">
						<NavLink to={item.route as string}>
							<Typography color={palette.dark}>
								{item.name}
							</Typography>
						</NavLink>
					</Button>
				) : (
					<Button
						color="secondary"
						onClick={() => setButtonClicked(true)}
					>
						<Typography>{item.name}</Typography>
					</Button>
				)
			)}
		</AppBar>
	);
}
