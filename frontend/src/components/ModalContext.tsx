import React, { useState, createContext, useContext, ReactNode } from 'react';

import ProductModal from './ProductModal';
import { createProduct } from 'Api/productsClient';

interface ModalContextProps {
	isOpen: boolean;
	handleShowModal: (shouldShow: boolean) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = (): ModalContextProps => {
	const context = useContext(ModalContext);

	return context;
};

const ModalProvider = ({children}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [product, setProduct] = useState({});

const 

	return (
		<ModalContext.Provider value={{isOpen: isOpen, product, openModal, closeModal }}>
			{children}
			(isOpen &&
				<ProductModal isOpen={isOpen} handleShowModal={handleShowModal})
		</ModalContext.Provider>
	);
}

export default ModalProvider;