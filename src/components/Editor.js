import { useState, useEffect } from "react";

// import index.css
import "../";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPenToSquare,
	faMaximize,
	faMinimize,
} from "@fortawesome/free-solid-svg-icons";

const Editor = () => {
	// todo: consider making handleFullscreen a hook and useEffect to call it, like useDarkMode
	// fullscreen toggle
	const [isFullscreen, setIsFullscreen] = useState(false);

	const editorWindow = document.getElementById("editorWindow");
	const previewerWindow = document.getElementById("previewerWindow");
	const editor = document.getElementById("editor");

	const handleFullscreen = () => {
		setIsFullscreen(!isFullscreen);

		if (isFullscreen) {
			editorWindow.classList.add("fullscreen");
			previewerWindow.classList.add("hidden");
			editor.classList.add("no-resize");
		} else {
			editorWindow.classList.remove("fullscreen");
			previewerWindow.classList.remove("hidden");
			editor.classList.remove("no-resize");
		}
	};

	// handle markdown change
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<div id="editorWindow" className="w-11/12 md:w-7/12 mx-auto">
			{/* toolbar */}
			<div
				id="toolbar"
				className="code font-bold
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
					<button onClick={handleFullscreen} title="Toggle Fullscreen">
						{isFullscreen ? (
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
				value={value}
				onChange={handleChange}
				type="text"
				className="code
                    w-full h-full p-2 rounded-b-lg

                    text-slate-700 dark:text-slate-200
                    placeholder:text-slate-500 placeholder:dark:text-slate-200
                
                    bg-slate-200 dark:bg-slate-800
                    hover:bg-slate-200 dark:hover:bg-slate-800

                    focus:outline-none
                    focus:bg-slate-300 focus:dark:bg-slate-700
                    
                    "
				placeholder="Enter your markdown here"
			/>
		</div>
	);
};

export default Editor;
