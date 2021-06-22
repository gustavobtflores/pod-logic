import React, { createContext, useState, useContext } from "react";

const PlayerContext = createContext();

export default function PlayerProvider({ children }) {
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<PlayerContext.Provider value={{ isPlaying, setIsPlaying }}>
			{children}
		</PlayerContext.Provider>
	);
}

export function usePlayer() {
	const context = useContext(PlayerContext);
	const { isPlaying, setIsPlaying } = context;
	return { isPlaying, setIsPlaying };
}
