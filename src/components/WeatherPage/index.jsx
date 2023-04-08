import { useState, useEffect } from "react";
import Search from "../Search";
import WeatherIcon from "../../assets/weather.svg";
import { useMatch } from "@tanstack/react-location";
import { WeatherDescription } from "../../data/weatherCodes";
const WeatherPage = () => {
	const [date, setDate] = useState(new Date());
	const {
		params: { city },
	} = useMatch();
	const {
		data: { weatherData },
	} = useMatch();

	useEffect(() => {
		const timer = setInterval(() => {
			tick();
		}, 10000);
		return function cleanup() {
			clearInterval(timer);
		};
	});

	const tick = () => {
		setDate(new Date());
	};

	const options = {
		year: "numeric",
		month: "numeric",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		hour12: false,
	};
	const { current_weather, daily } = weatherData;

	return (
		<>
			<div className="flex justify-center">
				<Search />
			</div>
			<div className="flex w-full justify-center pl-40 pr-20 mt-14 gap-10">
				<div className="flex flex-col gap-6 justify-center w-1/3">
					<p>{date.toLocaleString([], options)}</p>
					<h3 className="capitalize">{city}</h3>
					<div className="flex gap-5">
						<span className="text-7xl">{Math.round(current_weather.temperature)}°</span>
						<img className="w-20" src={WeatherIcon} alt="weather" />
					</div>

					<p className="capitalize">
						{WeatherDescription[current_weather.weathercode || ""]}
					</p>
				</div>
				<div className="">
					<ul className="flex flex-col">
						<li>High: {Math.round(daily.temperature_2m_max)}</li>
						<li>Low: {Math.round(daily.temperature_2m_min)}</li>
						<li>Sunrise: {daily.sunrise}</li>
						<li>Sunset: {daily.sunset}</li>
						<li>UV Index: {daily.uv_index_max}</li>
						<li>Max Wind Speed: {daily.windspeed_10m_max}</li>
						<li>Max Wind Gusts: {daily.windgusts_10m_max}</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default WeatherPage;
