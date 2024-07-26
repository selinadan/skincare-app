import React, { useState, useCallback } from 'react';

import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { translations } from 'Utils/translations';

interface AddProductModalProps {
	showModal: boolean;
	handleShowModal: (shouldShow: boolean) => void;
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
						{translations.addProduct}
					</Button>
				</Grid>
			</Modal>
		</div>
	);
}