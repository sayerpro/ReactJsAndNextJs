import React from "react";
import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {ReactNode} from "react";

function App({Component, pageProps}: AppProps): ReactNode {
	return (
		<React.StrictMode>
			<Component {...pageProps} />
		</React.StrictMode>
	);
}

export default App;
