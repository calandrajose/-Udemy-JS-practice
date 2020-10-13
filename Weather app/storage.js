class Storage{

    constructor() {
        this.city;
        this.country;
        this.defaultCity = "Buenos Aires";
        this.defaultCountry = "Argentina";
    }

    getLocationData() {
        if (localStorage.getItem('city') === '' || localStorage.getItem('country') === '') {
            this.city = this.defaultCity;
            this.country = this.defaultCountry;
        } else {
            this.city = localStorage.getItem('city');
            console.log('entro')
            this.country = localStorage.getItem('country');
        }

        return {
            city: this.city,
            country: this.country
        };
    }

    setLocationData(city, country) {
        localStorage.setItem("city", city);
        localStorage.setItem("country", country);
    }
}
