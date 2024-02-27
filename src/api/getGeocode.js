export async function getReverseGeocode(lat, lng, zoom) {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=${zoom}&addressdetails=1`);
    const data = await response.json();
    return data;
}