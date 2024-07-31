import { useEffect, useState, useCallback, ChangeEvent } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import StyledTitleBar from 'Components/common/StyledTitleBar';

import { translations } from 'Utils/translations';
import {
	PRODUCT_CATEGORIES,
	PRODUCT_ATTRIBUTES,
	MODAL_MODES,
} from 'Utils/constants';
import { Product } from 'Utils/types';
import { createProduct, updateProduct } from 'Api/productsClient';
import { useProductModal } from './ModalContext';

export default function ProductModal() {
	const { isOpen, mode, product, handleOpenModal } = useProductModal();

	type ProductCategories = typeof PRODUCT_CATEGORIES;
	type ProductCategoriesKeys = keyof ProductCategories;

	const productCategoriesKeys: ProductCategoriesKeys[] = Object.keys(
		PRODUCT_CATEGORIES
	) as ProductCategoriesKeys[];

	const [newProduct, setNewProduct] = useState<Product>(product);
	const [submitButtonText, setSubmitButtonText] = useState('');

	const isCreate = mode === MODAL_MODES.create;
	const isUpdate = mode === MODAL_MODES.update;

	useEffect(() => {
		if (isCreate) {
			setSubmitButtonText(translations.addProduct);
		} else if (isUpdate) {
			setSubmitButtonText(translations.editProduct);
		}
	});

	const handleInputChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = event.target;
			setNewProduct(prevProduct => ({
				...prevProduct,
				[name]: value,
			}));
		},
		[]
	);

	const handleSelectChange = useCallback((event: SelectChangeEvent) => {
		const { name, value } = event.target;
		setNewProduct(prevProduct => ({
			...prevProduct,
			[name]: value as ProductCategoriesKeys,
		}));
	}, []);

	const handleSubmit = () => {
		if (isCreate) {
			createProduct(newProduct);
		} else if (isUpdate) {
			updateProduct(newProduct);
		}
	};

	return (
		<div>
			<Dialog
				fullWidth
				open={isOpen}
				onClose={() => handleOpenModal(false)}
			>
				<StyledTitleBar onClose={() => handleOpenModal(false)} />
				<DialogContent>
					<DialogContentText>{translations.name}</DialogContentText>
					<TextField
						required
						label={!product.name ? translations.sampleName : ''}
						name={PRODUCT_ATTRIBUTES.name}
						onChange={handleInputChange}
						value={newProduct.name}
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
						value={newProduct.category}
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
							handleSubmit();
							handleOpenModal(true);
						}}
					>
						{submitButtonText}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
