class Weather {
  constructor() {
    this.apiKey = "0e919552b9e5e7c1c873450485e69e98";
    this.city = "";
    this.state = "state";
  }

  // Fetching weather API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`
    );

    const rsponseData = await response.json();

    return rsponseData;
  }

  // Change Location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
