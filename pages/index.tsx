import Image from "next/image";
import {format} from "date-fns";
import {es} from "date-fns/locale";
import Avatar from "./hijos/Avatar";
import produce from "immer";
import Profiles from "./profiles/profiles";
import {Engineer} from "./profiles/profile";
import {createRoot} from "react-dom/client";
import biology from "../assets/AkliluLemma.jpg";
import physician from "../assets/AlanL-Hart.jpg";
import WritableDraft, {useImmer} from "use-immer";
import scientits from "../assets/KatherineJohnson.jpg";
import profilePic from "../assets/KatherineJohnson.jpg";
import geochemist from "../assets/KatsukoSaruhashi.jpg";
import {getImageUrls2, getImageUrls} from "./hijos/utils";
import {
	HtmlHTMLAttributes,
	Context,
	ReactElement,
	ReactNode,
	createContext,
	useContext,
	Fragment,
	useState,
	FormEvent,
	ChangeEvent,
	MouseEventHandler,
	MouseEvent,
	PointerEvent,
	TouchEvent,
	Dispatch,
	SetStateAction,
	useReducer
} from "react";
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
	Lista,
	PersonInfo,
	Position,
	Shapes,
	Artists,
	ListPing,
	ListPong,
	Todos,
	Chat,
	Action,
	TravelPlan,
	initialTravelPlan,
	TravelPlanChilds,
	Letter,
	initialLetters,
	foods,
	filterItems,
	Food,
	Contact,
	initialContacts,
	DataImg,
	images
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

// function Button(): ReactElement {
// 	function handleClick(): void {
// 		alert("You clicked me!");
// 	}

// 	return <button onClick={handleClick}>Click me</button>;
// }

// export default Button;

// ----------------------------------------------------------------------------------

// function Button({onClick, children}: {onClick: () => void; children: ReactNode}): ReactElement {
// 	return <button onClick={onClick}>{children}</button>;
// }

// function PlayButton({movieName}: {movieName: string}): ReactElement {
// 	function handlePlayClick() {
// 		alert(`Playing ${movieName}!`);
// 	}

// 	return <Button onClick={handlePlayClick}>Play &quot;{movieName}&quot;</Button>;
// }

// function UploadButton(): ReactElement {
// 	return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
// }

// export default function Toolbar(): ReactNode {
// 	return (
// 		<div>
// 			<PlayButton movieName="Kiki's Delivery Service" />
// 			<UploadButton />
// 		</div>
// 	);
// }

// ----------------------------------------------------------------------------------

// function Button({onSmash, children}: {onSmash: () => void; children: ReactNode}): ReactElement {
// 	return <button onClick={onSmash}>{children}</button>;
// }

// export default function App(): ReactNode {
// 	return (
// 		<div>
// 			<Button onSmash={() => alert("Playing!")}>Play Movie</Button>
// 			<Button onSmash={() => alert("Uploading!")}>Upload Image</Button>
// 		</div>
// 	);
// }

// ----------------------------------------------------------------------------------

// export default function App(): ReactNode {
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

// function Button({onClick, children}: {onClick: () => void; children: ReactNode}): ReactElement {
// 	return <button onClick={onClick}>{children}</button>;
// }

// ----------------------------------------------------------------------------------

// export default function Toolbar(): ReactNode {
// 	return (
// 		<div
// 			className="Toolbar"
// 			onClick={() => {
// 				alert("You clicked on the toolbar!");
// 			}}>
// 			<button onClick={() => alert("Playing!")}>Play Movie</button>
// 			<button onClick={() => alert("Uploading!")}>Upload Image</button>
// 		</div>
// 	);
// }

// ----------------------------------------------------------------------------------

// export default function Toolbar(): ReactNode {
// 	return (
// 		<div
// 			className="Toolbar"
// 			onClickCapture={() => {
// 				alert("You clicked on the toolbar!");
// 			}}>
// 			<button onClick={() => alert("Playing!")}>Play Movie</button>
// 			<button onClick={() => alert("Uploading!")}>Upload Image</button>
// 		</div>
// 	);
// }

// ----------------------------------------------------------------------------------

// function Button({onClick, children}: {onClick: () => void; children: ReactNode}): ReactElement {
// 	return (
// 		<button
// 			onClick={(e: MouseEvent<HTMLButtonElement>) => {
// 				e.stopPropagation();
// 				onClick();
// 			}}>
// 			{children}
// 		</button>
// 	);
// }

// export default function Toolbar(): ReactNode {
// 	return (
// 		<div
// 			className="Toolbar"
// 			onClick={() => {
// 				alert("You clicked on the toolbar!");
// 			}}>
// 			<Button onClick={() => alert("Playing!")}>Play Movie</Button>
// 			<Button onClick={() => alert("Uploading!")}>Upload Image</Button>
// 		</div>
// 	);
// }

// ----------------------------------------------------------------------------------

// function Button({onClick, children}: {onClick: () => void; children: ReactNode}): ReactElement {
// 	return (
// 		<button
// 			onClick={(e) => {
// 				e.stopPropagation();
// 				onClick();
// 			}}>
// 			{children}
// 		</button>
// 	);
// }

// export default function App(): ReactNode {
// 	return (
// 		<Button onClick={() => alert("Playing!")}>
// 			<h1>¡Oks!</h1>
// 		</Button>
// 	);
// }

// ----------------------------------------------------------------------------------

// export default function Signup(): ReactNode {
// 	return (
// 		<form
// 			onSubmit={(e: FormEvent<HTMLFormElement>) => {
// 				e.preventDefault();
// 				alert("Submitting!");
// 			}}>
// 			<input />
// 			<button>Send</button>
// 		</form>
// 	);
// }

// ----------------------------------------------------------------------------------

// export default function LightSwitch(): ReactNode {
// 	function handleClick() {
// 		let bodyStyle = document.body.style;
// 		if (bodyStyle.backgroundColor === "black") {
// 			bodyStyle.backgroundColor = "white";
// 		} else {
// 			bodyStyle.backgroundColor = "black";
// 		}
// 	}

// 	return <button onClick={handleClick}>Toggle the lights</button>;
// }

// ----------------------------------------------------------------------------------

// export default function ColorSwitch({onChangeColor}: {onChangeColor: () => void}): ReactNode {
// 	return (
// 		<button
// 			onClick={(e: MouseEvent<HTMLButtonElement>) => {
// 				e.stopPropagation();
// 				onChangeColor();
// 			}}>
// 			Change color
// 		</button>
// 	);
// }

// ----------------------------------------------------------------------------------

// export default function Form(): ReactNode {
// 	const [firstName, setFirstName] = useState<string>("");
// 	const [lastName, setLastName] = useState<string>("");

// 	function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>): void {
// 		setFirstName(e.target.value);
// 	}

// 	function handleLastNameChange(e: ChangeEvent<HTMLInputElement>): void {
// 		setLastName(e.target.value);
// 	}

// 	function handleReset() {
// 		setFirstName("");
// 		setLastName("");
// 	}

// 	return (
// 		<form onSubmit={(e: ChangeEvent<HTMLFormElement>) => e.preventDefault()}>
// 			<input
// 				placeholder="First name"
// 				value={firstName}
// 				onChange={handleFirstNameChange}
// 			/>
// 			<input
// 				placeholder="Last name"
// 				value={lastName}
// 				onChange={handleLastNameChange}
// 			/>
// 			<h1>
// 				Hi, {firstName} {lastName}
// 			</h1>
// 			<button onClick={handleReset}>Reset</button>
// 		</form>
// 	);
// }

// ----------------------------------------------------------------------------------

// function FeedbackForm(): ReactNode {
// 	const [isSent, setIsSent] = useState<boolean>(false);
// 	const [message, setMessage] = useState<string>("");
// 	if (isSent) {
// 		return <h1>Thank you!</h1>;
// 	}
// 	return (
// 		<form
// 			onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
// 				e.preventDefault();
// 				alert(`Sending: "${message}"`);
// 				setIsSent(true);
// 			}}>
// 			<textarea
// 				placeholder="Message"
// 				value={message}
// 				onChange={(e) => setMessage(e.target.value)}
// 			/>
// 			<br />
// 			<button type="submit">Send</button>
// 		</form>
// 	);
// }

// export default FeedbackForm;

// ----------------------------------------------------------------------------------

// export default function FeedbackForm(): ReactNode {
// 	function handleClick() {
// 		alert(`Hello, ${prompt("What is your name?")}!`);
// 	}

// 	return <button onClick={handleClick}>Greet</button>;
// }

// ----------------------------------------------------------------------------------

// function Form(): ReactNode {
// 	const [isSent, setIsSent] = useState(false);
// 	const [message, setMessage] = useState("Hi!");
// 	if (isSent) {
// 		return <h1>Your message is on its way!</h1>;
// 	}
// 	return (
// 		<form
// 			onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
// 				e.preventDefault();
// 				setIsSent(true);
// 				sendMessage(message);
// 			}}>
// 			<textarea
// 				placeholder="Message"
// 				value={message}
// 				onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
// 			/>
// 			<button type="submit">Send</button>
// 		</form>
// 	);
// }

// function sendMessage(message: string): void {
// 	<h1>{message}</h1>;
// }

// export default Form;

// ----------------------------------------------------------------------------------

// export default function TrafficLight() {
// 	const [walk, setWalk] = useState(true);

// 	function handleClick() {
// 		alert(walk ? "Stop is next" : "Walk is next");
// 		setWalk(!walk);
// 	}

// 	return (
// 		<>
// 			<button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
// 			<h1
// 				style={{
// 					color: walk ? "darkgreen" : "darkred"
// 				}}>
// 				{walk ? "Walk" : "Stop"}
// 			</h1>
// 		</>
// 	);
// }

// ----------------------------------------------------------------------------------

// function RequestTracker(): ReactNode {
// 	const [pending, setPending] = useState<number>(0);
// 	const [completed, setCompleted] = useState<number>(0);

// 	async function handleClick() {
// 		setPending(pending + 1);
// 		await delay(3000);
// 		setPending((pending) => --pending);
// 		setCompleted((completed) => ++completed);
// 	}

// 	return (
// 		<>
// 			<h3>Pending: {pending}</h3>
// 			<h3>Completed: {completed}</h3>
// 			<button onClick={handleClick}>Buy</button>
// 		</>
// 	);
// }

// function delay(ms: number): Promise<number> {
// 	return new Promise((resolve) => {
// 		setTimeout(resolve, ms);
// 	});
// }

// export default RequestTracker;

// ----------------------------------------------------------------------------------

// function increment(n: number): number {
// 	return n + 1;
// }
// increment.toString = () => "n => n+1";

// function App(): ReactNode {
// 	return (
// 		<>
// 			<TestCase
// 				baseState={0}
// 				queue={[1, 1, 1]}
// 				expected={1}
// 			/>
// 			<hr />
// 			<TestCase
// 				baseState={0}
// 				queue={[increment, increment, increment]}
// 				expected={3}
// 			/>
// 			<hr />
// 			<TestCase
// 				baseState={0}
// 				queue={[5, increment]}
// 				expected={6}
// 			/>
// 			<hr />
// 			<TestCase
// 				baseState={0}
// 				queue={[5, increment, 42]}
// 				expected={42}
// 			/>
// 		</>
// 	);
// }

// function TestCase({baseState, queue, expected}: {baseState: number; queue: Array<number | ((state: number) => number)>; expected: number}): ReactElement {
// 	const actual = getFinalState(baseState, queue);
// 	return (
// 		<>
// 			<p>
// 				Base state: <b>{baseState}</b>
// 			</p>
// 			<p>
// 				Queue: <b>[{queue.join(", ")}]</b>
// 			</p>
// 			<p>
// 				Expected result: <b>{expected}</b>
// 			</p>
// 			<p
// 				style={{
// 					color: actual === expected ? "green" : "red"
// 				}}>
// 				Your result: <b>{actual}</b> ({actual === expected ? "correct" : "wrong"})
// 			</p>
// 		</>
// 	);
// }

// function getFinalState(baseState: number, queue: Array<number | ((state: number) => number)>): number {
// 	let finalState: number = baseState;

// 	for (let update of queue) {
// 		if (typeof update === "function") {
// 			finalState = update(finalState);
// 		} else {
// 			finalState = update;
// 		}
// 	}

// 	return finalState;
// }

// export default App;

// ----------------------------------------------------------------------------------

// function MovingDot(): ReactNode {
// 	const [position, setPosition] = useState({x: 0, y: 0});
// 	return (
// 		<div
// 			onPointerMove={(e: MouseEvent<HTMLDivElement>) => {
// 				setPosition({
// 					x: e.clientX,
// 					y: e.clientY
// 				});
// 			}}
// 			style={{
// 				position: "relative",
// 				width: "100vw",
// 				height: "100vh"
// 			}}>
// 			<div
// 				style={{
// 					position: "absolute",
// 					backgroundColor: "red",
// 					borderRadius: "50%",
// 					transform: `translate(${position.x}px, ${position.y}px)`,
// 					left: -10,
// 					top: -10,
// 					width: 20,
// 					height: 20
// 				}}
// 			/>
// 		</div>
// 	);
// }

// export default MovingDot;

// ----------------------------------------------------------------------------------

// function Form(): ReactNode {
// 	const [person, setPerson] = useImmer<PersonInfo>({
// 		firstName: "Barbara",
// 		lastName: "Hepworth",
// 		email: "bhepworth@sculpture.com"
// 	});

// 	function handleChange(e: ChangeEvent<HTMLInputElement>) {
// 		setPerson({
// 			...person,
// 			[e.target.name]: e.target.value
// 		});
// 	}

// 	return (
// 		<>
// 			{Object.keys(person).map((key) => (
// 				<label key={key}>
// 					{key}:
// 					<input
// 						name={key}
// 						value={person[key]}
// 						onChange={handleChange}
// 					/>
// 				</label>
// 			))}
// 			<p>
// 				{person.firstName} {person.lastName} ({person.email})
// 			</p>
// 		</>
// 	);
// }

// export default Form;

// ----------------------------------------------------------------------------------

// function Form(): ReactNode {
// 	const [person, setPerson] = useState({
// 		name: "Niki de Saint Phalle",
// 		artwork: {
// 			title: "Blue Nana",
// 			city: "Hamburg",
// 			image: "https://i.imgur.com/Sd1AgUOm.jpg"
// 		}
// 	});

// 	function handleNameChange(e: ChangeEvent<HTMLInputElement>): void {
// 		setPerson({
// 			...person,
// 			name: e.target.value
// 		});
// 	}

// 	function handleTitleChange(e: ChangeEvent<HTMLInputElement>): void {
// 		setPerson({
// 			...person,
// 			artwork: {
// 				...person.artwork,
// 				title: e.target.value
// 			}
// 		});
// 	}

// 	function handleCityChange(e: ChangeEvent<HTMLInputElement>): void {
// 		setPerson({
// 			...person,
// 			artwork: {
// 				...person.artwork,
// 				city: e.target.value
// 			}
// 		});
// 	}

// 	function handleImageChange(e: ChangeEvent<HTMLInputElement>): void {
// setPerson({
// 	...person,
// 	artwork: {
// 		...person.artwork,
// 		image: e.target.value
// 	}
// });
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

// function Scoreboard(): ReactNode {
// 	const [player, setPlayer] = useState({
// 		firstName: "Ranjani",
// 		lastName: "Shettar",
// 		score: 10
// 	});

// 	function handlePlusClick(): void {
// 		setPlayer({...player, score: ++player.score});
// 	}

// 	function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>): void {
// 		setPlayer({
// 			...player,
// 			firstName: e.target.value
// 		});
// 	}

// 	function handleLastNameChange(e: ChangeEvent<HTMLInputElement>): void {
// 		setPlayer({...player, lastName: e.target.value});
// 	}

// 	return (
// 		<>
// 			<label>
// 				Score: <b>{player.score}</b> <button onClick={handlePlusClick}>+1</button>
// 			</label>
// 			<label>
// 				First name:
// 				<input
// 					value={player.firstName}
// 					onChange={handleFirstNameChange}
// 				/>
// 			</label>
// 			<label>
// 				Last name:
// 				<input
// 					value={player.lastName}
// 					onChange={handleLastNameChange}
// 				/>
// 			</label>
// 		</>
// 	);
// }

// export default Scoreboard;

// ----------------------------------------------------------------------------------

// function Background({position}: {position: Position}): ReactElement {
// 	return (
// 		<div
// 			style={{
// 				position: "absolute",
// 				transform: `translate(${position.x}px, ${position.y}px)`,
// 				width: 250,
// 				height: 250,
// 				backgroundColor: "rgba(200, 200, 0, 0.2)"
// 			}}
// 		/>
// 	);
// }

// function Box({children, color, position, onMove}: {children: ReactNode; color: string; position: Position; onMove: (dx: number, dy: number) => void}): ReactElement {
// 	const [lastCoordinates, setLastCoordinates] = useState<{x: number; y: number} | null>(null);

// 	function handlePointerDown(e: PointerEvent<HTMLDivElement>): void {
// 		const target = e.target as HTMLDivElement;
// 		target.setPointerCapture(e.pointerId);

// 		setLastCoordinates({
// 			x: e.clientX,
// 			y: e.clientY
// 		});
// 	}

// 	function handlePointerMove(e: PointerEvent<HTMLDivElement>): void {
// 		if (lastCoordinates) {
// 			setLastCoordinates({
// 				x: e.clientX,
// 				y: e.clientY
// 			});
// 			const dx = e.clientX - lastCoordinates.x;
// 			const dy = e.clientY - lastCoordinates.y;
// 			onMove(dx, dy);
// 		}
// 	}

// 	function handlePointerUp(e: PointerEvent<HTMLDivElement>): void {
// 		setLastCoordinates(null);
// 	}

// 	return (
// 		<div
// 			onPointerDown={handlePointerDown}
// 			onPointerMove={handlePointerMove}
// 			onPointerUp={handlePointerUp}
// 			style={{
// 				width: 100,
// 				height: 100,
// 				cursor: "grab",
// 				backgroundColor: color,
// 				position: "absolute",
// 				border: "1px solid black",
// 				display: "flex",
// 				justifyContent: "center",
// 				alignItems: "center",
// 				transform: `translate(${position.x}px,${position.y}px)`
// 			}}>
// 			{children}
// 		</div>
// 	);
// }

// const initialPosition: Position = {x: 0, y: 0};

// function Canvas(): ReactNode {
// 	const [shape, setShape] = useImmer({
// 		color: "orange",
// 		position: initialPosition
// 	});

// 	function handleMove(dx: number, dy: number): void {
// 		setShape((draft) => {
// 			(draft.position.x = dx), (draft.position.y = dy);
// 		});
// 	}

// 	function handleColorChange(e: ChangeEvent<HTMLSelectElement>): void {
// 		setShape((draftt) => {
// 			draftt.color = e.target.value;
// 		});
// 	}

// 	return (
// 		<>
// 			<select
// 				value={shape.color}
// 				onChange={handleColorChange}>
// 				<option value="orange">orange</option>
// 				<option value="lightpink">lightpink</option>
// 				<option value="aliceblue">aliceblue</option>
// 			</select>
// 			<Background position={initialPosition} />
// 			<Box
// 				color={shape.color}
// 				position={shape.position}
// 				onMove={handleMove}>
// 				Drag me!
// 			</Box>
// 		</>
// 	);
// }

// export default Canvas;

// ----------------------------------------------------------------------------------

// function List(): ReactNode {
// 	let nextId = 0;
// 	const [name, setName] = useState<string>("");
// 	const [artists, setArtists] = useState<Array<{id: number; name: string}>>([]);

// 	return (
// 		<>
// 			<h1>Inspiring sculptors:</h1>
// 			<input
// 				value={name}
// 				onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
// 			/>
// 			<button
// 				onClick={() => {
// 					setArtists([{id: nextId++, name: name}, ...artists]);
// 				}}>
// 				Add
// 			</button>
// 			<ul>
// 				{artists.map((artist: {id: number; name: string}) => (
// 					<li key={artist.id}>{artist.name}</li>
// 				))}
// 			</ul>
// 		</>
// 	);
// }

// export default List;

// ----------------------------------------------------------------------------------

// let initialArtists = [
// 	{id: 0, name: "Marta Colvin Andrade"},
// 	{id: 1, name: "Lamidi Olonade Fakeye"},
// 	{id: 2, name: "Louise Nevelson"}
// ];

// function List(): ReactNode {
// 	const [artists, setArtists] = useState(initialArtists);

// 	return (
// 		<>
// 			<h1>Inspiring sculptors:</h1>
// 			<ul>
// 				{artists.map((artist) => (
// 					<li key={artist.id}>
// 						{artist.name}{" "}
// 						<button
// 							onClick={() => {
// 								setArtists(artists.filter((a) => a.id !== artist.id));
// 							}}>
// 							Delete
// 						</button>
// 					</li>
// 				))}
// 			</ul>
// 		</>
// 	);
// }

// export default List;

// ----------------------------------------------------------------------------------

// let initialShapes: Shapes[] = [
// 	{id: 0, type: "circle", x: 50, y: 100},
// 	{id: 1, type: "square", x: 150, y: 100},
// 	{id: 2, type: "circle", x: 250, y: 100}
// ];

// function ShapeEditor(): ReactNode {
// 	const [shapes, setShapes] = useState<Shapes[]>(initialShapes);

// 	function handleClick(): void {
// 		const nextShapes = shapes.map((shape) => {
// 			if (shape.type === "square") {
// 				return shape;
// 			} else {
// 				return {
// 					...shape,
// 					y: shape.y + 50
// 				};
// 			}
// 		});
// 		setShapes(nextShapes);
// 	}

// 	return (
// 		<>
// 			<button onClick={handleClick}>Move circles down!</button>
// 			{shapes.map((shape) => (
// 				<div
// 					key={shape.id}
// 					style={{
// 						background: "purple",
// 						position: "absolute",
// 						left: shape.x,
// 						top: shape.y,
// 						borderRadius: shape.type === "circle" ? "50%" : "",
// 						width: 20,
// 						height: 20
// 					}}
// 				/>
// 			))}
// 		</>
// 	);
// }

// export default ShapeEditor;

// ----------------------------------------------------------------------------------

// let initialCounters: number[] = [0, 0, 0];

// function CounterList(): ReactNode {
// 	const [counters, setCounters] = useState<number[]>(initialCounters);

// 	function handleIncrementClick(index: number): void {
// 		const nextCounters: number[] = counters.map<number>((c: number, i: number): number => {
// 			return i === index ? c + 1 : c;
// 		});
// 		setCounters(nextCounters);
// 	}

// 	return (
// 		<ul>
// 			{counters.map<ReactElement>((counter: number, i: number): ReactElement => (
// 				<li key={i}>
// 					{counter}
// 					<button
// 						onClick={(): void => {
// 							handleIncrementClick(i);
// 						}}>
// 						+1
// 					</button>
// 				</li>
// 			))}
// 		</ul>
// 	);
// }

// export default CounterList;

// ----------------------------------------------------------------------------------

// let nextId: number = 3;
// const initialArtists: Artists[] = [
// 	{id: 0, name: "Marta Colvin Andrade"},
// 	{id: 1, name: "Lamidi Olonade Fakeye"},
// 	{id: 2, name: "Louise Nevelson"}
// ];

// function List(): ReactNode {
// 	const [name, setName]: [string, Dispatch<SetStateAction<string>>] = useState<string>("");
// 	const [artists, setArtists]: [Artists[], Dispatch<SetStateAction<Artists[]>>] = useState<Artists[]>(initialArtists);

// 	function handleClick(): void {
// 		const insertAt: number = 1;
// 		const nextArtists: Artists[] = [...artists.slice(0, insertAt), {id: nextId++, name: name}, ...artists.slice(insertAt)];
// 		setArtists(nextArtists);
// 		setName("");
// 	}

// 	return (
// 		<>
// 			<h1>Inspiring sculptors:</h1>
// 			<input
// 				value={name}
// 				onChange={(e: ChangeEvent<HTMLInputElement>): void => setName(e.target.value)}
// 			/>
// 			<button onClick={handleClick}>Insert</button>
// 			<ul>
// 				{artists.map<ReactElement>(
// 					(artist: Artists): ReactElement => (
// 						<li key={artist.id}>{artist.name}</li>
// 					)
// 				)}
// 			</ul>
// 		</>
// 	);
// }

// export default List;

// ----------------------------------------------------------------------------------

// let nextId: number = 3;
// const initialList: ListPing[] = [
// 	{id: 0, title: "Big Bellies"},
// 	{id: 1, title: "Lunar Landscape"},
// 	{id: 2, title: "Terracotta Army"}
// ];

// function List(): ReactNode {
// 	const [list, setList] = useState<ListPing[]>(initialList);

// 	function handleClick(): void {
// 		const nextList: ListPing[] = [...list];
// 		nextList.reverse();
// 		setList(nextList);
// 	}

// 	return (
// 		<>
// 			<button onClick={handleClick}>Reverse</button>
// 			<ul>
// 				{list.map((artwork: ListPing) => (
// 					<li key={artwork.id}>{artwork.title}</li>
// 				))}
// 			</ul>
// 		</>
// 	);
// }

// export default List;

// ----------------------------------------------------------------------------------

// let nextId: number = 3;
// const initialList: ListPong[] = [
// 	{id: 0, title: "Big Bellies", seen: false},
// 	{id: 1, title: "Lunar Landscape", seen: false},
// 	{id: 2, title: "Terracotta Army", seen: true}
// ];

// function BucketList(): ReactNode {
// 	const [myList, setMyList] = useState<ListPong[]>(initialList);
// 	const [yourList, setYourList] = useImmer<ListPong[]>(initialList);

// 	function handleToggleMyList(artworkId: number, nextSeen: boolean): void {
// 		const myNextList: ListPong[] = [...myList];
// 		const artwork: ListPong | undefined = myNextList.find((a: ListPong) => a.id === artworkId);
// 		if (artwork) {
// 			artwork.seen = nextSeen;
// 		}
// 		setMyList(myNextList);
// 	}

// 	function handleToggleYourList(artworkId: number, nextSeen: boolean): void {
// 		setYourList((draft) => {
// 			const artwork = draft.find((a: ListPong) => a.id === artworkId);
// 			if (artwork) {
// 				artwork.seen = nextSeen;
// 			}
// 		});
// 	}

// 	return (
// 		<>
// 			<h1>Art Bucket List</h1>
// 			<h2>My list of art to see:</h2>
// 			<ItemList
// 				artworks={myList}
// 				onToggle={handleToggleMyList}
// 			/>
// 			<h2>Your list of art to see:</h2>
// 			<ItemList
// 				artworks={yourList}
// 				onToggle={handleToggleYourList}
// 			/>
// 		</>
// 	);
// }

// function ItemList({artworks, onToggle}: {artworks: ListPong[]; onToggle: (artworkId: number, nextSeen: boolean) => void}): ReactElement {
// 	return (
// 		<ul>
// 			{artworks.map((artwork: ListPong) => (
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
// 					</label>
// 				</li>
// 			))}
// 		</ul>
// 	);
// }

// export default BucketList;

// ----------------------------------------------------------------------------------

// const initialProducts = [
// 	{
// 		id: 0,
// 		name: "Baklava",
// 		count: 1
// 	},
// 	{
// 		id: 1,
// 		name: "Cheese",
// 		count: 5
// 	},
// 	{
// 		id: 2,
// 		name: "Spaghetti",
// 		count: 2
// 	}
// ];

// export default function ShoppingCart() {
// 	const [products, setProducts] = useState(initialProducts);

// 	function handleClick(productId: number, increment: boolean) {
// 		setProducts((prevProducts) => prevProducts.map((product) => (product.id === productId ? {...product, count: increment ? product.count + 1 : product.count - 1} : product)));
// 	}

// 	return (
// 		<ul>
// 			{products
// 				.filter((product) => product.count > 0)
// 				.map((product) => (
// 					<li key={product.id}>
// 						{product.name} (<b>{product.count}</b>)
// 						<button
// 							onClick={() => {
// 								handleClick(product.id, true);
// 							}}>
// 							+
// 						</button>
// 						<button
// 							onClick={() => {
// 								handleClick(product.id, false);
// 							}}>
// 							-
// 						</button>
// 					</li>
// 				))}
// 		</ul>
// 	);
// }

// ----------------------------------------------------------------------------------

// let nextId: number = 3;
// const initialTodos: Todos[] = [
// 	{id: 0, title: "Buy milk", done: true},
// 	{id: 1, title: "Eat tacos", done: false},
// 	{id: 2, title: "Brew tea", done: false}
// ];

// function TaskApp(): ReactNode {
// 	const [todos, setTodos] = useImmer<Todos[]>(initialTodos);

// 	function handleAddTodo(title: string): void {
// 		setTodos((draft) => {
// 			draft.push({
// 				id: nextId++,
// 				title: title,
// 				done: false
// 			});
// 		});

// 		// let todo = [...todos];
// 		// todo.push({
// 		// 	id: nextId++,
// 		// 	title: title,
// 		// 	done: false
// 		// });
// 		// setTodos(todo);
// 	}

// 	function handleChangeTodo(nextTodo: Todos): void {
// 		setTodos((draft) => {
// 			draft.map((todo: Todos) => {
// 				if (todo.id === nextTodo.id) {
// 					todo.title = nextTodo.title;
// 					todo.done = nextTodo.done;
// 				}
// 			});
// 		});

// 		// setTodos((prevTodos) => prevTodos.map((todo: Todos) => (todo.id === nextTodo.id ? {...todo, title: nextTodo.title, done: nextTodo.done} : todo)));
// 	}

// 	function handleDeleteTodo(todoId: number): void {
// 		setTodos((draft) => {
// 			const index = draft.findIndex((t: Todos) => t.id === todoId);
// 			draft.splice(index, 1);
// 		});

// 		// setTodos(todos.filter((todo: Todos) => todo.id !== todoId));
// 	}

// 	return (
// 		<>
// 			<AddTodo onAddTodo={handleAddTodo} />
// 			<TaskList
// 				todos={todos}
// 				onChangeTodo={handleChangeTodo}
// 				onDeleteTodo={handleDeleteTodo}
// 			/>
// 		</>
// 	);
// }

// function AddTodo({onAddTodo}: {onAddTodo: (title: string) => void}): ReactElement {
// 	const [title, setTitle] = useState<string>("");
// 	return (
// 		<>
// 			<input
// 				placeholder="Add todo"
// 				value={title}
// 				onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
// 			/>
// 			<button
// 				onClick={() => {
// 					setTitle("");
// 					onAddTodo(title);
// 				}}>
// 				Add
// 			</button>
// 		</>
// 	);
// }

// function TaskList({todos, onChangeTodo, onDeleteTodo}: {todos: Todos[]; onChangeTodo: (nextTodo: Todos) => void; onDeleteTodo: (todoId: number) => void}) {
// 	return (
// 		<ul>
// 			{todos.map((todo: Todos) => (
// 				<li key={todo.id}>
// 					<Task
// 						todo={todo}
// 						onChange={onChangeTodo}
// 						onDelete={onDeleteTodo}
// 					/>
// 				</li>
// 			))}
// 		</ul>
// 	);
// }

// function Task({todo, onChange, onDelete}: {todo: Todos; onChange: (nextTodo: Todos) => void; onDelete: (todoId: number) => void}) {
// 	const [isEditing, setIsEditing] = useState<boolean>(false);
// 	let todoContent;
// 	if (isEditing) {
// 		todoContent = (
// 			<>
// 				<input
// 					value={todo.title}
// 					onChange={(e: ChangeEvent<HTMLInputElement>) => {
// 						onChange({
// 							...todo,
// 							title: e.target.value
// 						});
// 					}}
// 				/>
// 				<button onClick={() => setIsEditing(false)}>Save</button>
// 			</>
// 		);
// 	} else {
// 		todoContent = (
// 			<>
// 				{todo.title}
// 				<button onClick={() => setIsEditing(true)}>Edit</button>
// 			</>
// 		);
// 	}
// 	return (
// 		<label>
// 			<input
// 				type="checkbox"
// 				checked={todo.done}
// 				onChange={(e: ChangeEvent<HTMLInputElement>) => {
// 					onChange({
// 						...todo,
// 						done: e.target.checked
// 					});
// 				}}
// 			/>
// 			{todoContent}
// 			<button onClick={() => onDelete(todo.id)}>Delete</button>
// 		</label>
// 	);
// }

// export default TaskApp;

// ----------------------------------------------------------------------------------

// function Form(): ReactNode {
// 	const [answer, setAnswer] = useState<string>("");
// 	const [error, setError] = useState<null | {message: string}>(null);
// 	const [status, setStatus] = useState<string>("typing");

// 	if (status === "success") {
// 		return <h1>That&apos;s right!</h1>;
// 	}

// 	async function handleSubmit(e: ChangeEvent<HTMLFormElement>): Promise<string | void> {
// 		e.preventDefault();
// 		setStatus("submitting");
// 		try {
// 			await submitForm(answer);
// 			setStatus("success");
// 		} catch (err) {
// 			setStatus("typing");
// 			setError(err as {message: string} | null);
// 		}
// 	}

// 	function handleTextareaChange(e: ChangeEvent<HTMLTextAreaElement>): void {
// 		setAnswer(e.target.value);
// 	}

// 	return (
// 		<>
// 			<h2>City quiz</h2>
// 			<p>In which city is there a billboard that turns air into drinkable water?</p>
// 			<form onSubmit={handleSubmit}>
// 				<textarea
// 					value={answer}
// 					onChange={handleTextareaChange}
// 					disabled={status === "submitting"}
// 				/>
// 				<br />
// 				<button disabled={answer.length === 0 || status === "submitting"}>Submit</button>
// 				{error !== null && <p className="Error">{error.message}</p>}
// 			</form>
// 		</>
// 	);
// }

// function submitForm(answer: string): Promise<string | void> {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			let shouldError = answer.toLowerCase() !== "lima";
// 			if (shouldError) {
// 				reject(new Error("Good guess but a wrong answer. Try again!"));
// 			} else {
// 				resolve();
// 			}
// 		}, 1500);
// 	});
// }

// export default Form;

// ----------------------------------------------------------------------------------

// export default function Form() {
// 	const [firstName, setFirstName] = useState("");
// 	const [lastName, setLastName] = useState("");

// 	const fullName = firstName + " " + lastName;

// 	function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
// 		setFirstName(e.target.value);
// 	}

// 	function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
// 		setLastName(e.target.value);
// 	}

// 	return (
// 		<>
// 			<h2>Let’s check you in</h2>
// 			<label>
// 				First name:{" "}
// 				<input
// 					value={firstName}
// 					onChange={handleFirstNameChange}
// 				/>
// 			</label>
// 			<label>
// 				Last name:{" "}
// 				<input
// 					value={lastName}
// 					onChange={handleLastNameChange}
// 				/>
// 			</label>
// 			<p>
// 				Your ticket will be issued to: <b>{fullName}</b>
// 			</p>
// 		</>
// 	);
// }

// ----------------------------------------------------------------------------------

// function Accordion(): ReactNode {
// 	const [activeIndex, setActiveIndex] = useState(0);
// 	return (
// 		<>
// 			<h2>Almaty, Kazakhstan</h2>
// 			<Panel
// 				title="About"
// 				isActive={activeIndex === 0}
// 				onShow={() => setActiveIndex(0)}>
// 				With a population of about 2 million, Almaty is Kazakhstan&apos;s largest city. From 1929 to 1997, it was its capital city.
// 			</Panel>
// 			<Panel
// 				title="Etymology"
// 				isActive={activeIndex === 1}
// 				onShow={() => setActiveIndex(1)}>
// 				The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for &apos;apple&apos; and is often translated as &apos;full of apples&apos;. In fact, the region
// 				surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the
// 				modern domestic apple.
// 			</Panel>
// 		</>
// 	);
// }

// function Panel({title, children, isActive, onShow}: {title: string; children: ReactNode; isActive: boolean; onShow: () => void}): ReactElement {
// 	return (
// 		<section className="panel">
// 			<h3>{title}</h3>
// 			{isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
// 		</section>
// 	);
// }

// export default Accordion;

// ----------------------------------------------------------------------------------

// function Chat({contact, onChange}: {contact: Chat; onChange: (text: string) => void}): ReactElement {
// 	return (
// 		<section className="chat">
// 			<textarea
// 				value={contact.text}
// 				placeholder={"Chat to " + contact.name}
// 				onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
// 					onChange(e.target.value);
// 				}}
// 			/>
// 			<br />
// 			<button>Send to {contact.email}</button>
// 		</section>
// 	);
// }

// function ContactList({contacts, onSelect}: {contacts: Chat[]; onSelect: (contact: Chat) => void}): ReactElement {
// 	return (
// 		<section className="contact-list">
// 			<ul>
// 				{contacts.map((contact: Chat) => (
// 					<li key={contact.email}>
// 						<button
// 							onClick={() => {
// 								onSelect(contact);
// 							}}>
// 							{contact.name}
// 						</button>
// 					</li>
// 				))}
// 			</ul>
// 		</section>
// 	);
// }

// function Messenger(): ReactElement {
// 	const [contacts, setContacts] = useImmer<Chat[]>([
// 		{name: "Taylor", email: "taylor@mail.com", text: ""},
// 		{name: "Alice", email: "alice@mail.com", text: ""},
// 		{name: "Bob", email: "bob@mail.com", text: ""}
// 	]);
// 	const [person, setPerson] = useImmer<Chat>(contacts[0]);

// 	function handleSelect(contact: Chat): void {
// 		setContacts((draft) => {
// 			const index = draft.findIndex((o) => o.name === person.name);
// 			draft[index].text = person.text;
// 		});
// 		setPerson({
// 			...person,
// 			name: contact.name,
// 			email: contact.email,
// 			text: contact.text
// 		});
// 		console.log(person);
// 	}

// 	function handleChange(text: string): void {
// 		setPerson((draft) => {
// 			draft.text = text;
// 		});
// 	}

// 	return (
// 		<div>
// 			<ContactList
// 				contacts={contacts}
// 				onSelect={handleSelect}
// 			/>
// 			<Chat
// 				contact={person}
// 				onChange={handleChange}
// 			/>
// 		</div>
// 	);
// }

// export default Messenger;

// ----------------------------------------------------------------------------------

// function AddTask({onAddTask}: {onAddTask: (title: string) => void}): ReactElement {
// 	const [title, setTitle] = useState<string>("");
// 	return (
// 		<>
// 			<input
// 				placeholder="Add todo"
// 				value={title}
// 				onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
// 			/>
// 			<button
// 				onClick={() => {
// 					setTitle("");
// 					onAddTask(title);
// 				}}>
// 				Add
// 			</button>
// 		</>
// 	);
// }

// function TaskList({todos, onChangeTask, onDeleteTask}: {todos: Todos[]; onChangeTask: (tasks: Todos) => void; onDeleteTask: (todoId: number) => void}) {
// 	return (
// 		<ul>
// 			{todos.map((todo: Todos) => (
// 				<li key={todo.id}>
// 					<Task
// 						todo={todo}
// 						onChange={onChangeTask}
// 						onDelete={onDeleteTask}
// 					/>
// 				</li>
// 			))}
// 		</ul>
// 	);
// }

// function Task({todo, onChange, onDelete}: {todo: Todos; onChange: (nextTodo: Todos) => void; onDelete: (todoId: number) => void}) {
// 	const [isEditing, setIsEditing] = useState<boolean>(false);
// 	let todoContent;
// 	if (isEditing) {
// 		todoContent = (
// 			<>
// 				<input
// 					value={todo.title}
// 					onChange={(e: ChangeEvent<HTMLInputElement>) => {
// 						onChange({
// 							...todo,
// 							title: e.target.value
// 						});
// 					}}
// 				/>
// 				<button onClick={() => setIsEditing(false)}>Save</button>
// 			</>
// 		);
// 	} else {
// 		todoContent = (
// 			<>
// 				{todo.title}
// 				<button onClick={() => setIsEditing(true)}>Edit</button>
// 			</>
// 		);
// 	}
// 	return (
// 		<label>
// 			<input
// 				type="checkbox"
// 				checked={todo.done}
// 				onChange={(e: ChangeEvent<HTMLInputElement>) => {
// 					onChange({
// 						...todo,
// 						done: e.target.checked
// 					});
// 				}}
// 			/>
// 			{todoContent}
// 			<button onClick={() => onDelete(todo.id)}>Delete</button>
// 		</label>
// 	);
// }

// export default function TaskApp() {
// 	const [tasks, dispatch] = useReducer<(todos: Todos[], action: Action) => Todos[]>(tasksReducer, initialTasks);

// 	function handleAddTask(text: string) {
// 		dispatch({
// 			type: "added",
// 			id: nextId++,
// 			title: text
// 		});
// 	}

// 	function handleChangeTask(task: Todos) {
// 		dispatch({
// 			type: "changed",
// 			task: task
// 		});
// 	}

// 	function handleDeleteTask(taskId: number) {
// 		dispatch({
// 			type: "deleted",
// 			id: taskId
// 		});
// 	}

// 	return (
// 		<>
// 			<h1>Prague itinerary</h1>
// 			<AddTask onAddTask={handleAddTask} />
// 			<TaskList
// 				todos={tasks}
// 				onChangeTask={handleChangeTask}
// 				onDeleteTask={handleDeleteTask}
// 			/>
// 		</>
// 	);
// }

// function tasksReducer(todos: Todos[], action: Action): Todos[] {
// 	switch (action.type) {
// 		case "added": {
// 			if (typeof action.id !== "undefined") {
// 				return [
// 					...todos,
// 					{
// 						id: action.id,
// 						title: action.title!,
// 						done: false
// 					}
// 				];
// 			}
// 			break;
// 		}
// 		case "changed": {
// 			return todos
// 				.map((t) => {
// 					if (action.task && t.id === action.task.id) {
// 						return action.task;
// 					} else {
// 						return t;
// 					}
// 				})
// 				.filter((task) => task !== undefined) as Todos[];
// 		}
// 		case "deleted": {
// 			return todos.filter((t) => t.id !== action.id);
// 		}
// 		default: {
// 			throw Error("Unknown action: " + action.type);
// 		}
// 	}
// 	return todos;
// }

// let nextId = 3;
// const initialTasks = [
// 	{id: 0, title: "Visit Kafka Museum", done: true},
// 	{id: 1, title: "Watch a puppet show", done: false},
// 	{id: 2, title: "Lennon Wall pic", done: false}
// ];

// ----------------------------------------------------------------------------------

// function Page(): ReactNode {
// 	return (
// 		<Section>
// 			<Heading>Title</Heading>
// 			<Section>
// 				<Heading>Heading</Heading>
// 				<Heading>Heading</Heading>
// 				<Heading>Heading</Heading>
// 				<Section>
// 					<Heading>Sub-heading</Heading>
// 					<Heading>Sub-heading</Heading>
// 					<Heading>Sub-heading</Heading>
// 					<Section>
// 						<Heading>Sub-sub-heading</Heading>
// 						<Heading>Sub-sub-heading</Heading>
// 						<Heading>Sub-sub-heading</Heading>
// 						<Section>
// 							<Heading>Sub-sub-heading</Heading>
// 							<Heading>Sub-sub-heading</Heading>
// 							<Heading>Sub-sub-heading</Heading>
// 							<Section>
// 								<Heading>Sub-sub-heading</Heading>
// 								<Heading>Sub-sub-heading</Heading>
// 								<Heading>Sub-sub-heading</Heading>
// 							</Section>
// 						</Section>
// 					</Section>
// 				</Section>
// 			</Section>
// 		</Section>
// 	);
// }

// function Section({children}: {children: ReactNode}): ReactElement {
// 	const level: number = useContext<number>(LevelContext);
// 	return (
// 		<section className="section">
// 			<LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>
// 		</section>
// 	);
// }

// function Heading({children}: {children: ReactNode}): ReactElement {
// 	const level: number = useContext<number>(LevelContext);
// 	switch (level) {
// 		case 0:
// 			throw Error("Heading must be inside a Section!");
// 		case 1:
// 			return <h1>{children}</h1>;
// 		case 2:
// 			return <h2>{children}</h2>;
// 		case 3:
// 			return <h3>{children}</h3>;
// 		case 4:
// 			return <h4>{children}</h4>;
// 		case 5:
// 			return <h5>{children}</h5>;
// 		case 6:
// 			return <h6>{children}</h6>;
// 		default:
// 			throw Error("Unknown level: " + level);
// 	}
// }

// const LevelContext: Context<number> = createContext<number>(0);

// export default Page;

// ----------------------------------------------------------------------------------

// function TaskApp(): ReactNode {
// 	return (
// 		<TasksProvider>
// 			<h1>Day off in Kyoto</h1>
// 			<AddTask />
// 			<TaskList />
// 		</TasksProvider>
// 	);
// }

// const TasksContext = createContext<Todos[]>([]);
// const TasksDispatchContext = createContext<(action: Action) => void>(() => {});

// function TasksProvider({children}: {children: ReactNode}): ReactElement {
// 	const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

// 	return (
// 		<TasksContext.Provider value={tasks}>
// 			<TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider>
// 		</TasksContext.Provider>
// 	);
// }

// function useTasks() {
// 	return useContext(TasksContext);
// }

// function useTasksDispatch() {
// 	return useContext(TasksDispatchContext);
// }

// function tasksReducer(tasks: Todos[], action: Action): Todos[] {
// 	switch (action.type) {
// 		case "added": {
// 			return [
// 				...tasks,
// 				{
// 					id: action.id!,
// 					title: action.title!,
// 					done: false
// 				}
// 			];
// 		}
// 		case "changed": {
// 			return tasks
// 				.map((t: Todos) => {
// 					if (action.task && t.id === action.task.id) {
// 						return action.task;
// 					} else {
// 						return t;
// 					}
// 				})
// 				.filter((task: Todos) => task !== undefined) as Todos[];
// 		}
// 		case "deleted": {
// 			return tasks.filter((t: Todos) => t.id !== action.id);
// 		}
// 		default: {
// 			throw Error("Unknown action: " + action.type);
// 		}
// 	}
// }

// const initialTasks = [
// 	{id: 0, title: "PhilosopherU+2019s Path", done: true},
// 	{id: 1, title: "Visit the temple", done: false},
// 	{id: 2, title: "Drink matcha", done: false}
// ];

// function AddTask(): ReactElement {
// 	const [title, setTitle] = useState<string>("");
// 	const dispatch = useTasksDispatch();
// 	return (
// 		<>
// 			<input
// 				placeholder="Add task"
// 				value={title}
// 				onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
// 			/>
// 			<button
// 				onClick={() => {
// 					setTitle("");
// 					dispatch({
// 						type: "added",
// 						id: nextId++,
// 						title: title
// 					});
// 				}}>
// 				Add
// 			</button>
// 		</>
// 	);
// }

// let nextId: number = 3;

// function TaskList(): ReactElement {
// 	const tasks = useTasks();
// 	return (
// 		<ul>
// 			{tasks.map((task: Todos) => (
// 				<li key={task.id}>
// 					<Task task={task} />
// 				</li>
// 			))}
// 		</ul>
// 	);
// }

// function Task({task}: {task: Todos}): ReactElement {
// 	const [isEditing, setIsEditing] = useState<boolean>(false);
// 	const dispatch = useTasksDispatch();
// 	let taskContent: ReactElement;
// 	if (isEditing) {
// 		taskContent = (
// 			<>
// 				<input
// 					value={task.title}
// 					onChange={(e: ChangeEvent<HTMLInputElement>) => {
// 						dispatch({
// 							type: "changed",
// 							task: {
// 								...task,
// 								title: e.target.value
// 							}
// 						});
// 					}}
// 				/>
// 				<button onClick={() => setIsEditing(false)}>Save</button>
// 			</>
// 		);
// 	} else {
// 		taskContent = (
// 			<>
// 				{task.title}
// 				<button onClick={() => setIsEditing(true)}>Edit</button>
// 			</>
// 		);
// 	}
// 	return (
// 		<label>
// 			<input
// 				type="checkbox"
// 				checked={task.done}
// 				onChange={(e: ChangeEvent<HTMLInputElement>) => {
// 					dispatch({
// 						type: "changed",
// 						task: {
// 							...task,
// 							done: e.target.checked
// 						}
// 					});
// 				}}
// 			/>
// 			{taskContent}
// 			<button
// 				onClick={() => {
// 					dispatch({
// 						type: "deleted",
// 						id: task.id
// 					});
// 				}}>
// 				Delete
// 			</button>
// 		</label>
// 	);
// }

// export default TaskApp;

// ----------------------------------------------------------------------------------

// function Picture(): ReactNode {
// 	const [isActive, setIsActive] = useState<boolean>(false);
// 	if (isActive) {
// 		return (
// 			<div
// 				className="background"
// 				onClick={() => setIsActive(false)}>
// 				<Image
// 					className="picture picture--active"
// 					alt="Rainbow houses in Kampung Pelangi, Indonesia"
// 					src="https://i.imgur.com/5qwVYb1.jpeg"
// 					height={300}
// 					width={300}
// 					onClick={(e: MouseEvent<HTMLImageElement>) => e.stopPropagation()}
// 				/>
// 			</div>
// 		);
// 	}
// 	return (
// 		<div className="background background--active">
// 			<Image
// 				className="picture"
// 				alt="Rainbow houses in Kampung Pelangi, Indonesia"
// 				src="https://i.imgur.com/5qwVYb1.jpeg"
// 				height={300}
// 				width={300}
// 				onClick={() => setIsActive(true)}
// 			/>
// 		</div>
// 	);
// }

// export default Picture;

// ----------------------------------------------------------------------------------

// function EditProfile(): ReactNode {
// 	const [name, setName] = useState<string>("");
// 	const [lastName, setLastName] = useState<string>("");
// 	const [editing, setEditing] = useState<boolean>(false);
// 	const labelName = <b>{name}</b>;
// 	const labelLastName = <b>{lastName}</b>;
// 	const inputName = (
// 		<input
// 			onChange={(e: ChangeEvent<HTMLInputElement>) => {
// 				setName(e.target.value);
// 			}}
// 			placeholder="Name"
// 			value={name}
// 		/>
// 	);
// 	const inputLastName = (
// 		<input
// 			onChange={(e: ChangeEvent<HTMLInputElement>) => {
// 				setLastName(e.target.value);
// 			}}
// 			placeholder="Last Name"
// 			value={lastName}
// 		/>
// 	);

// 	return (
// 		<form>
// 			<label>First name: {editing ? inputName : labelName}</label>
// 			<label>Last name: {editing ? inputLastName : labelLastName}</label>

// 			<button
// 				type="submit"
// 				onClick={(e: MouseEvent<HTMLButtonElement>) => {
// 					e.preventDefault();
// 					setEditing(!editing);
// 				}}>
// 				{editing ? "Save Profile" : "Edit Profile"}
// 			</button>
// 			<p>
// 				<i>Hello, {name + " " + lastName}!</i>
// 			</p>
// 		</form>
// 	);
// }

// export default EditProfile;

// ----------------------------------------------------------------------------------

// const initialItems: ListPing[] = [
// 	{title: "pretzels", id: 0},
// 	{title: "crispy seaweed", id: 1},
// 	{title: "granola bar", id: 2}
// ];

// function Menu(): ReactNode {
// 	const [items, setItems] = useState<ListPing[]>(initialItems);
// 	const [selectedId, setSelectedId] = useState<number>(0);

// 	const selectedItem: ListPing | undefined = items.find((item: ListPing) => item.id === selectedId);

// 	function handleItemChange(id: number, e: ChangeEvent<HTMLInputElement>): void {
// 		setItems(
// 			items.map((item: ListPing) => {
// 				if (item.id === id) {
// 					return {
// 						...item,
// 						title: e.target.value
// 					};
// 				} else {
// 					return item;
// 				}
// 			})
// 		);
// 	}

// 	return (
// 		<>
// 			<h2>What&apos;s your travel snack?</h2>
// 			<ul>
// 				{items.map((item: ListPing, index: number) => (
// 					<li key={item.id}>
// 						<input
// 							value={item.title}
// 							onChange={(e: ChangeEvent<HTMLInputElement>) => {
// 								handleItemChange(item.id, e);
// 							}}
// 						/>{" "}
// 						<button
// 							onClick={() => {
// 								setSelectedId(item.id);
// 							}}>
// 							Choose
// 						</button>
// 					</li>
// 				))}
// 			</ul>
// 			<p>You picked {selectedItem ? selectedItem.title : "Any"}.</p>
// 		</>
// 	);
// }

// export default Menu;

// ----------------------------------------------------------------------------------

// function TravelPlan(): ReactNode {
// 	const [plan, setPlan] = useState<TravelPlan>(initialTravelPlan);

// 	function handleComplete(parentId: number, childId: number): void {
// 		const parent = plan[parentId];
// 		const nextParent = {
// 			...parent,
// 			childIds: parent.childIds.filter((id: number) => id !== childId)
// 		};
// 		setPlan({
// 			...plan,
// 			[parentId]: nextParent
// 		});
// 	}

// 	const root: TravelPlanChilds = plan[0];
// 	const planetIds: number[] = root.childIds;
// 	return (
// 		<>
// 			<h2>Places to visit</h2>
// 			<ol>
// 				{planetIds.map((id: number) => (
// 					<PlaceTree
// 						key={id}
// 						id={id}
// 						parentId={0}
// 						placesById={plan}
// 						onComplete={handleComplete}
// 					/>
// 				))}
// 			</ol>
// 		</>
// 	);
// }

// function PlaceTree({
// 	id,
// 	parentId,
// 	placesById,
// 	onComplete
// }: {
// 	id: number;
// 	parentId: number;
// 	placesById: TravelPlan;
// 	onComplete: (parentId: number, childId: number) => void;
// }): ReactElement {
// 	const place: TravelPlanChilds = placesById[id];
// 	const childIds: number[] = place.childIds;
// 	return (
// 		<li>
// 			{place.title}
// 			<button
// 				onClick={() => {
// 					onComplete(parentId, id);
// 				}}>
// 				Complete
// 			</button>
// 			{childIds.length > 0 && (
// 				<ol>
// 					{childIds.map((childId: number) => (
// 						<PlaceTree
// 							key={childId}
// 							id={childId}
// 							parentId={id}
// 							placesById={placesById}
// 							onComplete={onComplete}
// 						/>
// 					))}
// 				</ol>
// 			)}
// 		</li>
// 	);
// }

// export default TravelPlan;

// ----------------------------------------------------------------------------------

// function TravelPlan() {
// 	const [plan, updatePlan] = useImmer<TravelPlan>(initialTravelPlan);

// 	function handleComplete(parentId: number, childId: number): void {
// 		updatePlan((draft) => {
// 			const parent: TravelPlanChilds = draft[parentId];
// 			parent.childIds = parent.childIds.filter((id: number) => id !== childId);

// 			deleteAllChildren(childId);
// 			function deleteAllChildren(id: number) {
// 				const place = draft[id];
// 				place.childIds.forEach(deleteAllChildren);
// 				delete draft[id];
// 			}
// 		});
// 	}

// 	const root: TravelPlanChilds = plan[0];
// 	const planetIds: number[] = root.childIds;
// 	return (
// 		<>
// 			<h2>Places to visit</h2>
// 			<ol>
// 				{planetIds.map((id: number) => (
// 					<PlaceTree
// 						key={id}
// 						id={id}
// 						parentId={0}
// 						placesById={plan}
// 						onComplete={handleComplete}
// 					/>
// 				))}
// 			</ol>
// 		</>
// 	);
// }

// function PlaceTree({id, parentId, placesById, onComplete}: {id: number; parentId: number; placesById: TravelPlan; onComplete: (parentId: number, childId: number) => void}) {
// 	const place: TravelPlanChilds = placesById[id];
// 	const childIds: number[] = place.childIds;
// 	return (
// 		<li>
// 			{place.title}
// 			<button
// 				onClick={() => {
// 					onComplete(parentId, id);
// 				}}>
// 				Complete
// 			</button>
// 			{childIds.length > 0 && (
// 				<ol>
// 					{childIds.map((childId: number) => (
// 						<PlaceTree
// 							key={childId}
// 							id={childId}
// 							parentId={id}
// 							placesById={placesById}
// 							onComplete={onComplete}
// 						/>
// 					))}
// 				</ol>
// 			)}
// 		</li>
// 	);
// }

// export default TravelPlan;

// ----------------------------------------------------------------------------------

// function MailClient(): ReactNode {
// 	const [letters, setLetters] = useState<Letter[]>(initialLetters);
// 	const [highlightedId, setHighlightedId] = useState<number | null>(null);

// 	function handleHover(letter: number) {
// 		setHighlightedId(letter);
// 	}

// 	function handleStar(starred: Letter): void {
// 		setLetters(
// 			letters.map((letter: Letter) => {
// 				if (letter.id === starred.id) {
// 					return {
// 						...letter,
// 						isStarred: !letter.isStarred
// 					};
// 				} else {
// 					return letter;
// 				}
// 			})
// 		);
// 	}

// 	return (
// 		<>
// 			<h2>Inbox</h2>
// 			<ul>
// 				{letters.map((letter: Letter) => (
// 					<Letter
// 						key={letter.id}
// 						letter={letter}
// 						isHighlighted={letter.id === highlightedId}
// 						onHover={handleHover}
// 						onToggleStar={handleStar}
// 					/>
// 				))}
// 			</ul>
// 		</>
// 	);
// }

// function Letter({
// 	letter,
// 	isHighlighted,
// 	onHover,
// 	onToggleStar
// }: {
// 	letter: Letter;
// 	isHighlighted: boolean;
// 	onHover: (letterId: number) => void;
// 	onToggleStar: (starred: Letter) => void;
// }) {
// 	return (
// 		<li
// 			className={isHighlighted ? "highlighted" : ""}
// 			onFocus={() => {
// 				onHover(letter.id);
// 			}}
// 			onPointerMove={() => {
// 				onHover(letter.id);
// 			}}>
// 			<button
// 				onClick={() => {
// 					onToggleStar(letter);
// 				}}>
// 				{letter.isStarred ? "Unstar" : "Star"}
// 			</button>
// 			{letter.subject}
// 		</li>
// 	);
// }

// export default MailClient;

// ----------------------------------------------------------------------------------

// function MailClient(): ReactNode {
// 	const [letters, setLetters] = useState<Letter[]>(initialLetters);
// 	const [selectedCount, setSelectedCount] = useState(1);

// 	function handleToggle(letter: Letter) {
// 		setLetters((draft) => {
// 			return draft.map((l: Letter) => {
// 				if (l.id === letter.id) {
// 					l.isStarred ? setSelectedCount((prevCount) => prevCount - 1) : setSelectedCount((prevCount) => prevCount + 1);
// 					return {...l, isStarred: !l.isStarred};
// 				}
// 				return l;
// 			});
// 		});
// 	}

// 	return (
// 		<>
// 			<h2>Inbox</h2>
// 			<ul>
// 				{letters.map((letter: Letter) => (
// 					<Letter
// 						key={letter.id}
// 						letter={letter}
// 						isSelected={letter.isStarred}
// 						onToggle={handleToggle}
// 					/>
// 				))}
// 				<hr />
// 				<p>
// 					<b>You selected {selectedCount} letters</b>
// 				</p>
// 			</ul>
// 		</>
// 	);
// }

// function Letter({letter, onToggle, isSelected}: {letter: Letter; onToggle: (letter: Letter) => void; isSelected: boolean}): ReactElement {
// 	return (
// 		<li className={isSelected ? "selected" : ""}>
// 			<label>
// 				<input
// 					type="checkbox"
// 					checked={isSelected}
// 					onChange={() => {
// 						onToggle(letter);
// 					}}
// 				/>
// 				{letter.subject}
// 			</label>
// 		</li>
// 	);
// }

// export default MailClient;

// ----------------------------------------------------------------------------------

// function Accordion(): ReactNode {
// 	const [activeIndex, setActiveIndex] = useState<number>(0);
// 	return (
// 		<>
// 			<h2>Almaty, Kazakhstan</h2>
// 			<Panel
// 				title="About"
// 				isActive={activeIndex === 0}
// 				onShow={() => setActiveIndex(0)}>
// 				With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
// 			</Panel>
// 			<Panel
// 				title="Etymology"
// 				isActive={activeIndex === 1}
// 				onShow={() => setActiveIndex(1)}>
// 				The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is
// 				thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
// 			</Panel>
// 		</>
// 	);
// }

// function Panel({title, children, isActive, onShow}: {title: string; children: ReactNode; isActive: boolean; onShow: () => void}): ReactElement {
// 	return (
// 		<section className="panel">
// 			<h3>{title}</h3>
// 			{isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
// 		</section>
// 	);
// }

// export default Accordion;

// ----------------------------------------------------------------------------------

// function SyncedInputs(): ReactNode {
// 	const [text, setText] = useState<string>("");

// 	function handleChange(e: ChangeEvent<HTMLInputElement>): void {
// 		setText(e.target.value);
// 	}
// 	return (
// 		<>
// 			<Input
// 				label="First input"
// 				value={handleChange}
// 				text={text}
// 			/>
// 			<Input
// 				label="Second input"
// 				value={handleChange}
// 				text={text}
// 			/>
// 		</>
// 	);
// }

// function Input({label, value, text}: {label: ReactNode; value: (e: ChangeEvent<HTMLInputElement>) => void; text: string}): ReactElement {
// 	return (
// 		<label>
// 			{label}{" "}
// 			<input
// 				value={text}
// 				onChange={value}
// 			/>
// 		</label>
// 	);
// }

// export default SyncedInputs;

// ----------------------------------------------------------------------------------

// function FilterableList(): ReactNode {
// 	const [query, setQuery] = useState<string>("");

// 	function handleChange(e: ChangeEvent<HTMLInputElement>) {
// 		setQuery(e.target.value);
// 	}
// 	return (
// 		<>
// 			<SearchBar
// 				onChange={handleChange}
// 				query={query}
// 			/>
// 			<hr />
// 			<List items={filterItems(foods, query)} />
// 		</>
// 	);
// }

// function SearchBar({onChange, query}: {onChange: (e: ChangeEvent<HTMLInputElement>) => void; query: string}): ReactElement {
// 	return (
// 		<label>
// 			Search:{" "}
// 			<input
// 				value={query}
// 				onChange={onChange}
// 			/>
// 		</label>
// 	);
// }

// function List({items}: {items: Food[]}): ReactElement {
// 	return (
// 		<table>
// 			<tbody>
// 				{items.map((food: Food) => (
// 					<tr key={food.id}>
// 						<td>{food.name}</td>
// 						<td>{food.description}</td>
// 					</tr>
// 				))}
// 			</tbody>
// 		</table>
// 	);
// }

// export default FilterableList;

// ----------------------------------------------------------------------------------

// function App(): ReactNode {
// 	const counter: ReactElement = <Counter />;
// 	return (
// 		<div>
// 			{counter}
// 			{counter}
// 		</div>
// 	);
// }

// function Counter(): ReactElement {
// 	const [score, setScore] = useState<number>(0);
// 	const [hover, setHover] = useState<boolean>(false);

// 	let className: string = "counter";
// 	if (hover) {
// 		className += " hover";
// 	}

// 	return (
// 		<div
// 			className={className}
// 			onPointerEnter={() => setHover(true)}
// 			onPointerLeave={() => setHover(false)}>
// 			<h1>{score}</h1>
// 			<button onClick={() => setScore(score + 1)}>Add one</button>
// 		</div>
// 	);
// }

// export default App;

// ----------------------------------------------------------------------------------

// function App(): ReactNode {
// 	const [showHint, setShowHint] = useState<boolean>(false);
// 	const [text, setText] = useState<string>("");

// 	function saveText(text: string) {
// 		setText(text);
// 	}

// 	if (showHint) {
// 		return (
// 			<div>
// 				<p>
// 					<i>Hint: Your favorite city?</i>
// 				</p>
// 				<Form
// 					text={text}
// 					saveText={setText}
// 				/>
// 				<button
// 					onClick={() => {
// 						setShowHint(false);
// 					}}>
// 					Hide hint
// 				</button>
// 			</div>
// 		);
// 	}
// 	return (
// 		<div>
// 			<Form
// 				text={text}
// 				saveText={setText}
// 			/>
// 			<button
// 				onClick={() => {
// 					setShowHint(true);
// 				}}>
// 				Show hint
// 			</button>
// 		</div>
// 	);
// }

// function Form({text, saveText}: {text: string; saveText: (text: string) => void}) {
// 	return (
// 		<textarea
// 			value={text}
// 			onChange={(e: ChangeEvent<HTMLTextAreaElement>) => saveText(e.target.value)}
// 		/>
// 	);
// }

// export default App;

// ----------------------------------------------------------------------------------

// function App(): ReactNode {
// 	const [reverse, setReverse] = useState<boolean>(false);
// 	let checkbox: ReactElement = (
// 		<label>
// 			<input
// 				type="checkbox"
// 				checked={reverse}
// 				onChange={(e: ChangeEvent<HTMLInputElement>) => setReverse(e.target.checked)}
// 			/>
// 			Reverse order
// 		</label>
// 	);
// 	if (reverse) {
// 		return (
// 			<>
// 				<Field
// 					key="last name"
// 					label="Last name"
// 				/>
// 				<Field
// 					key="first nane"
// 					label="First name"
// 				/>
// 				{checkbox}
// 			</>
// 		);
// 	} else {
// 		return (
// 			<>
// 				<Field
// 					key="first nane"
// 					label="First name"
// 				/>
// 				<Field
// 					key="last name"
// 					label="Last name"
// 				/>
// 				{checkbox}
// 			</>
// 		);
// 	}
// }

// function Field({label}: {label: string}): ReactElement {
// 	const [text, setText] = useState<string>("");
// 	return (
// 		<label>
// 			{label}:{" "}
// 			<input
// 				type="text"
// 				value={text}
// 				placeholder={label}
// 				onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
// 			/>
// 		</label>
// 	);
// }

// export default App;

// ----------------------------------------------------------------------------------

// function ContactManager(): ReactNode {
// 	const [contacts, setContacts] = useState<Contact[]>(initialContacts);
// 	const [selectedId, setSelectedId] = useState<number>(0);
// 	const selectedContact = contacts.find((c: Contact) => c.id === selectedId);

// 	function handleSave(updatedData: Contact): void {
// 		const nextContacts = contacts.map((c: Contact) => {
// 			if (c.id === updatedData.id) {
// 				return updatedData;
// 			} else {
// 				return c;
// 			}
// 		});
// 		setContacts(nextContacts);
// 	}

// 	return (
// 		<div>
// 			<ContactList
// 				contacts={contacts}
// 				selectedId={selectedId}
// 				onSelect={(id: number) => setSelectedId(id)}
// 			/>
// 			<hr />
// 			<EditContact
// 				key={selectedId}
// 				initialData={selectedContact!}
// 				onSave={handleSave}
// 			/>
// 		</div>
// 	);
// }

// function ContactList({contacts, selectedId, onSelect}: {contacts: Contact[]; selectedId: number; onSelect: (id: number) => void}): ReactElement {
// 	return (
// 		<section>
// 			<ul>
// 				{contacts.map((contact: Contact) => (
// 					<li key={contact.id}>
// 						<button
// 							onClick={() => {
// 								onSelect(contact.id);
// 							}}>
// 							{contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
// 						</button>
// 					</li>
// 				))}
// 			</ul>
// 		</section>
// 	);
// }

// function EditContact({initialData, onSave}: {initialData: Contact; onSave: (updatedData: Contact) => void}): ReactElement {
// 	const [name, setName] = useState<string>(initialData.name);
// 	const [email, setEmail] = useState<string>(initialData.email);
// 	return (
// 		<section>
// 			<label>
// 				Name:{" "}
// 				<input
// 					type="text"
// 					value={name}
// 					onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
// 				/>
// 			</label>
// 			<label>
// 				Email:{" "}
// 				<input
// 					type="email"
// 					value={email}
// 					onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
// 				/>
// 			</label>
// 			<button
// 				onClick={() => {
// 					const updatedData: Contact = {
// 						id: initialData.id,
// 						name: name,
// 						email: email
// 					};
// 					onSave(updatedData);
// 				}}>
// 				Save
// 			</button>
// 			<button
// 				onClick={() => {
// 					setName(initialData.name);
// 					setEmail(initialData.email);
// 				}}>
// 				Reset
// 			</button>
// 		</section>
// 	);
// }

// export default ContactManager;
// ----------------------------------------------------------------------------------

// function Gallery(): ReactNode {
// 	const [index, setIndex] = useState<number>(0);
// 	const hasNext: boolean = index < images.length - 1;

// 	function handleClick(): void {
// 		if (hasNext) {
// 			setIndex(index + 1);
// 		} else {
// 			setIndex(0);
// 		}
// 	}

// 	let image: DataImg = images[index];
// 	return (
// 		<>
// 			<button onClick={handleClick}>Next</button>
// 			<h3>
// 				Image {index + 1} of {images.length}
// 			</h3>
// 			<Image
// 				key={index}
// 				alt={image.place}
// 				src={image.src}
// 				width={300}
// 				height={300}
// 			/>
// 			<p>{image.place}</p>
// 		</>
// 	);
// }

// export default Gallery;

// ----------------------------------------------------------------------------------

// function ContactList(): ReactNode {
// 	const [reverse, setReverse] = useState<boolean>(false);

// 	const displayedContacts: Contact[] = [...initialContacts];
// 	if (reverse) {
// 		displayedContacts.reverse();
// 	}

// 	return (
// 		<>
// 			<label>
// 				<input
// 					type="checkbox"
// 					onChange={(e: ChangeEvent<HTMLInputElement>) => {
// 						setReverse(e.target.checked);
// 					}}
// 				/>{" "}
// 				Show in reverse order
// 			</label>
// 			<ul>
// 				{displayedContacts.map((contact: Contact, i: number) => (
// 					<li key={contact.id}>
// 						<Contact contact={contact} />
// 					</li>
// 				))}
// 			</ul>
// 		</>
// 	);
// }

// function Contact({contact}: {contact: Contact}): ReactElement {
// 	const [expanded, setExpanded] = useState<boolean>(false);
// 	return (
// 		<>
// 			<p>
// 				<b>{contact.name}</b>
// 			</p>
// 			{expanded && (
// 				<p>
// 					<i>{contact.email}</i>
// 				</p>
// 			)}
// 			<button
// 				onClick={() => {
// 					setExpanded(!expanded);
// 				}}>
// 				{expanded ? "Hide" : "Show"} email
// 			</button>
// 		</>
// 	);
// }

// export default ContactList;

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------
