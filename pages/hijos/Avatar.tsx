import {getImageUrl, getImageUrls} from "../hijos/utils";
import {Person} from "../models/models";
import Image from "next/image";

export default function Avatar({
	person,
	size = 100
}: {
	person: Person;
	size?: number;
}) {
	return (
		<Image
			className="avatar"
			src={getImageUrl({person})}
			alt={person.name}
			width={size}
			height={size}
		/>
	);
}

export function Avatars({person, size = 100}: {person: Person; size?: number}) {
	return (
		<Image
			className="avatar"
			src={getImageUrls(person.imageId)}
			alt={person.name}
			width={size}
			height={size}
		/>
	);
}
