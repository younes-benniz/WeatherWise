const ForecastCard = ({ hour, temperature, iconName, description }) => {
	return (
		<div className="flex flex-col py-2 px-3 gap-3 rounded-md w-full dark:bg-gray-700 dark:text-gray-100 bg-blue-900">
			<h2 className="text-xl font-semibold badge badge-primary">{hour}</h2>
			<div className="flex gap-4">
				<div className="flex flex-col gap-4">
					<img className="w-20 text-center" src={`/weathericons/${iconName}.svg`} />
				</div>
				<p className="mb-2 text-5xl font-semibold text-center">
					{temperature}
					<span className="text-base align-top">&#8451;</span>
				</p>
			</div>
			<p className="text-base font-bold text-white dark:text-gray-400">{description}</p>
		</div>
	);
};

export default ForecastCard;
