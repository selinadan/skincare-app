import express from 'express';
import bodyParser from 'body-parser';

import router from './routes';
import { PATHS } from 'Utils/const';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(PATHS.api, router);

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
