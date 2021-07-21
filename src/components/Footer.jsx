import { useState } from "react";

const Footer = () => {
	const [hovered, setHovered] = useState(false);
	const toggleHover = (e) => setHovered(!hovered);

	return (
		<>
			<ul className="footer">
				<li
					className={hovered ? "turqoise" : ""}
					onMouseEnter={toggleHover}
					onMouseLeave={toggleHover}
				>
					<a>Obchod</a>
				</li>
				<li
					className={hovered ? "blue" : ""}
					onMouseEnter={toggleHover}
					onMouseLeave={toggleHover}
				>
					<a href="/login">Domů</a>
				</li>
				<li
					className={hovered ? "green" : ""}
					onMouseEnter={toggleHover}
					onMouseLeave={toggleHover}
				>
					<a>Hra</a>
				</li>
				<li
					className={hovered ? "turqoise" : ""}
					onMouseEnter={toggleHover}
					onMouseLeave={toggleHover}
				>
					<a>Profil</a>
				</li>
			</ul>
		</>
	);
};

export default Footer;
