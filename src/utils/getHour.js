import { parseISO, getHours, getMinutes } from "date-fns";
import { WeatherDescription } from "../data/weatherCodes";

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

export const weatherIcon = (weatherCode, hour, sunrise, sunset) => {
	let arr = ["rain", "fog", "drizzle", "snow", "thunderstorm"];
	let splited = WeatherDescription[weatherCode].split(" ");
	let isDay = hour > sunrise && hour < sunset;

	for (let item of splited) {
		if (arr.includes(item)) {
			return item;
		}
	}

	return `${splited.join("-")}-${isDay ? "day" : "night"}`;
};
