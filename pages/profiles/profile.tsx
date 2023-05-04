import Image from "next/image";
import scientits from "../../assets/KatherineJohnson.jpg";
import biology from "../../assets/AkliluLemma.jpg";
import geochemist from "../../assets/KatsukoSaruhashi.jpg";
import physician from "../../assets/AlanL-Hart.jpg";

export function Scientists() {
	return (
		<Image
			src={scientits}
			alt="Katherine Johnson"
		/>
	);
}

export function Biologys() {
	return (
		<Image
			src={biology}
			alt="Aklilu Lemma"
		/>
	);
}

export function Geochemists() {
	return (
		<Image
			src={geochemist}
			alt="Katsuko Saruhashi"
		/>
	);
}

export function Physicians() {
	return (
		<Image
			src={physician}
			alt="Alan L. Hart"
		/>
	);
}
