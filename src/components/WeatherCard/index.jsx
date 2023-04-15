import WeatherIcon from "../../assets/weather.svg";
import { WiStrongWind, WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { MdOutlineLocationOn, MdAccessTime } from "react-icons/md";
import { WeatherDescription } from "../../data/weatherCodes";
import { parseISO, getHours, getMinutes } from "date-fns";

const WeatherCard = ({ daily, currentWeather }) => {
	const currentHour = getHours(parseISO(currentWeather.time));
	const sunriseParsed = parseISO(daily.sunrise[0]);
	const sunsetParsed = parseISO(daily.sunset[0]);
	const sunriseTime = `${getHours(sunriseParsed).toString().padStart(2, "0")}:${getMinutes(
		sunriseParsed,
	)
		.toString()
		.padStart(2, "0")}`;
	const sunsetTime = `${getHours(sunsetParsed).toString().padStart(2, "0")}:${getMinutes(
		sunsetParsed,
	)
		.toString()
		.padStart(2, "0")}`;
	const weatherInfo = [
		{ name: "High", value: Math.round(currentWeather.temperature), icon: FaTemperatureHigh },
		{ name: "Low", value: Math.round(daily.temperature_2m_min), icon: FaTemperatureLow },
		{ name: "Wind", value: currentWeather.windspeed, icon: WiStrongWind },
		{ name: "Humidity", value: 15, icon: WiHumidity },
		{
			name: "UV Index",
			value: daily.uv_index_max,
			icon: WiSunrise,
		},
		{ name: "Sunrise", value: sunriseTime, icon: WiSunrise },
		{ name: "Sunset", value: sunsetTime, icon: WiSunset },
	];

	const currentWeaterIcon = (weatherDescription, hour, sunrise, sunset) => {
		let arr = ["rain", "fog", "drizzle", "snow", "thunderstorm"];
		let splited = weatherDescription.split(" ");
		let isDay = hour > sunrise && hour < sunset;

		for (let word of splited) {
			if (arr.includes(word)) {
				return <img className="mr-10" src={`/weathericons/${word}.svg`} />;
			}
		}
		return (
			<img
				className="mr-10"
				src={`/weathericons/${splited.join("-")}-${isDay ? "day" : "night"}.svg`}
			/>
		);
	};

	return (
		<>
			<h1 className="text-4xl mb-4">Current Weather</h1>
			<div className="flex gap-10 bg-slate-700 rounded py-4 pb-10 px-6 h-96">
				<div className="mr-16">
					<div className="flex gap-6 mb-10">
						<div className="flex gap-2">
							<MdOutlineLocationOn className="text-3xl" />
							<h2 className="self-end text-xl text-white">Current</h2>
						</div>
						<div className="flex gap-2">
							<MdAccessTime className="text-3xl" />
							<span className="self-end text-xl font-semibold text-white">{`${currentHour
								.toString()
								.padStart(2, "0")}:00`}</span>
						</div>
					</div>
					<div className="flex flex-col gap-5">
						<p className="text-3xl font-semibold capitalize pl-4">
							{WeatherDescription[currentWeather.weathercode]}
						</p>
						<div className="flex gap-5 items-center mt-4">
							{currentWeaterIcon(
								WeatherDescription[currentWeather.weathercode],
								currentHour,
								getHours(sunriseParsed),
								getHours(sunsetParsed),
							)}
							<h1 className="text-8xl">
								{Math.round(currentWeather.temperature)}
								<span className="text-base align-top">&#8451;</span>
							</h1>
						</div>
					</div>
				</div>
				<div className="divider divider-horizontal mx-0"></div>
				<div>
					<ul className="flex flex-col text-lg text-white">
						{weatherInfo.map((item, index) => (
							<li key={index} className="flex items-center gap-3 py-2">
								<item.icon className="text-3xl text-slate-400" />
								<span>{`${item.name}: ${item.value}`}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default WeatherCard;
