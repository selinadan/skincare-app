import React, { useState, createContext, useContext, ReactNode } from 'react';

interface ModalContextProps {
	isOpen: boolean;
	mode: string;
	productContext?: ReactNode | null;
	handleOpenModal?: (
		open: boolean,
		mode: string,
		productContext: ReactNode
	) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useProductModal = () => {
	const context = useContext(ModalContext);

	return context;
};

const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [productContext, setProductContext] = useState<ReactNode | null>(
		null
	);
	const [mode, setMode] = useState('');

	const handleOpenModal = (
		open: boolean,
		mode: string,
		productContext: ReactNode
	) => {
		setMode(mode);
		setProductContext(productContext);
		setIsOpen(open);
	};

	return (
		<ModalContext.Provider
			value={{ isOpen, mode, productContext, handleOpenModal }}
		>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
