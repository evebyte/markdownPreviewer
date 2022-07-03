// ! this is still a work in progress and may not be used at all

import { useState, useEffect } from "react";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize, faMinimize } from "@fortawesome/free-solid-svg-icons";

const Toolbar = (name, icon) => {
	// fullscreen toggle
	const [isFullscreen, setIsFullscreen] = useState(false);

	useEffect(() => {
		// determine which window to hide/show
		const editorWindow = document.getElementById("editorWindow");
		const previewerWindow = document.getElementById("previewerWindow");

		if (isFullscreen) {
			editorWindow.classList.add("fullscreen");
			previewerWindow.classList.add("hidden");
		} else {
			editorWindow.classList.remove("fullscreen");
			previewerWindow.classList.remove("hidden");
		}
	}, [isFullscreen]);

	const handleFullscreen = () => {
		setIsFullscreen(!isFullscreen);
	};

	return (
		<div
			id="toolbar"
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
					<FontAwesomeIcon icon={icon} />
				</div>
				<p>{name}</p>
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
	);
};

export default Toolbar;
