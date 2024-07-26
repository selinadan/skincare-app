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
	return (
		<div>
			<Modal open={showModal} onClose={() => handleShowModal(false)}>
				<Grid container sx={style}>
					<Grid item>
						<TextField></TextField>
					</Grid>
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
