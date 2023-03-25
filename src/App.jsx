import Header from "./components/Header";
import Hero from "./components/Hero";
import WeatherPage from "./components/WeatherPage";
import { Router, ReactLocation, Outlet } from "@tanstack/react-location";

const location = new ReactLocation();

function App() {
	return (
		<Router
			location={location}
			routes={[
				{ path: "/", element: <Hero /> },
				{ path: "/weather/:city", element: <WeatherPage /> },
			]}>
			<div className="app">
				<Header />
				<Outlet />
			</div>
		</Router>
	);
}

export default App;
