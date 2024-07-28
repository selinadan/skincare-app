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
app.use(`${PATHS.products}`, productRoutes);

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
