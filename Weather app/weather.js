class Weather {
    constructor(city, country) {
        this.myHeaders = new Headers();
        this.city = city;
        this.country = country;
        this.apiKey = '6402c7483a21277eac17b298c6df7c7f';
    }

    async getWeather() {

        let upperCountry = `${this.country[0].toUpperCase()}${this.country.slice(1)}`;
        let encodedLocation = encodeURIComponent(`${this.city},${upperCountry}`);

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodedLocation}&units=metric&appid=${this.apiKey}`
        );
        const weatherData = await response.json();

        return weatherData;
    }

    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}