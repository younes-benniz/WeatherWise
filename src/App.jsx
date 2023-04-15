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
						weatherData: await axios
							.get(import.meta.env.VITE_WEATHER_API, {
								params: {
									latitude: latitude,
									longitude: longitude,
									daily: [
										"weathercode",
										"temperature_2m_max",
										"temperature_2m_min",
										"sunrise",
										"sunset",
										"uv_index_max",
										"windspeed_10m_max",
										"windgusts_10m_max",
									],
									current_weather: true,
									forecast_days: 1,
									timezone: "auto",
								},
							})
							.then((res) => res.data),
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
