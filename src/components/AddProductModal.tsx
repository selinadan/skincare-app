import React, { useState, useCallback, ChangeEvent } from 'react';

import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { translations } from 'Utils/translations';
import { PRODUCT_TYPES, Product } from 'Utils/const';

interface AddProductModalProps {
	showModal: boolean;
	handleShowModal: (shouldShow: boolean) => void;
}

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function AddProductModal({
	showModal,
	handleShowModal,
}: AddProductModalProps) {
	const defaultProduct = {
		name: '',
		price: 0,
		type: PRODUCT_TYPES.cleanser,
	};

	const [product, setProduct] = useState(defaultProduct);

	const handleInputChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = event.target;
			setProduct(prevProduct => ({
				...prevProduct,
				[name]: value,
			}));
		},
		[]
	);

	const handleSelectChange = useCallback(
		(event: SelectChangeEvent<string>) => {
			const { name, value } = event.target;
			setProduct(prevProduct => ({
				...prevProduct,
				[name]: value,
			}));
		},
		[]
	);

	return (
		<div>
			<Modal open={showModal} onClose={() => handleShowModal(false)}>
				<Grid container sx={style}>
					<TextField
						label="Name"
						name="name"
						onChange={handleInputChange}
					/>
					<Select
						label={translations.type}
						name="type"
						value={product.type}
						onChange={handleSelectChange}
					>
						{PRODUCT_TYPES.map(type => (
							<MenuItem>{type}</MenuItem>
						))}
					</Select>
					<TextField
						label="Price"
						name="price"
						onChange={handleInputChange}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									$
								</InputAdornment>
							),
						}}
					/>
					<Button
						onClick={() => {
							handleShowModal(false);
						}}
					>
						{translations.addProduct}
					</Button>
				</Grid>
			</Modal>
		</div>
	);
}
