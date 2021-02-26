import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";
import * as serviceWorker from './serviceWorker';

import "./index.css";
import App from "./App";
import ScrollToTop from "./components/scroll-to-top/scrollToTop.component";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate persistor={persistor}>
			<ScrollToTop />
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

serviceWorker.register();
