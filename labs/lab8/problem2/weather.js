// weather-client.js
const axios = require('axios');

const API_KEY = 'a5cb202110c54f5e85b80958250911'; 
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

const showUsage = () => {
    console.log('Error: Please provide city name');
    console.log('Usage: node weather.js <city_name>');
    console.log("Example: node weather.js 'Khon Kaen'");
    console.log('Note: Use quotes for city names with spaces');
};

const getWeather = async (city) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: city,
                aqi: 'no'
            }
        });

        const { location, current } = response.data;
        
        console.log(`Current temperature in ${location.name} is ${current.temp_c}°C`);
        console.log(`Weather condition: ${current.condition.text}`);
        
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
                console.log('Error: City not found or invalid city name');
            } else if (error.response.status === 401) {
                console.log('Error: Invalid API key');
            } else if (error.response.data && error.response.data.error) {
                console.log(`Error: ${error.response.data.error.message}`);
            } else {
                console.log('Error: Unable to fetch weather data');
            }
        } else if (error.request) {
            console.log('Error: Unable to connect to weather service. Please check your internet connection.');
        } else {
            console.log(`Error: ${error.message}`);
        }
        process.exit(1);
    }
};

const main = () => {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        showUsage();
        process.exit(1);
    }
    
    const city = args.join(' ');
    
    getWeather(city);
};

// Run the program
main();