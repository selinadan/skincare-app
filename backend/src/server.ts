import express from 'express';
import bodyParser from 'body-parser';
import { productController } from './controllers/productController';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/api/products', productController.getAllProducts);
app.get('/api/products/:id', productController.getProductById);
app.post('/api/products/:id', productController.createProduct);
app.put('/api/products/:id', productController.updateProduct);
app.put('/api/products/:id', productController.updateProduct);

// Start server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
