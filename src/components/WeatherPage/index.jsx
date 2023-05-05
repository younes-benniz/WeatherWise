import Search from "../Search";
import { useMatch } from "@tanstack/react-location";
import { WeatherDescription } from "../../data/weatherCodes";
import WeatherCard from "../WeatherCard";
import ForecastCard from "../ForecastCard";
import { getHour, getHourMinutes, weatherIcon } from "../../utils/getHour";
import { parseISO, getHours, getMinutes } from "date-fns";

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

	const { current_weather, daily, hourly } = weatherData;
	// Time array + temperature array + weathercode array
	console.log(hourly.time);

	return (
		<div className="container mx-auto">
			<div className="w-full flex justify-center mb-8">
				<Search />
			</div>
			<div className="w-full flex gap-6">
				<div className="w-3/5">
					<h1 className="text-4xl mb-4">Current Weather</h1>
					<WeatherCard daily={daily} currentWeather={current_weather} location={city} />
				</div>
				<div className="w-2/5">
					<h1 className="text-4xl mb-4">Hourly forecast</h1>
					<div className="flex flex-col gap-3 h-96 overflow-y-scroll">
						{hourly.time.map((value, index) => (
							<ForecastCard
								key={index}
								hour={getHour(value)}
								temperature={Math.floor(hourly.temperature_2m[index])}
								description={WeatherDescription[hourly.weathercode[index]]}
								iconName={weatherIcon(
									hourly.weathercode[index],
									getHours(parseISO(value)),
									getHours(parseISO(daily.sunrise[0])),
									getHours(parseISO(daily.sunset[0])),
								)}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherPage;
