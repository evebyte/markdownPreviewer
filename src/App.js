// react
import React from "react";

// components
import Header from "./components/Header";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="flex flex-col gap-y-4">
				<Editor />
				<Previewer />
			</div>
			<Footer />
		</div>
	);
}

export default App;
