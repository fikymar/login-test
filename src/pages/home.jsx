import Footer from "../components/Footer";
import logo from "../utils/imgs/Bloxies - logo.png";

const Home = () => {
	return (
		<div className="home">
			<header className="header home_header">
				<img className="logo" src={logo} alt="logo" width="150px" />
			</header>
			<main className="home_main">
				<button className="homeBTN blue">Minihry</button>
				<button className="homeBTN green">Nastavení cílů</button>
				<button className="homeBTN turqoise">Žebříček úspěchů</button>
				<button className="homeBTN blue">Programátorský dobyvatel</button>
				<button className="homeBTN green">Nastavení hry</button>
			</main>
			<Footer />
		</div>
	);
};

export default Home;
