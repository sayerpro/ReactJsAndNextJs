import {ReactNode, ReactElement} from "react";

export interface Person {
	name: string;
	imageId: string;
}

export interface Children {
	children: ReactNode;
}

export interface ElementReact {
	element: ReactElement;
}

export interface ProfileProps {
	imageId: string;
	name: string;
	profession: string;
	awards: string[];
	discovery: string;
	imageSize?: number;
}

export interface People {
	id?: number;
	name: string;
	profession: string;
	accomplishment?: string;
	imageId: string;
}

export const peoples: People[] = [
	{
		id: 0, // Used in JSX as a key
		name: "Creola Katherine Johnson",
		profession: "mathematician",
		accomplishment: "spaceflight calculations",
		imageId: "MK3eW3A"
	},
	{
		id: 1, // Used in JSX as a key
		name: "Mario José Molina-Pasquel Henríquez",
		profession: "chemist",
		accomplishment: "discovery of Arctic ozone hole",
		imageId: "mynHUSa"
	},
	{
		id: 2, // Used in JSX as a key
		name: "Mohammad Abdus Salam",
		profession: "physicist",
		accomplishment: "electromagnetism theory",
		imageId: "bE7W1ji"
	},
	{
		id: 3, // Used in JSX as a key
		name: "Percy Lavon Julian",
		profession: "chemist",
		accomplishment: "pioneering cortisone drugs, steroids and birth control pills",
		imageId: "IOjWm71"
	},
	{
		id: 4, // Used in JSX as a key
		name: "Subrahmanyan Chandrasekhar",
		profession: "astrophysicist",
		accomplishment: "white dwarf star mass calculations",
		imageId: "lrWQx8l"
	}
];

export interface recipe {
	id: string;
	name: string;
	ingredients: string[];
}

export const recipes: recipe[] = [
	{
		id: "greek-salad",
		name: "Greek Salad",
		ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"]
	},
	{
		id: "hawaiian-pizza",
		name: "Hawaiian Pizza",
		ingredients: ["pizza crust", "pizza sauce", "mozzarella", "ham", "pineapple"]
	},
	{
		id: "hummus",
		name: "Hummus",
		ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"]
	}
];
