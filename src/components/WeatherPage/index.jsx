import { useState, useEffect } from "react";
import Search from "../Search";
import WeatherIcon from "../../assets/weather.svg";
import LocationIcon from "../../assets/location.svg";
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
		<div className="flex flex-col items-center w-full gap-9">
			<div className="w-full flex justify-center">
				<Search />
			</div>
			<div className="w-3/4 flex items-center">
				<div className="w-1/2 p-4 rounded z-10 bg-sky-800 text-white">
					<div className="flex justify-between items-center">
						<div className="flex items-center">
							<img src={LocationIcon} className="w-10" />
							<h2 className="self-end text-xl">Agadir</h2>
						</div>
						<p className="text-xl font-semibold">10:00 p.m</p>
					</div>
					<div className="flex justify-between">
						<h1 className="text-7xl ml-6 mt-7">
							29<span className="text-base">&#8451;</span>
						</h1>

						<div className="flex items-center gap-6 mr-8 mt-5">
							<img src={WeatherIcon} className="w-20 mb-5" />
							<p className="text-3xl font-semibold">Sunny</p>
						</div>
					</div>
				</div>
				<div className="w-1/2 px-20 p-5 -ml-16 z-0 rounded bg-indigo-700 text-white">
					<ul className="flex flex-col">
						<div className="flex justify-between">
							<li>High: {Math.round(daily.temperature_2m_max)}</li>
							<li>Low: {Math.round(daily.temperature_2m_min)}</li>
						</div>
						<div className="flex justify-between">
							<li>Sunrise: {daily.sunrise}</li>
							<li>Sunset: {daily.sunset}</li>
						</div>
						<li>Wind: {daily.windspeed_10m_max}</li>
						<li>Gusts: {daily.windgusts_10m_max}</li>
						<li>UV Index: {daily.uv_index_max}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default WeatherPage;
