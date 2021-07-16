import Button from "./Button";

const Form = () => {
	return (
		<div className="form_wrapper">
			<form>
				<div className="input_wrapper">
					<input type="email" name="Email" id="Email" />
					<label htmlFor="Email" value="email">
						Email:
					</label>
				</div>
				<div className="input_wrapper">
					<input type="password" name="Password" id="Password" />

					<label htmlFor="Password">Heslo:</label>
				</div>
				<Button type="blue">Přihlásit</Button>
			</form>

			<a
				className="password_forgotten"
				href="https://www.google.com/"
				target="_blank"
				rel="noreferrer noopener"
			>
				Zapomněl jsem heslo &gt;
			</a>
		</div>
	);
};

export default Form;
