import { Router } from 'express';

import productRoutes from './productRoutes';
import { PATHS } from 'Utils/const';

const router = Router();

router.use(PATHS.products, productRoutes);

export default router;
