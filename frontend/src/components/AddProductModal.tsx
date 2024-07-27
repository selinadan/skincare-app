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
import { PRODUCT_CATEGORIES, PRODUCT_ATTRIBUTES } from 'Utils/const';
import { Product } from 'Utils/types';
import { createProduct } from 'Api/productsClient';

interface AddProductModalProps {
	showModal: boolean;
	handleShowModal: (shouldShow: boolean) => void;
}

export default function AddProductModal({
	showModal,
	handleShowModal,
}: AddProductModalProps) {
	type ProductCategories = typeof PRODUCT_CATEGORIES;
	type ProductCategoriesKeys = keyof ProductCategories;

	const productCategoriesKeys: ProductCategoriesKeys[] = Object.keys(
		PRODUCT_CATEGORIES
	) as ProductCategoriesKeys[];

	const defaultProduct = {
		id: 0,
		name: '',
		price: 0,
		category: PRODUCT_CATEGORIES.cleanser,
	};

	const [product, setProduct] = useState(defaultProduct);
	const [error, setError] = useState('');

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
			[name]: value as ProductCategoriesKeys,
		}));
	}, []);

	const handleSubmit = (product: Product) => createProduct(product);

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
						required
						label={translations.sampleName}
						name={PRODUCT_ATTRIBUTES.name}
						onChange={handleInputChange}
					/>
				</DialogContent>
				<DialogContent>
					<DialogContentText>
						{translations.category}
					</DialogContentText>
					<Select
						required
						label={translations.category}
						name={PRODUCT_ATTRIBUTES.category}
						value={product.category}
						onChange={handleSelectChange}
					>
						{productCategoriesKeys.map(key => (
							<MenuItem key={key} value={key}>
								{PRODUCT_CATEGORIES[key]}
							</MenuItem>
						))}
					</Select>
				</DialogContent>
				<DialogContent>
					<DialogContentText>{translations.price}</DialogContentText>
					<TextField
						required
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
							handleSubmit(product);
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
