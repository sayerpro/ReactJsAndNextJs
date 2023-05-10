import {Person} from "../models/models";

export function getImageUrl({
	person,
	size = 100
}: {
	person: Person;
	size?: number;
}) {
	return `https://i.imgur.com/${person.imageId}.jpg`;
}

export function getImageUrls(imageId: string) {
	return `https://i.imgur.com/${imageId}.jpg`;
}
