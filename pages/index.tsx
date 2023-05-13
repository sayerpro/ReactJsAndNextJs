import Image from "next/image";
import Avatar from "./hijos/Avatar";
import Profiles from "./profiles/profiles";
import {Engineer} from "./profiles/profile";
import {getImageUrls2} from "./hijos/utils";
import {Fragment} from "react";
import {ReactElement, ReactNode} from "react";
import biology from "../assets/AkliluLemma.jpg";
import physician from "../assets/AlanL-Hart.jpg";
import scientits from "../assets/KatherineJohnson.jpg";
import profilePic from "../assets/KatherineJohnson.jpg";
import geochemist from "../assets/KatsukoSaruhashi.jpg";
import {Person, Children, ProfileProps, People, peoples, recipes, recipe} from "./models/models";

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

// export default function Profile() {
// 	return (
// 		<Image
// 			src={profilePic}
// 			alt="Aklilu Lemma"
// 		/>
// 	);
// }

// ----------------------------------------------------------------------------------

// export default function Profile() {
// 	return (
// 		<Image
// 			src={profilePic}
// 			alt="Katsuko Saruhashi"
// 		/>
// 	);
// }

// ----------------------------------------------------------------------------------

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

// export default function App() {
// 	return (
// 		<section>
// 			<h1>Amazing scientists</h1>
// 			<Profiles />
// 		</section>
// 	);
// }

// ----------------------------------------------------------------------------------

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

// let personas: Person = {name: "Aklilu Lemma", imageId: "OKS67lh"};

// function Card({children}: Children) {
// 	return <div className="card">{children}</div>;
// }

// export function Profile({description}: {description: string}) {
// 	return (
// 		<Card>
// 			<h1>Photo</h1>
// 			<Avatar
// 				person={personas}
// 				size={70}
// 			/>
// 			<h1>About</h1>
// 			<p>{description}</p>
// 		</Card>
// 	);
// }

// const descriptionAbout: string =
// 	"Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.";

// export default function About() {
// 	return <Profile description={descriptionAbout} />;
// }

// ----------------------------------------------------------------------------------

// function Item({name, isPacked}: {name: string; isPacked: boolean}) {
// 	// return (
// 	// 	<li className="item">{isPacked ? <del> {name + " ✔"} </del> : name}</li>
// 	// );
// 	return (
// 		<li className="item">
// 			{name} {isPacked && "✔"}
// 		</li>
// 	);
// }

// function Item({name, isPacked}: {name: string; isPacked: boolean}): ReactElement {
// 	return <li className="item">{isPacked ? <del>{name + " ✔"}</del> : name}</li>;
// }

// export default function PackingList(): ReactNode {
// 	return (
// 		<section>
// 			<h1>Sally Ride&apos;s Packing List</h1>
// 			<ul>
// 				<Item
// 					isPacked={true}
// 					name="Space suit"
// 				/>
// 				<Item
// 					isPacked={true}
// 					name="Helmet with a golden leaf"
// 				/>
// 				<Item
// 					isPacked={false}
// 					name="Photo of Tam"
// 				/>
// 			</ul>
// 		</section>
// 	);
// }

// ----------------------------------------------------------------------------------

// function Item({name, isPacked}: {name: string; isPacked: boolean}) {
// 	return (
// 		<li className="item">
// 			{name} {isPacked ? " ✔" : " ❌"}
// 		</li>
// 	);
// }

// export default function PackingList() {
// 	return (
// 		<section>
// 			<h1>Sally Ride&apos;s Packing List</h1>
// 			<ul>
// 				<Item
// 					isPacked={true}
// 					name="Space suit"
// 				/>
// 				<Item
// 					isPacked={true}
// 					name="Helmet with a golden leaf"
// 				/>
// 				<Item
// 					isPacked={false}
// 					name="Photo of Tam"
// 				/>
// 			</ul>
// 		</section>
// 	);
// }

// ----------------------------------------------------------------------------------
// function Item({name, importance}: {name: string; importance: number}): ReactElement {
// 	return (
// 		<li className="item">
// 			{name + " "}
// 			{importance > 0 && <i>(Importance: {importance})</i>}
// 		</li>
// 	);
// }

// export default function PackingList() {
// 	return (
// 		<section>
// 			<h1>Sally Ride&apos;s Packing List</h1>
// 			<ul>
// 				<Item
// 					importance={9}
// 					name="Space suit"
// 				/>
// 				<Item
// 					importance={0}
// 					name="Helmet with a golden leaf"
// 				/>
// 				<Item
// 					importance={6}
// 					name="Photo of Tam"
// 				/>
// 			</ul>
// 		</section>
// 	);
// }

// ----------------------------------------------------------------------------------

// const drinks = {
// 	tea: {
// 		part: "leaf",
// 		caffeine: "15–70 mg/cup",
// 		age: "4,000+ years"
// 	},
// 	coffee: {
// 		part: "bean",
// 		caffeine: "80–185 mg/cup",
// 		age: "1,000+ years"
// 	}
// };

// function Drink({name}: {name: string}) {
// 	const info = drinks[name as keyof typeof drinks];
// 	return (
// 		<section>
// 			<h1>{name.toUpperCase()}</h1>
// 			<dl>
// 				<dt>PART OF PLANT</dt>
// 				<dd>{info.part}</dd>
// 				<dt>CAFFEINE CONTENT</dt>
// 				<dd>{info.caffeine}</dd>
// 				<dt>AGE</dt>
// 				<dd>{info.age}</dd>
// 			</dl>
// 		</section>
// 	);
// }

// export default function DrinkList() {
// 	return (
// 		<div>
// 			<Drink name="tea" />
// 			<Drink name="coffee" />
// 		</div>
// 	);
// }

// ----------------------------------------------------------------------------------

// export default function App(): ReactNode {
// 	const people: string[] = [
// 		"Creola Katherine Johnson: mathematician",
// 		"Mario José Molina-Pasquel Henríquez: chemist",
// 		"Mohammad Abdus Salam: physicist",
// 		"Percy Lavon Julian: chemist",
// 		"Subrahmanyan Chandrasekhar: astrophysicist"
// 	];
// 	const listItems: JSX.Element[] = people.map((person: string, index: number) => {
// 		return <li key={index}>{person}</li>;
// 	});
// 	return <ul>{listItems}</ul>;
// }

// ----------------------------------------------------------------------------------

// export default function App(): ReactNode {
// 	const chemists: People[] = peoples.filter((person: People) => person.profession === "chemist");
// 	const listItems = chemists.map((person: People) => (
// 		<li key={person.id}>
// 			<Image
// 				src={getImageUrls2(person)}
// 				alt={person.name}
// 				width={100}
// 				height={100}
// 			/>
// 			<p>
// 				<b>{person.name}:</b>
// 				{" " + person.profession + " "}
// 				known for {person.accomplishment}
// 			</p>
// 		</li>
// 	));
// 	return <ul>{listItems}</ul>;
// }

// ----------------------------------------------------------------------------------

// let chemists: People[] = [];
// let everyoneElse: People[] = [];
// peoples.forEach((person: People) => {
// 	if (person.profession === "chemist") {
// 		chemists.push(person);
// 	} else {
// 		everyoneElse.push(person);
// 	}
// });

// function ListSection({title, people}: {title: string; people: People[]}): ReactElement {
// 	return (
// 		<>
// 			<h2>{title}</h2>
// 			<ul>
// 				{people.map((person) => (
// 					<li key={person.id}>
// 						<Image
// 							src={getImageUrls2(person)}
// 							alt={person.name}
// 							width={100}
// 							height={100}
// 						/>
// 						<p>
// 							<b>{person.name}:</b>
// 							{" " + person.profession + " "}
// 							known for {person.accomplishment}
// 						</p>
// 					</li>
// 				))}
// 			</ul>
// 		</>
// 	);
// }

// export default function List(): ReactNode {
// 	return (
// 		<article>
// 			<h1>Scientists</h1>
// 			<ListSection
// 				title="Chemists"
// 				people={chemists}
// 			/>
// 			<ListSection
// 				title="Everyone Else"
// 				people={everyoneElse}
// 			/>
// 		</article>
// 	);
// }

// ----------------------------------------------------------------------------------

// const RecipeList: React.FC = () => {
// 	return (
// 		<div>
// 			<h1>Recipes</h1>
// 			{recipes.map((recip: recipe) => (
// 				<Recipe
// 					key={recip.id}
// 					{...recip}
// 				/>
// 			))}
// 		</div>
// 	);
// };

// const Recipe: React.FC<recipe> = ({name, ingredients}: {name: string; ingredients: string[]}) => {
// 	return (
// 		<Fragment>
// 			<h2>{name.toUpperCase()}</h2>
// 			<ul>
// 				{ingredients.map((ingredient: string) => (
// 					<li key={ingredient}>{ingredient}</li>
// 				))}
// 			</ul>
// 		</Fragment>
// 	);
// };

// export default RecipeList;

// ----------------------------------------------------------------------------------

const poem = {
	lines: ["I write, erase, rewrite", "Erase again, and then", "A poppy blooms."]
};

export default function Poem(): ReactNode {
	return (
		<article>
			{poem.lines.map((line: string, index: number) => (
				<Fragment key={index}>
					{index > 0 && <hr />}
					<p>{line}</p>
				</Fragment>
			))}
		</article>
	);
}
