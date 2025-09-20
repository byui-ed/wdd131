// Set current year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Static weather data (for demo purposes)
const tempC = 5; // Celsius
const windSpeedKph = 20; // km/h

// Display static data
document.getElementById('temp').textContent = `${tempC}°C`;
document.getElementById('windSpeed').textContent = `${windSpeedKph} km/h`;

// Wind chill calculation function
function calculateWindChill(temp, windSpeed) {
  // Wind chill formula in Celsius
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

// Check conditions for wind chill calculation
if (tempC <= 10 && windSpeedKph > 4.8) {
  const windChill = calculateWindChill(tempC, windSpeedKph);
  document.getElementById('windChill').textContent = `${windChill.toFixed(1)}°C`;
} else {
  document.getElementById('windChill').textContent = 'N/A';
}