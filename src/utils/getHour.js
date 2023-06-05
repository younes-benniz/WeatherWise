import { parseISO, getHours, getMinutes } from "date-fns";
import { WeatherDescription } from "../data/weatherCodes";

export const isDay = (currentHour, sunrise, sunset) => {
	return currentHour > sunrise && currentHour < sunset;
};

export const getHour = (isoDate) => {
	let isoDateParsed = parseISO(isoDate);
	let hour = getHours(isoDateParsed);
	return `${hour.toString().padStart(2, "0")}:00`;
};

export const getHourMinutes = (isoDate) => {
	let isoDateParsed = parseISO(isoDate);
	let hour = getHours(isoDateParsed);
	let minutes = getMinutes(isoDateParsed);
	return `${hour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
};

export const weatherIcon = (weatherCode, isday) => {
	let arr = ["rain", "fog", "drizzle", "snow", "thunderstorm"];
	let splited = WeatherDescription[weatherCode].split(" ");

	for (let item of splited) {
		if (arr.includes(item)) {
			return item;
		}
	}
	console.log(isday);

	return `${splited.join("-")}-${isday ? "day" : "night"}`;
};
