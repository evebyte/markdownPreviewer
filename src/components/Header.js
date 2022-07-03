// dark mode
import useDarkMode from "../hooks/useDarkMode";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	return (
		<header className="w-full fixed top-0 text-right p-2">
			<ToggleDarkMode />
		</header>
	);
};

const ToggleDarkMode = () => {
	const [darkTheme, setDarkTheme] = useDarkMode();
	const handleMode = () => setDarkTheme(!darkTheme);

	return (
		<button
			title="Toggle Light/Dark Mode"
			className="
				bg-sky-400 dark:bg-sky-600
				hover:bg-blue-500 hover:dark:bg-blue-700
				text-white dark:text-white
                hover:text-white dark:hover:text-white 
				rounded-lg p-3 m-1 font-bold hover:scale-110 active:scale-90
                select-none
                "
			onClick={handleMode}
		>
			{darkTheme ? (
				<span>
					<FontAwesomeIcon icon={faSun} /> light
				</span>
			) : (
				<span>
					<FontAwesomeIcon icon={faMoon} /> dark
				</span>
			)}
		</button>
	);
};

export default Header;
