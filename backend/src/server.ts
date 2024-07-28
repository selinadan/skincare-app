import productRoutes from 'Routes/productRoutes';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import { PATHS, FRONTEND_URL } from 'Utils/constants';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
app.use(
	cors({
		origin: FRONTEND_URL,
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		credentials: true,
	})
);

// Routes
app.use(PATHS.products, productRoutes);

app.use((_request, response) => {
	response.status(404).json({ message: 'Route not found' });
});

app.use((request, _response, next) => {
	console.log(`Request received: ${request.method} ${request.url}`);
	next();
});

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
