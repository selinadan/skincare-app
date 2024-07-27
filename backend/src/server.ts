import { Router } from 'express';

import productRoutes from 'Routes/productRoutes';
import { PATHS } from 'Utils/const';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const router = Router();

app.use(PATHS.api, router);

router.use(PATHS.products, productRoutes);

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
