const Footer = () => {
	return (
		<footer className="w-full fixed bottom-0 text-center p-2">
			<p>
				made by <span> </span>
				<a
					href="https://github.com/evebyte"
					target="_blank"
					className="font-bold underline
					text-sky-400 dark:text-sky-600  
					hover:text-blue-500 dark:hover:text-blue-700
                    hover:scale-110 active:scale-90
					"
					rel="noopener noreferrer"
				>
					eve
				</a>
			</p>
		</footer>
	);
};

export default Footer;