import { useEffect, useState } from 'react';

import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';

import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';

import { MODAL_MODES } from 'Utils/constants';
import { translations } from 'Utils/translations';
import { Product } from 'Utils/types';
import { getAllProducts, deleteProduct } from 'Api/productsClient';
import { useProductModal } from 'Components/Modal/ModalContext';
import {
	StyledTableContainer,
	StyledTable,
	StyledTableBody,
	StyledTableCell,
	StyledTableFooter,
} from 'Components/common/StyledInventory';

export default function InventoryTable() {
	const { handleOpenModal } = useProductModal();

	const [products, setProducts] = useState<Product[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const productsData = (await getAllProducts()) ?? [];
				setProducts(productsData);
			} catch (error) {
				const message = 'Error fetching products';
				setError(message);
				console.error(message, error);
			}
		};

		fetchProducts();
	}, []);

	const handleEditProduct = (product: Product) =>
		handleOpenModal(true, MODAL_MODES.update, product);

	const handleDeleteProduct = (id: number) => deleteProduct(id);

	const getPriceTotal = () =>
		products.reduce((acc, product) => {
			return acc + product.price;
		}, 0);

	return (
		<StyledTableContainer>
			<StyledTable>
				<TableHead>
					<TableRow>
						<StyledTableCell>{translations.name}</StyledTableCell>
						<StyledTableCell>
							{translations.category}
						</StyledTableCell>
						<StyledTableCell>{translations.price}</StyledTableCell>
						<StyledTableCell>{translations.rating}</StyledTableCell>
						<StyledTableCell>
							{translations.actions}
						</StyledTableCell>
					</TableRow>
				</TableHead>
				<StyledTableBody>
					{products &&
						products.map((product, index) => (
							<TableRow
								key={index}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							>
								<StyledTableCell>
									{product.name}
								</StyledTableCell>
								<StyledTableCell>
									{product.category}
								</StyledTableCell>
								<StyledTableCell>
									{product.price}
								</StyledTableCell>
								<StyledTableCell>
									<Rating />
								</StyledTableCell>
								<StyledTableCell align="right">
									<IconButton
										onClick={() =>
											handleEditProduct(product)
										}
									>
										<Edit />
									</IconButton>
									<IconButton
										onClick={() =>
											handleDeleteProduct(product.id)
										}
									>
										<Delete />
									</IconButton>
								</StyledTableCell>
							</TableRow>
						))}
				</StyledTableBody>
				<StyledTableFooter>
					<StyledTableCell>
						{`${translations.total}: ${translations.currency}${getPriceTotal()}`}
					</StyledTableCell>
				</StyledTableFooter>
			</StyledTable>
		</StyledTableContainer>
	);
}
