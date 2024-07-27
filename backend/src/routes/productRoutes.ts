import { Router } from 'express';

import {
	createProduct,
	updateProduct,
	getAllProducts,
	getProduct,
	deleteProduct,
} from 'Controllers/productController';

const router = Router();

router.post('/', createProduct);

router.get('/', getAllProducts);
router.get('/:id', getProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

export default router;
