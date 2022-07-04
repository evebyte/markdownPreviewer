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
} from "@fortawesome/free-solid-svg-icons";

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
	const [editorText, setEditorText] = useState("");

	// useEffect to update previewer with editor text
	useEffect(() => {
		const preview = document.getElementById("preview");

		const markdown = marked.parse(editorText);
		preview.innerHTML = markdown;
		// use dangerouslySetInnerHTML to render HTML
	}, [editorText]);

	return (
		<div className="flex flex-col gap-y-4">
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
                    justify-between items-center
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
					<div className="flex flex-row">
						<button onClick={handleEditorFullscreen} title="Toggle Fullscreen">
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
					onChange={(e) => setEditorText(e.target.value)}
					type="text"
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
					placeholder="Enter your markdown here..."
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
                    justify-between items-center
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
					<div className="flex flex-row">
						<button
							onClick={handlePreviewerFullscreen}
							title="Toggle Fullscreen"
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

                    text-slate-700 dark:text-slate-200
                    placeholder:text-slate-500 placeholder:dark:text-slate-200
                
                    bg-slate-200 dark:bg-slate-800
                    hover:bg-slate-200 dark:hover:bg-slate-800

                    focus:outline-none
                    focus:bg-slate-300 focus:dark:bg-slate-700
					
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

export default Main;
