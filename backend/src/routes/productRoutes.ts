import { Router } from 'express';

import {
	createProduct,
	updateProduct,
	getAllProducts,
	getProduct,
	deleteProduct,
} from 'Controllers/productController';
import { PATHS } from 'Utils/const';

const router = Router();

//GET
router.get(PATHS.root, getAllProducts);
router.get(PATHS.rootId, getProduct);

// POST
router.post(PATHS.root, createProduct);

// PATCH
router.patch(PATHS.rootId, updateProduct);

// DELETE
router.delete(PATHS.rootId, deleteProduct);

export default router;
