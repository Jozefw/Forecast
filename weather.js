class Weather{
    constructor(city,state){
        this.apiKey = 'd4defb14e6f6a6fb';
        this.city = city;
        this.state = state;
    }
    // fetch weather
    async getWeather(){
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`)

        const responseData = await response.json();
        return responseData.current_observation;
    }

    // change weather location
    changeLocale(city,state){
        this.city = city;
        this.state = state;
    }
}
