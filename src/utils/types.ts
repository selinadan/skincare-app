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