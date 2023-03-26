import { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import WeatherIcon from "../../assets/weather.svg";
import { useMatch } from "@tanstack/react-location";
const WeatherPage = () => {
	const [date, setDate] = useState(new Date());
	const {
		params: { city },
	} = useMatch();
	const {
		data: { weatherData },
	} = useMatch();
	console.log(weatherData.data);

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

	return (
		<>
			<div className="w-full">
				<SearchBar />
			</div>
			<div className="flex w-full justify-center pl-40 pr-20 mt-14 gap-10">
				<div className="flex flex-col gap-6 justify-center w-1/3">
					<p>{date.toLocaleString([], options)}</p>
					<h3>{city.Capitalilze}</h3>
					<div className="flex gap-5">
						<span className="text-7xl">
							{weatherData.data.current_weather.temperature}
						</span>
						<img className="w-20" src={WeatherIcon} alt="weather" />
					</div>

					<p className="">clear</p>
				</div>
				<div className="grid grid-cols-3 items-center w-1/2">
					<div className="">
						<p>Wind: 15 km/h</p>
					</div>
					<div className="">
						<p>High/Low: 20/14</p>
					</div>
					<div className="">
						<p>Humidity: 15</p>
					</div>
					<div className="">
						<p>Sundrise: 06:00</p>
					</div>
					<div>
						<p>Sunset: 19:00</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default WeatherPage;
