// react
import { useState, useEffect } from "react";

// marked
import { marked } from "marked";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMagnifyingGlass,
	faMaximize,
	faMinimize,
} from "@fortawesome/free-solid-svg-icons";

const Previewer = ({ markdown, onChange }) => {
	// todo: consider making handleFullscreen a hook and useEffect to call it, like useDarkMode
	// fullscreen toggle
	const [isFullscreen, setIsFullscreen] = useState(false);

	const handleFullscreen = () => {
		setIsFullscreen(!isFullscreen);

		const editorWindow = document.getElementById("editorWindow");
		const previewerWindow = document.getElementById("previewerWindow");
		const editor = document.getElementById("editor");

		if (isFullscreen) {
			editorWindow.classList.add("hidden");
			previewerWindow.classList.add("fullscreen");
			editor.classList.add("no-resize");
		} else {
			editorWindow.classList.remove("hidden");
			previewerWindow.classList.remove("fullscreen");
			editor.classList.remove("no-resize");
		}
	};

	// handle markdown change
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
		onChange(e.target.value);
	};

	return (
		<div id="previewerWindow" className="w-11/12 md:w-8/12 mx-auto">
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
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</div>
					<p>Previewer</p>
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

			{/* preview */}
			<div
				id="preview"
				onChange={handleChange}
				className="
                    w-full h-full p-2 rounded-b-lg

                    text-slate-700 dark:text-slate-200
                    placeholder:text-slate-500 placeholder:dark:text-slate-200
                
                    bg-slate-200 dark:bg-slate-800
                    hover:bg-slate-200 dark:hover:bg-slate-800

                    focus:outline-none
                    focus:bg-slate-300 focus:dark:bg-slate-700
                    "
			>
				{/* <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} /> */}
				{/* or */}
				{/* {marked(markdown)} */}

				{/* user input display here */}
			</div>
		</div>
	);
};

export default Previewer;
