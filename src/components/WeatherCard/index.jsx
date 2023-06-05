import { useState, useEffect } from "react";
import { WiStrongWind, WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { MdOutlineLocationOn, MdAccessTime } from "react-icons/md";
import { WeatherDescription } from "../../data/weatherCodes";
import { parseISO, getHours, getMinutes } from "date-fns";
import axios from "axios";
import { getHour, getHourMinutes, weatherIcon, isDay } from "../../utils/getHour";

const WeatherCard = ({ daily, currentWeather, location }) => {
	const currentHour = getHours(parseISO(currentWeather.time));
	const sunriseParsed = parseISO(daily.sunrise[0]);
	const sunsetParsed = parseISO(daily.sunset[0]);
	const [city, setCity] = useState(null);

	useEffect(() => {
		if (location === "current") {
			axios
				.get("https://ipinfo.io", {
					headers: { Authorization: `Bearer ${import.meta.env.VITE_IPINFO_TOKEN}` },
				})
				.then((response) => setCity(response.data.city));
		} else {
			setCity(location);
		}
	}, []);

	const weatherInfo = [
		{ name: "High", value: Math.round(currentWeather.temperature), icon: FaTemperatureHigh },
		{ name: "Low", value: Math.round(daily.temperature_2m_min), icon: FaTemperatureLow },
		{ name: "Wind", value: currentWeather.windspeed, icon: WiStrongWind },
		{ name: "Humidity", value: 15, icon: WiHumidity },
		{ name: "UV Index", value: daily.uv_index_max, icon: WiSunrise },
		{ name: "Sunrise", value: getHourMinutes(daily.sunrise[0]), icon: WiSunrise },
		{ name: "Sunset", value: getHourMinutes(daily.sunset[0]), icon: WiSunset },
	];
	// may put in utils
	const ht = isDay(currentHour, getHours(sunriseParsed), getHours(sunsetParsed));
	const iconName = weatherIcon(currentWeather.weathercode, ht);

	return (
		<div
			className="flex gap-10 bg-secondary rounded py-4 pb-10 px-6 h-96"
			data-theme="corporate">
			<div className="mr-16">
				<div className="flex gap-6 mb-10">
					<div className="flex gap-2">
						<MdOutlineLocationOn className="text-3xl" />
						<h2 className="self-end text-xl text-white">{city}</h2>
					</div>
					<div className="flex gap-2">
						<MdAccessTime className="text-3xl" />
						<span className="self-end text-xl font-semibold text-white">
							{getHour(currentWeather.time)}
						</span>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<p className="text-3xl font-semibold capitalize pl-4">
						{WeatherDescription[currentWeather.weathercode]}
					</p>
					<div className="flex gap-5 items-center mt-4">
						<img className="mr-10" src={`/WeatherWise/weathericons/${iconName}.svg`} />
						<h1 className="text-8xl">
							{Math.round(currentWeather.temperature)}
							<span className="text-base align-top">&#8451;</span>
						</h1>
					</div>
				</div>
			</div>
			<div className="divider divider-horizontal mx-0"></div>
			<div>
				<ul className="flex flex-col text-lg">
					{weatherInfo.map((item, index) => (
						<li key={index} className="flex items-center gap-3 py-2">
							<item.icon className="text-3xl text-white" />
							<span>{`${item.name}: ${item.value}`}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default WeatherCard;
