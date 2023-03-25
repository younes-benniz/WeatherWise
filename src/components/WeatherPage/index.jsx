import SearchBar from "../SearchBar";
import WeatherIcon from "../../assets/weather.svg";
import { useMatch } from "@tanstack/react-location";
const WeatherPage = () => {
	const {
		params: { city },
	} = useMatch();
	return (
		<>
			<div className="w-full">
				<SearchBar />
			</div>
			<div className="flex w-full justify-center pl-40 pr-20 mt-14 gap-10">
				<div className="flex flex-col gap-6 justify-center w-1/3">
					<p>25/03/2023 23:00</p>
					<h3>{city}</h3>
					<div className="flex gap-5">
						<span className="text-7xl">15</span>
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
