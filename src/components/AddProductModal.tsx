import React, { useState, useCallback, ChangeEvent } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { translations } from 'Utils/translations';
import { PRODUCT_TYPES, PRODUCT_ATTRIBUTES } from 'Utils/const';

interface AddProductModalProps {
	showModal: boolean;
	handleShowModal: (shouldShow: boolean) => void;
}

export default function AddProductModal({
	showModal,
	handleShowModal,
}: AddProductModalProps) {
	type ProductTypes = typeof PRODUCT_TYPES;
	type ProductTypeKeys = keyof ProductTypes;

	const productTypeKeys: ProductTypeKeys[] = Object.keys(
		PRODUCT_TYPES
	) as ProductTypeKeys[];

	const defaultProduct = {
		name: '',
		price: 0,
		category: PRODUCT_TYPES.cleanser,
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

	const handleSelectChange = useCallback((event: SelectChangeEvent) => {
		const { name, value } = event.target;
		setProduct(prevProduct => ({
			...prevProduct,
			[name]: value as ProductTypeKeys,
		}));
	}, []);

	return (
		<div>
			<Dialog
				fullWidth
				open={showModal}
				onClose={() => handleShowModal(false)}
			>
				<DialogContent>
					<DialogContentText>{translations.name}</DialogContentText>
					<TextField
						label={translations.sampleName}
						name={PRODUCT_ATTRIBUTES.name}
						onChange={handleInputChange}
					/>
				</DialogContent>
				<DialogContent>
					<DialogContentText>{translations.type}</DialogContentText>
					<Select
						label={translations.type}
						name={PRODUCT_ATTRIBUTES.type}
						value={product.category}
						onChange={handleSelectChange}
					>
						{productTypeKeys.map(key => (
							<MenuItem key={key} value={key}>
								{PRODUCT_TYPES[key]}
							</MenuItem>
						))}
					</Select>
				</DialogContent>
				<DialogContent>
					<DialogContentText>{translations.price}</DialogContentText>
					<TextField
						name={PRODUCT_ATTRIBUTES.price}
						onChange={handleInputChange}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									$
								</InputAdornment>
							),
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button
						variant="contained"
						onClick={() => {
							handleShowModal(false);
						}}
					>
						{translations.addProduct}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
