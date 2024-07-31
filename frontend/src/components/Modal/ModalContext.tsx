import React, {
	useState,
	createContext,
	useContext,
	ReactNode,
	useCallback,
} from 'react';

import { Product } from 'Utils/types';
import { PRODUCT_CATEGORIES } from 'Utils/constants';

interface ModalContextProps {
	isOpen: boolean;
	mode: string;
	product: Product;
	handleOpenModal: (open: boolean, mode?: string, product?: Product) => void;
}

interface ModalProviderProps {
	children: ReactNode;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useProductModal = (): ModalContextProps => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error('useProductModal must be used within a ModalProvider');
	}

	return context;
};

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
	const defaultProduct: Product = {
		id: 0,
		name: '',
		price: 0,
		category: PRODUCT_CATEGORIES.cleanser,
	};

	const [isOpen, setIsOpen] = useState(false);
	const [mode, setMode] = useState('');
	const [product, setProduct] = useState(defaultProduct);

	const handleOpenModal = useCallback(
		(
			open: boolean,
			mode: string = '',
			product: Product = defaultProduct
		) => {
			setIsOpen(open);
			setMode(mode);
			setProduct(product);
		},
		[]
	);

	return (
		<ModalContext.Provider
			value={{ isOpen, mode, product, handleOpenModal }}
		>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
