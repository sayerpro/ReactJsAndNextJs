import {ReactNode} from "react";

export interface Person {
	name: string;
	imageId: string;
}

export interface Children {
	children: ReactNode;
}

export interface ProfileProps {
	imageId: string;
	name: string;
	profession: string;
	awards: string[];
	discovery: string;
	imageSize?: number;
}
