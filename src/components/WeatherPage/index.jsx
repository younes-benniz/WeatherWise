import Search from "../Search";
import WeatherIcon from "../../assets/weather.svg";
import { useMatch } from "@tanstack/react-location";
import { WeatherDescription } from "../../data/weatherCodes";
import WeatherCard from "../WeatherCard";

const WeatherPage = () => {
	const {
		params: { city },
	} = useMatch();
	const {
		search: { longitude, latitude },
	} = useMatch();
	const {
		data: { weatherData },
	} = useMatch();

	const { current_weather, daily } = weatherData;

	return (
		<div className="container mx-auto">
			<div className="w-full flex justify-center mb-8">
				<Search />
			</div>
			<div className="w-full flex">
				<div className="w-3/5">
					<WeatherCard daily={daily} currentWeather={current_weather} />
				</div>
				<div className="text-4xl mb-4">
					<h1>Hourly forecast</h1>
				</div>
			</div>
		</div>
	);
};

export default WeatherPage;
