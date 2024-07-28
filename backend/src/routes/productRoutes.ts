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
const PATH_ID = `${PATHS.root}${PATHS.id}`;

//GET
router.get(PATHS.root, getAllProducts);
router.get(PATH_ID, getProduct);

// POST
router.post(PATHS.root, createProduct);

// PUT
router.put(PATH_ID, updateProduct);

// DELETE
router.delete(PATH_ID, deleteProduct);

export default router;
