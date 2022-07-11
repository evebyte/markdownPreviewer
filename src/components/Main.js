// react
import { useState, useEffect } from "react";

// components
// import Editor from "./Editor";
// import Previewer from "./Previewer";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPenToSquare,
	faMagnifyingGlass,
	faMaximize,
	faMinimize,
	faSun,
	faMoon,
} from "@fortawesome/free-solid-svg-icons";

// dark mode
import useDarkMode from "../hooks/useDarkMode";

// marked
import { marked } from "marked";

// set options for marked
marked.setOptions({
	gfm: true,
	breaks: true,
});

const Main = () => {
	// fullscreen toggle for editorWindow
	const [isEditorFullscreen, setIsEditorFullscreen] = useState(false);

	useEffect(() => {
		const editorWindow = document.getElementById("editorWindow");
		const toolbar = document.getElementById("editorToolbar");

		if (isEditorFullscreen) {
			editorWindow.classList.add("fullscreen");
			toolbar.classList.add("rounded-none");
		} else {
			editorWindow.classList.remove("fullscreen");
			toolbar.classList.remove("rounded-none");
		}
	}, [isEditorFullscreen]);

	const handleEditorFullscreen = () => {
		setIsEditorFullscreen(!isEditorFullscreen);
	};

	// fullscreen toggle for previewerWindow
	const [isPreviewerFullscreen, setIsPreviewerFullscreen] = useState(false);

	useEffect(() => {
		const previewerWindow = document.getElementById("previewerWindow");
		const toolbar = document.getElementById("previewToolbar");

		if (isPreviewerFullscreen) {
			previewerWindow.classList.add("fullscreen");
			toolbar.classList.add("rounded-none");
		} else {
			previewerWindow.classList.remove("fullscreen");
			toolbar.classList.remove("rounded-none");
		}
	}, [isPreviewerFullscreen]);

	const handlePreviewerFullscreen = () => {
		setIsPreviewerFullscreen(!isPreviewerFullscreen);
	};

	// useState for editor
	const [editorText, setEditorText] = useState("" || placeholder);

	// useEffect to update previewer with editor text
	useEffect(() => {
		const preview = document.getElementById("preview");

		const markdown = marked.parse(editorText);
		preview.innerHTML = markdown;
	}, [editorText]);

	// dark mode
	const [darkTheme, setDarkTheme] = useDarkMode();
	const handleMode = () => setDarkTheme(!darkTheme);

	return (
		<div className="flex flex-col gap-y-4 pt-4">
			{/* editor */}
			<div id="editorWindow" className="w-11/12 md:w-7/12 mx-auto">
				{/* toolbar */}
				<div
					id="editorToolbar"
					className="monospace font-bold
                    flex row  
                    bg-gradient-to-r from-sky-400 to-blue-500
                    dark:from-sky-700 dark:to-blue-800
                    text-white dark:text-slate-200
                    justify-between 
                    p-2 
                    rounded-t-lg
                    "
				>
					{/* left side of toolbar  */}
					<div className="flex flex-row">
						<div className="inline-block align-middle mr-1">
							<FontAwesomeIcon icon={faPenToSquare} />
						</div>
						<p>Editor</p>
					</div>

					{/* right side of toolbar */}
					{/* todo: add "exit fullscreen" when pressing escape key if isFullScreen is true */}
					<div className="flex flex-row">
						{/* dark mode button */}
						<button
							title="Toggle Light/Dark Mode"
							className="
								mr-2 hover:scale-110 active:scale-90
								"
							onClick={handleMode}
						>
							{darkTheme ? (
								<span>
									<FontAwesomeIcon icon={faSun} />
								</span>
							) : (
								<span>
									<FontAwesomeIcon icon={faMoon} />
								</span>
							)}
						</button>

						<button
							onClick={handleEditorFullscreen}
							title="Toggle Fullscreen"
							className="hover:scale-110 active:scale-90"
						>
							{isEditorFullscreen ? (
								<span>
									<FontAwesomeIcon icon={faMinimize} />
								</span>
							) : (
								<span>
									<FontAwesomeIcon icon={faMaximize} />
								</span>
							)}
						</button>
					</div>
				</div>

				{/* editor */}
				<textarea
					id="editor"
					type="text"
					defaultValue={placeholder}
					placeholder="Enter your markdown here..."
					onChange={(e) => setEditorText(e.target.value)}
					className="monospace
                    w-full h-full min-h-[250px] p-2 rounded-b-lg
                    focus:outline-none resize-none
                
                    bg-slate-200 dark:bg-slate-800
                    hover:bg-slate-200 dark:hover:bg-slate-800
                    focus:bg-slate-300 focus:dark:bg-slate-700

                    text-slate-700 dark:text-slate-300
                    focus:text-slate-900 focus:dark:text-slate-200
                    placeholder:text-slate-500 placeholder:dark:text-slate-300
                    "
				/>
			</div>

			{/* previewer */}
			<div id="previewerWindow" className="w-11/12 md:w-8/12 mx-auto">
				{/* toolbar */}
				<div
					id="previewToolbar"
					className="monospace font-bold
                    flex row  
                    bg-gradient-to-r from-sky-400 to-blue-500
                    dark:from-sky-700 dark:to-blue-800
                    text-white dark:text-slate-200
                    justify-between 
                    p-2
                    rounded-t-lg
                    "
				>
					{/* left side of toolbar  */}
					<div className="flex flex-row">
						<div className="inline-block align-middle mr-1">
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</div>
						<p>Previewer</p>
					</div>

					{/* right side of toolbar */}
					{/* todo: add "exit fullscreen" when pressing escape key if isFullScreen is true */}
					<div className="flex flex-row">
						{/* dark mode button */}
						<button
							title="Toggle Light/Dark Mode"
							className="
								mr-2 hover:scale-110 active:scale-90
								"
							onClick={handleMode}
						>
							{darkTheme ? (
								<span>
									<FontAwesomeIcon icon={faSun} />
								</span>
							) : (
								<span>
									<FontAwesomeIcon icon={faMoon} />
								</span>
							)}
						</button>

						<button
							onClick={handlePreviewerFullscreen}
							title="Toggle Fullscreen"
							className="hover:scale-110 active:scale-90"
						>
							{isPreviewerFullscreen ? (
								<span>
									<FontAwesomeIcon icon={faMinimize} />
								</span>
							) : (
								<span>
									<FontAwesomeIcon icon={faMaximize} />
								</span>
							)}
						</button>
					</div>
				</div>

				{/* preview */}
				<div
					id="preview"
					className="
                    w-full h-full p-2 rounded-b-lg
					overflow-y-scroll

                    bg-slate-200 dark:bg-slate-800

                    focus:outline-none
					
					prose prose-slate dark:prose-invert
					max-w-none
                    "
				>
					{/* display user input from editor textarea here  */}
				</div>
			</div>
		</div>
	);
};

const placeholder =
	"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHere's some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";

export default Main;
