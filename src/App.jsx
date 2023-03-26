import Header from "./components/Header";
import Hero from "./components/Hero";
import WeatherPage from "./components/WeatherPage";
import axios from "axios";
import { Router, ReactLocation, Outlet } from "@tanstack/react-location";

const location = new ReactLocation();

function App() {
	return (
		<Router
			location={location}
			routes={[
				{ path: "/", element: <Hero /> },
				{
					path: "/weather/:city",
					element: <WeatherPage />,
					loader: async ({ search: { longitude, latitude } }) => ({
						weatherData: await axios.get(
							`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`,
						),
					}),
				},
			]}>
			<div className="app">
				<Header />
				<Outlet />
			</div>
		</Router>
	);
}

export default App;
