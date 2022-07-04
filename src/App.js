// react
import React from "react";

// components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="overflow-y-auto">
			<Main />
			<Footer />
		</div>
	);
}

export default App;
