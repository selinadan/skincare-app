import { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';

import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';

import { translations } from 'Utils/translations';
import { Product } from 'Utils/types';
import { getAllProducts, deleteProduct } from 'Api/productsClient';

export default function InventoryTable() {
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

	const handleDelete = (id: number) => deleteProduct(id);

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>{translations.name}</TableCell>
						<TableCell>{translations.category}</TableCell>
						<TableCell>{translations.price}</TableCell>
						<TableCell>{translations.rating}</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
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
								<TableCell>{product.name}</TableCell>
								<TableCell>{product.category}</TableCell>
								<TableCell>{product.price}</TableCell>
								<TableCell>
									<Rating />
								</TableCell>
								<TableCell align="right">
									<IconButton>
										<Edit />
									</IconButton>
									<IconButton
										color="error"
										onClick={() => handleDelete(product.id)}
									>
										<Delete />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
