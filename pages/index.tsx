import Image from "next/image";
import {format} from "date-fns";
import {es} from "date-fns/locale";
import Avatar from "./hijos/Avatar";
import WritableDraft, {useImmer} from "use-immer";
import Profiles from "./profiles/profiles";
import {Engineer} from "./profiles/profile";
import {ReactElement, ReactNode} from "react";
import biology from "../assets/AkliluLemma.jpg";
import physician from "../assets/AlanL-Hart.jpg";
import scientits from "../assets/KatherineJohnson.jpg";
import profilePic from "../assets/KatherineJohnson.jpg";
import geochemist from "../assets/KatsukoSaruhashi.jpg";
import {getImageUrls2, getImageUrls} from "./hijos/utils";
import {Fragment, useState, FormEvent, ChangeEvent} from "react";
import {
	Person,
	Children,
	ProfileProps,
	People,
	peoples,
	recipes,
	recipe,
	storie,
	sculptureList,
	Instant,
	Lista
} from "./models/models";

// ----------------------------------------------------------------------------------

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

// const poem = {
// 	lines: ["I write, erase, rewrite", "Erase again, and then", "A poppy blooms."]
// };

// export default function Poem(): ReactNode {
// 	return (
// 		<article>
// 			{poem.lines.map((line: string, index: number) => (
// 				<Fragment key={index}>
// 					{index > 0 && <hr />}
// 					<p>{line}</p>
// 				</Fragment>
// 			))}
// 		</article>
// 	);
// }

// ----------------------------------------------------------------------------------

// function Recipe({drinkers}: {drinkers: number}): ReactElement {
// 	return (
// 		<ol>
// 			<li>Boil {drinkers} cups of water.</li>
// 			<li>
// 				Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
// 			</li>
// 			<li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
// 		</ol>
// 	);
// }

// export default function App(): ReactNode {
// 	return (
// 		<section>
// 			<h1>Spiced Chai Recipe</h1>
// 			<h2>For two</h2>
// 			<Recipe drinkers={2} />
// 			<h2>For a gathering</h2>
// 			<Recipe drinkers={4} />
// 		</section>
// 	);
// }

// ----------------------------------------------------------------------------------

// function Cup({guest}: {guest: number}): ReactElement {
// 	return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaSet(): ReactNode {
// 	return (
// 		<>
// 			<Cup guest={1} />
// 			<Cup guest={2} />
// 			<Cup guest={3} />
// 		</>
// 	);
// }

// ----------------------------------------------------------------------------------

// function Cup({guest}: {guest: number}) {
// 	return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaGathering() {
// 	let cups = [];
// 	for (let i = 1; i <= 12; i++) {
// 		cups.push(
// 			<Cup
// 				key={i}
// 				guest={i}
// 			/>
// 		);
// 	}
// 	return cups;
// }

// ----------------------------------------------------------------------------------

// function capitalizeFirstLetter(chain: string) {
// 	return chain.charAt(0).toUpperCase() + chain.slice(1);
// }

// function Clock({time}: {time: Date}): ReactElement {
// 	const month = capitalizeFirstLetter(format(time, "MMMM", {locale: es}));
// 	const formattedDate = format(time, `d, yyyy - hh:mm:ss a`, {locale: es});
// 	return <h1>{`${month} ${formattedDate}`}</h1>;
// }

// function App(): ReactNode {
// 	return <Clock time={new Date()} />;
// }

// export default App;

// ----------------------------------------------------------------------------------

// function Panel({children}: {children: React.ReactNode}): ReactElement {
// 	return <button>{children}</button>;
// }

// function Profile({person}: {person: Person}): ReactElement {
// 	return (
// 		<Panel>
// 			<Header currentPerson={person} />
// 			<Avata currentPerson={person} />
// 		</Panel>
// 	);
// }

// function Header({currentPerson}: {currentPerson: Person}): ReactElement {
// 	return <h1>{currentPerson.name}</h1>;
// }

// function Avata({currentPerson}: {currentPerson: Person}): ReactElement {
// 	return (
// 		<Image
// 			className="avatar"
// 			src={getImageUrls(currentPerson.imageId)}
// 			alt={currentPerson.name}
// 			width={50}
// 			height={50}
// 		/>
// 	);
// }

// function App(): ReactNode {
// 	return (
// 		<>
// 			<Profile
// 				person={{
// 					name: "Subrahmanyan Chandrasekhar",
// 					imageId: "lrWQx8l"
// 				}}
// 			/>
// 			<Profile
// 				person={{
// 					name: "Creola Katherine Johnson",
// 					imageId: "MK3eW3A"
// 				}}
// 			/>
// 		</>
// 	);
// }

// export default App;

// ----------------------------------------------------------------------------------

// export default function StoryTray({
// 	stories = [
// 		{
// 			id: "Carola",
// 			label: "Amen"
// 		},
// 		{
// 			id: "Pitan",
// 			label: "Rocale"
// 		}
// 	]
// }: {
// 	stories: storie[];
// }) {
// 	let storiesToDisplay = stories.slice();

// 	storiesToDisplay.push({
// 		id: "create",
// 		label: "Create Story"
// 	});

// 	return (
// 		<ul>
// 			{storiesToDisplay.map((story) => (
// 				<li key={story.id}>{story.label}</li>
// 			))}
// 		</ul>
// 	);
// }

// ----------------------------------------------------------------------------------

// function App(): ReactNode {
// 	return (
// 		<Toolbar
// 			onPlayMovie={() => alert("Playing!")}
// 			onUploadImage={() => alert("Uploading!")}
// 		/>
// 	);
// }

// function Toolbar({onPlayMovie, onUploadImage}: {onPlayMovie: () => void; onUploadImage: () => void}): ReactElement {
// 	return (
// 		<div>
// 			<Button onClick={onPlayMovie}>Play Movie</Button>
// 			<Button onClick={onUploadImage}>Upload Image</Button>
// 		</div>
// 	);
// }

// function Button({onClick, children}: {onClick: () => void; children: string}): ReactElement {
// 	return <button onClick={onClick}>{children}</button>;
// }

// export default App;

// ----------------------------------------------------------------------------------

// function Gallery() {
// 	const [index, setIndex] = useState(0);
// 	const [showMore, setShowMore] = useState(false);
// 	const hasNext = index <= sculptureList.length - 1;

// 	function handleNextClick() {
// 		if (hasNext && index < sculptureList.length - 1) {
// 			setIndex(index + 1);
// 		} else {
// 			setIndex(0);
// 		}
// 	}

// 	function handlePreviousClick() {
// 		if (hasNext && index > 0) {
// 			setIndex(index - 1);
// 		} else {
// 			setIndex(sculptureList.length - 1);
// 		}
// 	}

// 	function handleMoreClick() {
// 		setShowMore(!showMore);
// 	}

// 	let sculpture = sculptureList[index];
// 	return (
// 		<>
// 			<button onClick={handleNextClick}>Next</button>
// 			<button onClick={handlePreviousClick}>Previous</button>
// 			<h2>
// 				<i>{sculpture.name} </i>
// 				by {sculpture.artist}
// 			</h2>
// 			<h3>
// 				({index + 1} of {sculptureList.length})
// 			</h3>
// 			<button onClick={handleMoreClick}>{showMore ? "Hide" : "Show"} details</button>
// 			{showMore && <p>{sculpture.description}</p>}
// 			<Image
// 				src={sculpture.url}
// 				alt={sculpture.alt}
// 				width={200}
// 				height={200}
// 			/>
// 		</>
// 	);
// }

// export default Gallery;

// ----------------------------------------------------------------------------------

// function Form() {
// 	const [to, setTo] = useState("Alice");
// 	const [message, setMessage] = useState("Hello");

// 	function handleSubmit(e: FormEvent<HTMLFormElement>) {
// 		e.preventDefault();
// 		setTimeout(() => {
// 			alert(`You said ${message} to ${to}`);
// 		}, 5000);
// 	}

// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<label>
// 				To:{" "}
// 				<select
// 					value={to}
// 					onChange={(e: ChangeEvent<HTMLSelectElement>) => setTo(e.target.value)}>
// 					<option value="Alice">Alice</option>
// 					<option value="Bob">Bob</option>
// 				</select>
// 			</label>
// 			<textarea
// 				placeholder="Message"
// 				value={message}
// 				onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
// 			/>
// 			<button type="submit">Send</button>
// 		</form>
// 	);
// }

// export default Form;

// ----------------------------------------------------------------------------------

// function Counter(): ReactNode {
// 	const [score, setScore] = useState(0);

// 	function increment() {
// 		setScore((s: number) => s + 1);
// 	}

// 	return (
// 		<>
// 			<button onClick={() => increment()}>+1 </button>
// 			<button
// 				onClick={() => {
// 					increment();
// 					increment();
// 					increment();
// 				}}>
// 				+3
// 			</button>
// 			<h1>Score: {score}</h1>
// 		</>
// 	);
// }

// export default Counter;

// ----------------------------------------------------------------------------------

// export default function Form() {
// 	const persons: Instant = {
// 		name: "Niki de Saint Phalle",
// 		artwork: {
// 			title: "Blue Nana",
// 			city: "Hamburg",
// 			image: "https://i.imgur.com/Sd1AgUOm.jpg"
// 		}
// 	};
// 	const [person, setPerson] = useState(persons);

// 	function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
// 		setPerson({
// 			...person,
// 			name: e.target.value
// 		});
// 	}

// 	function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
// 		setPerson({
// 			...person,
// 			artwork: {
// 				...person.artwork,
// 				title: e.target.value
// 			}
// 		});
// 	}

// 	function handleCityChange(e: ChangeEvent<HTMLInputElement>) {
// 		setPerson({
// 			...person,
// 			artwork: {
// 				...person.artwork,
// 				city: e.target.value
// 			}
// 		});
// 	}

// 	function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
// 		setPerson({
// 			...person,
// 			artwork: {
// 				...person.artwork,
// 				image: e.target.value
// 			}
// 		});
// 	}

// 	return (
// 		<>
// 			<label>
// 				Name:
// 				<input
// 					value={person.name}
// 					onChange={handleNameChange}
// 				/>
// 			</label>
// 			<label>
// 				Title:
// 				<input
// 					value={person.artwork.title}
// 					onChange={handleTitleChange}
// 				/>
// 			</label>
// 			<label>
// 				City:
// 				<input
// 					value={person.artwork.city}
// 					onChange={handleCityChange}
// 				/>
// 			</label>
// 			<label>
// 				Image:
// 				<input
// 					value={person.artwork.image}
// 					onChange={handleImageChange}
// 				/>
// 			</label>
// 			<p>
// 				<i>{person.artwork.title}</i>
// 				{" by "}
// 				{person.name}
// 				<br />
// 				(located in {person.artwork.city})
// 			</p>
// 			<Image
// 				src={person.artwork.image}
// 				alt={person.artwork.title}
// 				width={200}
// 				height={200}
// 			/>
// 		</>
// 	);
// }

// ----------------------------------------------------------------------------------

// function Form(): ReactNode {
// 	const persons: Instant = {
// 		name: "Niki de Saint Phalle",
// 		artwork: {
// 			title: "Blue Nana",
// 			city: "Hamburg",
// 			image: "https://i.imgur.com/Sd1AgUOm.jpg"
// 		}
// 	};
// 	const [person, updatePerson] = useImmer(persons);

// 	function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
// 		updatePerson((draft) => {
// 			draft.name = e.target.value;
// 		});
// 	}

// 	function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
// 		updatePerson((draft) => {
// 			draft.artwork.title = e.target.value;
// 		});
// 	}

// 	function handleCityChange(e: ChangeEvent<HTMLInputElement>) {
// 		updatePerson((draft) => {
// 			draft.artwork.city = e.target.value;
// 		});
// 	}

// 	function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
// 		updatePerson((draft) => {
// 			draft.artwork.image = e.target.value;
// 		});
// 	}

// 	return (
// 		<>
// 			<label>
// 				Name:
// 				<input
// 					value={person.name}
// 					onChange={handleNameChange}
// 				/>
// 			</label>
// 			<label>
// 				Title:
// 				<input
// 					value={person.artwork.title}
// 					onChange={handleTitleChange}
// 				/>
// 			</label>
// 			<label>
// 				City:
// 				<input
// 					value={person.artwork.city}
// 					onChange={handleCityChange}
// 				/>
// 			</label>
// 			<label>
// 				Image:
// 				<input
// 					value={person.artwork.image}
// 					onChange={handleImageChange}
// 				/>
// 			</label>
// 			<p>
// 				<i>{person.artwork.title}</i>
// 				{" by "}
// 				{person.name}
// 				<br />
// 				(located in {person.artwork.city})
// 			</p>
// 			<Image
// 				src={person.artwork.image}
// 				alt={person.artwork.title}
// 				width={200}
// 				height={200}
// 			/>
// 		</>
// 	);
// }

// export default Form;

// ----------------------------------------------------------------------------------

// const initialList: Lista[] = [
// 	{id: 0, title: "Big Bellies", seen: false},
// 	{id: 1, title: "Lunar Landscape", seen: false},
// 	{id: 2, title: "Terracotta Army", seen: true}
// ];

// function BucketList(): ReactNode {
// 	const [list, setList] = useImmer<Lista[]>(initialList);

// 	function handleToggle(artworkId: number, nextSeen: boolean): void {
// 		setList((draft: WritableDraft<Lista>) => {
// 			const artwork = draft.find((a: Lista) => a.id === artworkId);
// 			artwork.seen = nextSeen;
//             return draft;
// 		});
// 	}

// 	return (
// 		<>
// 			<h1>Art Bucket List</h1>
// 			<h2>My list of art to see:</h2>
// 			<ItemList
// 				artworks={list}
// 				onToggle={handleToggle}
// 			/>
// 		</>
// 	);
// }

// function ItemList({
// 	artworks,
// 	onToggle
// }: {
// 	artworks: Lista[];
// 	onToggle: (artworkId: number, nextSeen: boolean) => void;
// }): ReactElement {
// 	return (
// 		<ul>
// 			{artworks.map((artwork: Lista) => (
// 				<li key={artwork.id}>
// 					<label>
// 						<input
// 							type="checkbox"
// 							checked={artwork.seen}
// 							onChange={(e: ChangeEvent<HTMLInputElement>) => {
// 								onToggle(artwork.id, e.target.checked);
// 							}}
// 						/>
// 						{artwork.title}
// 						{artwork.seen.toString()}
// 					</label>
// 				</li>
// 			))}
// 		</ul>
// 	);
// }

// export default BucketList;

// ----------------------------------------------------------------------------------

function App(): ReactNode {
	return (
		<>
			<h1>Hola ¡Carola!</h1>
			<h2>Hola ¡Forola!</h2>
		</>
	);
}
export default App;
