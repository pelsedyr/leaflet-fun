export async function getWeather(lat, lng) {
    const response = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lng}`);
    const data = await response.json();
    return data;
}