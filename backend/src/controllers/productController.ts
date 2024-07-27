import express, { Request, Response } from 'express';
import { ROUTES } from 'Utils/routes';

const productRouter = express.Router();

productRouter.get('/', (_request: Request, response: Response) =>
	response.send('Get all products')
);

productRouter.get('/:id', (request: Request, response: Response) =>
	response.send(`Get product with ID ${request.params.id}`)
);

productRouter.post('/', (_request: Request, response: Response) =>
	response.send('Create new product')
);

productRouter.put('/:id', (request: Request, response: Response) =>
	response.send(`Update product with ID ${request.params.id}`)
);

productRouter.delete('/:id', (request: Request, response: Response) =>
	response.send(`Delete product with ID ${request.params.id}`)
);

export { productRouter };
