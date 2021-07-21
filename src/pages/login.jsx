import Button from "../components/Button";
import Form from "../components/Form";
import logo from "../utils/imgs/Bloxies - logo.png";

const facebookLogo = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="40"
		width="40"
		viewBox="-204.79995 -341.33325 1774.9329 2047.9995"
	>
		<path
			d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373"
			fill="#1877f2"
		/>
		<path
			d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4"
			fill="#fff"
		/>
	</svg>
);

const googleLogo = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-label="Google"
		role="img"
		height="32"
		width="32"
		viewBox="0 0 512 512"
	>
		<rect width="512" height="512" rx="15%" fill="transparent" />
		<path
			fill="#4285f4"
			d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"
		/>
		<path
			fill="#34a853"
			d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"
		/>
		<path
			fill="#fbbc02"
			d="M153 292c-8-25-8-48 0-73l-63-49c-23 46-30 111 0 171z"
		/>
		<path
			fill="#ea4335"
			d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"
		/>
	</svg>
);

const Login = () => {
	return (
		<div className="container">
			<a href="/" style={{ margin: "2rem", color: "grey" }}>
				Domů
			</a>
			<div className="header">
				<img className="logo" src={logo} alt="logo" height="150px" />
			</div>
			<div className="bottom_container">
				<div className="main_wrapper">
					<Form />
					<p className="or">Nebo</p>
					<div className="section_login">
						<Button>
							Přihlásit přes
							{facebookLogo}
						</Button>
						<Button>
							Přihlásit přes
							{googleLogo}
						</Button>
					</div>
					<section className="section_registration">
						<p>Ještě nemáš účet ?</p>
						<a
							href="https://www.google.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							Registrace
						</a>
					</section>
				</div>
			</div>
		</div>
	);
};

export default Login;
