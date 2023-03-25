import SearchBar from "../SearchBar";
const Hero = () => {
	return (
		<div className="container relative z-10 flex items-center px-6 md:pt-8 py-16 mx-auto md:px-6">
			<div className="relative z-10 flex flex-col items-center w-full">
				<h1 className="lg:mt-3 font-extrabold leading-tight text-center text-white text-4xl sm:text-5xl mb-8">
					Get Live Weather Updates !
				</h1>
				<SearchBar />
				<span className="text-white my-10 text-3xl">- OR -</span>
				<button className="btn btn-accent">Detect Location by GPS</button>
			</div>
		</div>
	);
};

export default Hero;
