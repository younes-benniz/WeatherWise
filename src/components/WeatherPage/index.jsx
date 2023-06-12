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

	function sortDatesFromCurrentHour(dates) {
		const currentHour = getHours(parseISO(current_weather.time));
		const nextHour = (currentHour + 1) % 24;

		const sortedDates = dates.sort((date1, date2) => {
			const hour1 = getHours(parseISO(date1));
			const hour2 = getHours(parseISO(date2));

			// Calculate the time difference between next hour and each date's hour
			const diff1 = (hour1 - nextHour + 24) % 24;
			const diff2 = (hour2 - nextHour + 24) % 24;

			return diff1 - diff2;
		});

		return sortedDates;
	}

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
						{sortDatesFromCurrentHour(hourly.time).map((value, index) => {
							let hour = getHours(parseISO(value));
							return (
								<ForecastCard
									key={index}
									hour={getHour(value)}
									temperature={Math.floor(hourly.temperature_2m[hour])}
									description={WeatherDescription[hourly.weathercode[hour]]}
									iconName={weatherIcon(
										hourly.weathercode[hour],
										hour,
										getHours(parseISO(daily.sunrise[0])),
										getHours(parseISO(daily.sunset[0])),
									)}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherPage;
