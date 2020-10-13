class UI {

    constructor() {
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.icon = document.getElementById('w-icon');
        this.temperature = document.getElementById('w-string');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    setInterface(data) {
        console.log(data);
        this.location.innerText = data.name;
        this.description.innerText = data.weather[0].description;
        this.temperature.innerText = data.main.temp + ' ° C';
        this.icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        this.humidity.innerText = `Relative humidity ${data.main.humidity}%`;
        this.pressure.innerText = `${data.main.pressure} HpA`;
        this.feelsLike.innerText = `Feels like ${data.main.feels_like} ° C`;
        this.wind.innerText = `Wind at ${data.wind.speed} KM/H`;
    }

}