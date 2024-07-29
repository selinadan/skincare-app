import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { PATHS, FRONTEND_URL, STATUS } from 'Utils/constants';
import productRoutes from 'Routes/productRoutes';
import { morganFormat, logger } from 'Utils/logger';
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morganFormat);
// CORS
app.use(cors({
    origin: FRONTEND_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
// Routes
app.use(PATHS.products, productRoutes);
app.use((request, response) => {
    logger.warn(`404 Not Found: ${request.method} ${request.url}`);
    response.status(STATUS.NOT_FOUND).json({ message: 'Route not found' });
});
app.use((request, _response, next) => {
    logger.info(`Request received: ${request.method} ${request.url}`);
    next();
});
app.use((error, request, response) => {
    logger.error(`500 Internal Server Error: ${request.method} ${request.url} - ${error.message}`);
    response
        .status(STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal Server Error' });
});
// Start server
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});
