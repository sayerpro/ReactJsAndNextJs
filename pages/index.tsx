// import Image from "next/image";
// import profilePic from "../assets/KatherineJohnson.jpg";

// function Profile() {
// 	return (
// 		<Image
// 			src={profilePic}
// 			alt="Katherine Johnson"
// 		/>
// 	);
// }

// export default function Gallery() {
// 	return (
// 		<section>
// 			<h1>Katherine Johnson</h1>
// 			<Profile />
// 			<Profile />
// 			<Profile />
// 		</section>
// 	);
// }

// ----------------------------------------------------------------------------------

// import Image from "next/image";
// import profilePic from "../assets/AkliluLemma.jpg";

// export default function Profile() {
// 	return (
// 		<Image
// 			src={profilePic}
// 			alt="Aklilu Lemma"
// 		/>
// 	);
// }

// ----------------------------------------------------------------------------------

// import Image from "next/image";
// import profilePic from "../assets/KatsukoSaruhashi.jpg";

// export default function Profile() {
// 	return (
// 		<Image
// 			src={profilePic}
// 			alt="Katsuko Saruhashi"
// 		/>
// 	);
// }

// ----------------------------------------------------------------------------------

// import Image from "next/image";
// import profilePic from "../assets/AlanL-Hart.jpg";

// function Profile() {
// 	return (
// 		<Image
// 			src={profilePic}
// 			alt="Alan L. Hart"
// 		/>
// 	);
// }

// export default function Gallery() {
// 	return (
// 		<section>
// 			<h1>Alan L. Hart</h1>
// 			<Profile />
// 			<Profile />
// 			<Profile />
// 		</section>
// 	);
// }

// ----------------------------------------------------------------------------------

// import Image from "next/image";
// import scientits from "../assets/KatherineJohnson.jpg";
// import biology from "../assets/AkliluLemma.jpg";
// import geochemist from "../assets/KatsukoSaruhashi.jpg";
// import physician from "../assets/AlanL-Hart.jpg";

// function Profiles() {
// 	return (
// 		<div>
// 			<Image
// 				src={scientits}
// 				alt="Katherine Johnson"
// 			/>
// 			<Image
// 				src={biology}
// 				alt="Aklilu Lemma"
// 			/>
// 			<Image
// 				src={geochemist}
// 				alt="Katsuko Saruhashi"
// 			/>
// 			<Image
// 				src={physician}
// 				alt="Alan L. Hart"
// 			/>
// 		</div>
// 	);
// }

// export default function Gallery() {
// 	return (
// 		<section>
// 			<h1>Amazing scientists</h1>
// 			<Profiles />
// 		</section>
// 	);
// }

// ----------------------------------------------------------------------------------

// import Profiles from "./profiles/profiles";

// export default function App() {
// 	return (
// 		<section>
// 			<h1>Amazing scientists</h1>
// 			<Profiles />
// 		</section>
// 	);
// }

// ----------------------------------------------------------------------------------

// import Profiles from "./profiles/profiles";

// export default function Bio() {
// 	return (
// 		<>
// 			<div className="intro">
// 				<h1>Welcome to my website!</h1>
// 			</div>
// 			<p className="summary">
// 				You can find my thoughts here.
// 				<br />
// 				<br />
// 				<b>
// 					And <i>pictures</i>
// 				</b>
// 				{<Profiles />}
// 				of scientists!
// 			</p>
// 		</>
// 	);
// }

// ----------------------------------------------------------------------------------

// import Profiles from "./profiles/profiles";

// const today = new Date();

// export default function TodoList() {
// 	return (
// 		<>
// 			<h1>To Do List for {formatDate(today)}</h1>
// 			<div className="intro">
// 				<h1>Welcome to my website!</h1>
// 			</div>
// 			<p className="summary">
// 				You can find my thoughts here.
// 				<br />
// 				<br />
// 				<b>
// 					<i>pictures</i>
// 				</b>
// 				{<Profiles />}of scientists!
// 			</p>
// 		</>
// 	);
// }

// function formatDate(today: Date): any {
// 	return new Intl.DateTimeFormat("en-ES", {
// 		weekday: "long",
// 		year: "numeric",
// 		month: "long",
// 		day: "numeric"
// 	}).format(today);
// }

// ----------------------------------------------------------------------------------

// import {Engineer} from "./profiles/profile";

// const person = {
// 	name: "Gregorio Y. Zara",
// 	img: Engineer,
// 	theme: {
// 		backgroundColor: "black",
// 		color: "pink"
// 	}
// };

// export default function TodoList() {
// 	return (
// 		<div style={person.theme}>
// 			<h1>{person.name}&apos;s Todos</h1>
// 			{<person.img />}
// 			<ul>
// 				<li>Improve the videophone</li>
// 				<li>Prepare aeronautics lectures</li>
// 				<li>Work on the alcohol-fuelled engine</li>
// 			</ul>
// 		</div>
// 	);
// }

// ----------------------------------------------------------------------------------

// const baseUrl = "https://i.imgur.com/";
// const person = {
// 	name: "Gregorio Y. Zara",
// 	imageId: "7vQD0fP",
// 	imageSize: "s",
// 	theme: {
// 		backgroundColor: "black",
// 		color: "pink"
// 	}
// };

// export default function TodoList() {
// 	return (
// 		<div style={person.theme}>
// 			<h1>{person.name}&apos;s Todos</h1>
// 			<img
// 				className="avatar"
// 				src={baseUrl + person.imageId + person.imageSize + ".jpg"}
// 				alt={person.name}
// 			/>
// 			<ul>
// 				<li>Improve the videophone</li>
// 				<li>Prepare aeronautics lectures</li>
// 				<li>Work on the alcohol-fuelled engine</li>
// 			</ul>
// 		</div>
// 	);
// }

// ----------------------------------------------------------------------------------

// import Image from "next/image";

// interface Person {
// 	name: string;
// 	imageId: string;
// }

// function Avatar({person, size = 100}: {person: Person; size?: number}) {
// 	// const typedPerson = person as Person; // Se usa para aserciones y decirle a typeScript que confie en que el objeto tendra las propiedades usadas, pero no es recomendable usarle por temas de seguridad

// 	return (
// 		<Image
// 			className="avatar"
// 			src={"https://i.imgur.com/" + person.imageId + ".jpg"}
// 			alt={person.name}
// 			width={size}
// 			height={size}
// 		/>
// 	);
// }

// export default function Profile() {
// 	return (
// 		<Avatar
// 			person={{name: "Lin Lanying", imageId: "1bX5QH6"}}
// 			size={200}
// 		/>
// 	);
// }

// ----------------------------------------------------------------------------------

// import Avatar from "./hijos/Avatar";
// import {Person, Children} from "./models/models";

// let person: Person = {name: "", imageId: ""};

// function Card({children}: Children) {
// 	return <div className="card">{children}</div>;
// }

// export default function Profile() {
// 	return (
// 		<Card>
// 			<Avatar
// 				size={100}
// 				person={{
// 					name: "Katsuko Saruhashi",
// 					imageId: "YfeOqp2"
// 				}}
// 			/>
// 		</Card>
// 	);
// }

// ----------------------------------------------------------------------------------

// import Avatar from "./hijos/Avatar";
// import {Children, ProfileProps} from "./models/models";

// function Card({children}: Children) {
// 	return <div className="card">{children}</div>;
// }

// export function Profile({
// 	imageId,
// 	name,
// 	profession,
// 	awards,
// 	discovery,
// 	imageSize = 70
// }: ProfileProps) {
// 	return (
// 		<Card>
// 			<>
// 				<section className="profile">
// 					<Avatar
// 						size={imageSize}
// 						person={{
// 							name: name,
// 							imageId: imageId
// 						}}
// 					/>
// 					<ul>
// 						<li>
// 							<b>Profession: </b>
// 							{profession}
// 						</li>
// 						<li>
// 							<b>Awards: {awards.length}</b>({awards.join(", ")})
// 						</li>
// 						<li>
// 							<b>Discovered: </b>
// 							{discovery}
// 						</li>
// 					</ul>
// 				</section>
// 			</>
// 		</Card>
// 	);
// }

// const mariaAwards: string[] = [
// 	"Nobel Prize in Physics",
// 	"Nobel Prize in Chemistry",
// 	"Davy Medal",
// 	"Matteucci Medal"
// ];

// const katsukoAwards: string[] = [
// 	"Nobel Prize in Physics",
// 	"Nobel Prize in Chemistry"
// ];

// export default function Gallery() {
// 	return (
// 		<div>
// 			<h1>Notable Scientists</h1>
// 			<Profile
// 				imageId="szV5sdG"
// 				name="Maria Skłodowska-Curie"
// 				profession="physicist and chemist"
// 				awards={mariaAwards}
// 				discovery="polonium (chemical element)"
// 				imageSize={70}
// 			/>
// 			<Profile
// 				imageId="YfeOqp2"
// 				name="Katsuko Saruhashi"
// 				profession="geochemist"
// 				discovery="a method for measuring carbon dioxide in seawater"
// 				awards={katsukoAwards}
// 				imageSize={70}
// 			/>
// 		</div>
// 	);
// }

// ----------------------------------------------------------------------------------

import {Person, Children} from "./models/models";
import Avatar from "./hijos/Avatar";

let personas: Person = {name: "Aklilu Lemma", imageId: "OKS67lh"};

function Card({children}: Children) {
	return <div className="card">{children}</div>;
}

export function Profile({description}: {description: string}) {
	return (
		<Card>
			<h1>Photo</h1>
			<Avatar
				person={personas}
				size={70}
			/>
			<h1>About</h1>
			<p>{description}</p>
		</Card>
	);
}

const descriptionAbout: string =
	"Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.";

export default function About() {
	return <Profile description={descriptionAbout} />;
}
