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

export interface storie {
	id: string;
	label: string;
}

export const sculptureList = [
	{
		name: "Homenaje a la Neurocirugía",
		artist: "Marta Colvin Andrade",
		description:
			"Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.",
		url: "https://i.imgur.com/Mx7dA2Y.jpg",
		alt: "A bronze statue of two crossed hands delicately holding a human brain in their fingertips."
	},
	{
		name: "Floralis Genérica",
		artist: "Eduardo Catalano",
		description:
			"This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.",
		url: "https://i.imgur.com/ZF6s192m.jpg",
		alt: "A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens."
	},
	{
		name: "Eternal Presence",
		artist: "John Woodrow Wilson",
		description:
			'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
		url: "https://i.imgur.com/aTtVpES.jpg",
		alt: "The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity."
	},
	{
		name: "Moai",
		artist: "Unknown Artist",
		description:
			"Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.",
		url: "https://i.imgur.com/RCwLEoQm.jpg",
		alt: "Three monumental stone busts with the heads that are disproportionately large with somber faces."
	},
	{
		name: "Blue Nana",
		artist: "Niki de Saint Phalle",
		description:
			"The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.",
		url: "https://i.imgur.com/Sd1AgUOm.jpg",
		alt: "A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy."
	},
	{
		name: "Ultimate Form",
		artist: "Barbara Hepworth",
		description:
			"This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.",
		url: "https://i.imgur.com/2heNQDcm.jpg",
		alt: "A tall sculpture made of three elements stacked on each other reminding of a human figure."
	},
	{
		name: "Cavaliere",
		artist: "Lamidi Olonade Fakeye",
		description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
		url: "https://i.imgur.com/wIdGuZwm.png",
		alt: "An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns."
	},
	{
		name: "Big Bellies",
		artist: "Alina Szapocznikow",
		description:
			"Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
		url: "https://i.imgur.com/AlHTAdDm.jpg",
		alt: "The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures."
	},
	{
		name: "Terracotta Army",
		artist: "Unknown Artist",
		description:
			"The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.",
		url: "https://i.imgur.com/HMFmH6m.jpg",
		alt: "12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor."
	},
	{
		name: "Lunar Landscape",
		artist: "Louise Nevelson",
		description:
			"Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.",
		url: "https://i.imgur.com/rN7hY6om.jpg",
		alt: "A black matte sculpture where the individual elements are initially indistinguishable."
	},
	{
		name: "Aureole",
		artist: "Ranjani Shettar",
		description:
			'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
		url: "https://i.imgur.com/okTpbHhm.jpg",
		alt: "A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light."
	},
	{
		name: "Hippos",
		artist: "Taipei Zoo",
		description: "The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.",
		url: "https://i.imgur.com/6o5Vuyu.jpg",
		alt: "A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming."
	}
];

export interface Instant {
	name: string;
	artwork: {
		title: string;
		city: string;
		image: string;
	};
}

export interface Lista {
	id: number;
	title: string;
	seen: boolean;
}

export interface PersonInfo {
	[key: string]: string;
}

export interface Position {
	x: number;
	y: number;
}

export interface Shapes {
	id: number;
	type: string;
	x: number;
	y: number;
}

export interface Artists {
	id: number;
	name: string;
}

export interface ListPing {
	id: number;
	title: string;
}

export interface ListPong {
	id: number;
	title: string;
	seen: boolean;
}

export interface Todos {
	id: number;
	title: string;
	done: boolean;
}

export interface Chat {
	name: string;
	email: string;
	text: string;
}

export interface Action {
	type: string;
	id?: number;
	title?: string;
	task?: Todos;
}
export interface TravelPlanChilds {
	id: number;
	title: string;
	childIds: number[];
}

export interface TravelPlan {
	[key: number]: TravelPlanChilds;
}

export const initialTravelPlan: TravelPlan = {
	0: {
		id: 0,
		title: "(Root)",
		childIds: [1, 43, 47]
	},
	1: {
		id: 1,
		title: "Earth",
		childIds: [2, 10, 19, 27, 35]
	},
	2: {
		id: 2,
		title: "Africa",
		childIds: [3, 4, 5, 6, 7, 8, 9]
	},
	3: {
		id: 3,
		title: "Botswana",
		childIds: []
	},
	4: {
		id: 4,
		title: "Egypt",
		childIds: []
	},
	5: {
		id: 5,
		title: "Kenya",
		childIds: []
	},
	6: {
		id: 6,
		title: "Madagascar",
		childIds: []
	},
	7: {
		id: 7,
		title: "Morocco",
		childIds: []
	},
	8: {
		id: 8,
		title: "Nigeria",
		childIds: []
	},
	9: {
		id: 9,
		title: "South Africa",
		childIds: []
	},
	10: {
		id: 10,
		title: "Americas",
		childIds: [11, 12, 13, 14, 15, 16, 17, 18]
	},
	11: {
		id: 11,
		title: "Argentina",
		childIds: []
	},
	12: {
		id: 12,
		title: "Brazil",
		childIds: []
	},
	13: {
		id: 13,
		title: "Barbados",
		childIds: []
	},
	14: {
		id: 14,
		title: "Canada",
		childIds: []
	},
	15: {
		id: 15,
		title: "Jamaica",
		childIds: []
	},
	16: {
		id: 16,
		title: "Mexico",
		childIds: []
	},
	17: {
		id: 17,
		title: "Trinidad and Tobago",
		childIds: []
	},
	18: {
		id: 18,
		title: "Venezuela",
		childIds: []
	},
	19: {
		id: 19,
		title: "Asia",
		childIds: [20, 21, 22, 23, 24, 25, 26]
	},
	20: {
		id: 20,
		title: "China",
		childIds: []
	},
	21: {
		id: 21,
		title: "Hong Kong",
		childIds: []
	},
	22: {
		id: 22,
		title: "India",
		childIds: []
	},
	23: {
		id: 23,
		title: "Singapore",
		childIds: []
	},
	24: {
		id: 24,
		title: "South Korea",
		childIds: []
	},
	25: {
		id: 25,
		title: "Thailand",
		childIds: []
	},
	26: {
		id: 26,
		title: "Vietnam",
		childIds: []
	},
	27: {
		id: 27,
		title: "Europe",
		childIds: [28, 29, 30, 31, 32, 33, 34]
	},
	28: {
		id: 28,
		title: "Croatia",
		childIds: []
	},
	29: {
		id: 29,
		title: "France",
		childIds: []
	},
	30: {
		id: 30,
		title: "Germany",
		childIds: []
	},
	31: {
		id: 31,
		title: "Italy",
		childIds: []
	},
	32: {
		id: 32,
		title: "Portugal",
		childIds: []
	},
	33: {
		id: 33,
		title: "Spain",
		childIds: []
	},
	34: {
		id: 34,
		title: "Turkey",
		childIds: []
	},
	35: {
		id: 35,
		title: "Oceania",
		childIds: [36, 37, 38, 39, 40, 41, 42]
	},
	36: {
		id: 36,
		title: "Australia",
		childIds: []
	},
	37: {
		id: 37,
		title: "Bora Bora (French Polynesia)",
		childIds: []
	},
	38: {
		id: 38,
		title: "Easter Island (Chile)",
		childIds: []
	},
	39: {
		id: 39,
		title: "Fiji",
		childIds: []
	},
	40: {
		id: 40,
		title: "Hawaii (the USA)",
		childIds: []
	},
	41: {
		id: 41,
		title: "New Zealand",
		childIds: []
	},
	42: {
		id: 42,
		title: "Vanuatu",
		childIds: []
	},
	43: {
		id: 43,
		title: "Moon",
		childIds: [44, 45, 46]
	},
	44: {
		id: 44,
		title: "Rheita",
		childIds: []
	},
	45: {
		id: 45,
		title: "Piccolomini",
		childIds: []
	},
	46: {
		id: 46,
		title: "Tycho",
		childIds: []
	},
	47: {
		id: 47,
		title: "Mars",
		childIds: [48, 49]
	},
	48: {
		id: 48,
		title: "Corn Town",
		childIds: []
	},
	49: {
		id: 49,
		title: "Green Hill",
		childIds: []
	}
};

export interface Letter {
	id: number;
	subject: string;
	isStarred: boolean;
}

export const initialLetters: Letter[] = [
	{
		id: 0,
		subject: "Ready for adventure?",
		isStarred: true
	},
	{
		id: 1,
		subject: "Time to check in!",
		isStarred: false
	},
	{
		id: 2,
		subject: "Festival Begins in Just SEVEN Days!",
		isStarred: false
	}
];

export interface Food {
	id: number;
	name: string;
	description: string;
}

export function filterItems(items: Food[], query: string): Food[] {
	query = query.toLowerCase();
	return items.filter((item: Food) => item.name.split(" ").some((word: string) => word.toLowerCase().startsWith(query)));
}

export const foods: Food[] = [
	{
		id: 0,
		name: "Sushi",
		description: "Sushi is a traditional Japanese dish of prepared vinegared rice"
	},
	{
		id: 1,
		name: "Dal",
		description: "The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added"
	},
	{
		id: 2,
		name: "Pierogi",
		description: "Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water"
	},
	{
		id: 3,
		name: "Shish kebab",
		description: "Shish kebab is a popular meal of skewered and grilled cubes of meat."
	},
	{
		id: 4,
		name: "Dim sum",
		description: "Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch"
	}
];
