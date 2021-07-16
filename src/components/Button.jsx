const Button = ({ children, type }) => {
	return (
		<>
			<button
				className={`button ${
					type === "blue" ? "button--blue" : "button--login"
				}`}
			>
				{children}
			</button>
		</>
	);
};

export default Button;
