import Image from "next/image";
import scientits from "../../assets/KatherineJohnson.jpg";
import biology from "../../assets/AkliluLemma.jpg";
import geochemist from "../../assets/KatsukoSaruhashi.jpg";
import physician from "../../assets/AlanL-Hart.jpg";
import actress from "../../assets/Hedy Lamarr.jpg";
import engineer from "../../assets/Gregorio Y-Zara.jpg";
import chineseEnginer from "../../assets/Lin Lanying.jpg";
import chemist from "../../assets/Maria Skłodowska-Curie.jpg";

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

export function Actress() {
	return (
		<Image
			src={actress}
			alt="Hedy Lamarr"
		/>
	);
}

export function Engineer() {
	return (
		<Image
			src={engineer}
			alt="Gregorio Y. Zara"
		/>
	);
}

export function ChineseEnginer() {
	return (
		<Image
			src={chineseEnginer}
			alt="Lin Lanying"
		/>
	);
}

export function Chemist() {
	return (
		<Image
			src={chemist}
			alt="Maria Skłodowska-Curie"
		/>
	);
}
