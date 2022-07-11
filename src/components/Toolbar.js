import { useState, useEffect } from "react";

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

const Toolbar = (id, icon, title, window) => {
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

	return (
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
	);
};

export default Toolbar;
