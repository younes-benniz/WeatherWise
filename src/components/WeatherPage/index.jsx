import Search from "../Search";
import { useMatch } from "@tanstack/react-location";
import { WeatherDescription } from "../../data/weatherCodes";
import WeatherCard from "../WeatherCard";
import ForecastCard from "../ForecastCard";
import { getHour, weatherIcon } from "../../utils/getHour";
import { parseISO, getHours } from "date-fns";

const WeatherPage = () => {
	const {
		params: { city },
	} = useMatch();
	const {
		data: { weatherData },
	} = useMatch();

	const { current_weather, daily, hourly } = weatherData;

	const compareDates = (a, b) => {
		if (a > current_weather.time) {
			return -1;
		} else if (b < current_weather.time) {
			return 1;
		} else {
			return a - b;
		}
	};

	return (
		<div className="container mx-auto">
			<div className="w-full flex justify-center mb-8">
				<Search />
			</div>
			<div className="w-full flex md:flex-row flex-col gap-6 p-4 md:p-0">
				<div className="md:w-3/5 w-full">
					<h1 className="md:text-4xl text-2xl mb-4">Current Weather</h1>
					<WeatherCard daily={daily} currentWeather={current_weather} location={city} />
				</div>
				<div className="md:w-2/5 w-full">
					<h1 className="md:text-4xl text-2xl mb-4">Hourly forecast</h1>
					<div className="flex flex-col gap-3 h-96 overflow-y-scroll">
						{hourly.time.sort(compareDates).map((value, index) => (
							<ForecastCard
								key={index}
								hour={getHour(value)}
								temperature={Math.floor(
									hourly.temperature_2m[getHours(parseISO(value))],
								)}
								description={
									WeatherDescription[
										hourly.weathercode[getHours(parseISO(value))]
									]
								}
								iconName={weatherIcon(
									hourly.weathercode[getHours(parseISO(value))],
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
