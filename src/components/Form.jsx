import Button from "./Button";

const Form = () => {
	return (
		<div className="form_wrapper">
			<form>
				<div className="input_wrapper">
					<input
						type="email"
						name="Email"
						id="Email"
						placeholder="nekdo@neco.com"
						required
					/>
					<label htmlFor="Email" value="email">
						Email:
					</label>
				</div>
				<div className="input_wrapper">
					<input
						type="password"
						name="Password"
						id="Password"
						placeholder="password"
						required
					/>

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
