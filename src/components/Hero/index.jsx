import { useNavigate } from "@tanstack/react-location";
import Search from "../Search";

const Hero = () => {
	const navigate = useNavigate();

	const handleLocationDetect = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					navigate({
						to: `/WeatherWise/weather/current?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`,
						replace: true,
					});
				},
				(error) => console.log(error),
			);
		} else {
			console.log("Geolocation is not supported by this browser.");
		}
		navigator.permissions.query({ name: "geolocation" }).then((result) => {
			if (result.state === "denied") {
				alert("Please allow permission for location");
			}
		});
	};
	return (
		<div className="container relative z-10 flex items-center px-6 md:pt-8 py-16 mx-auto md:px-6">
			<div className="relative z-10 flex flex-col items-center w-full">
				<h1 className="md:mt-3 md:mb-12 mb-8 font-extrabold leading-tight text-center md:text-4xl text-2xl">
					Get Live Weather Updates !
				</h1>
				<Search />
				<span className="my-10 md:text-3xl text-xl">- OR -</span>
				<button className="btn btn-accent rounded md:btn-lg" onClick={handleLocationDetect}>
					Detect Location by GPS
				</button>
			</div>
		</div>
	);
};

export default Hero;
