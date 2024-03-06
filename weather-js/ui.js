class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-fels-like");
    this.dewpoints = document.getElementById("w-despoint");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.sys.country;
    this.description = weather.weather;
    // this.string = weather.temperature_string;
    this.icon.setAttribute("src", weather.icon);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    // this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
    // this.dewpoints.textContent = `Dew Point: ${weather.dewpoint - string}`;
    this.wind.textContent = `Wind: ${weather.wind.deg}`;
  }
}
