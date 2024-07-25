export type UserSkin = {
	type: string;
	concerns: SkinConcerns[];
	gender: Gender;
	age: number;
	avoidedIngredients: string[];
	preferredIngredients: string[];
}

export type SkinConcerns = [];

export type Gender = 'female' | 'male' | 'nonBinary' | 'preferNotToSay';

export type Product = {
	'productId': number;
	'type': string;
	'price': number;
	'attributes': string[];
}

export type Routine = {
	startDate: string;
	products: Product[];
	totalPrice: number;
}