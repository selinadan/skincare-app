import React, { useState, useCallback } from 'react';

import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface AddProductModalProps {
	showModal: boolean;
	handleShowModal: (boolean) => void;
}

export default function AddProductModal({
	showModal,
	handleShowModal
}: AddProductModalProps) {
	return (
		<div>
			<Modal
				open={showModal}
				onClose={() => handleShowModal(false)}
			>
				<Grid container>
					<Grid item>
						<TextField>

						</TextField>
					</Grid>
					<Button onClick={() => {
						handleShowModal(false)
					}}>
						Add Product
					</Button>
				</Grid>
			</Modal>
		</div>
	);
}