import { Component } from '../../core/Component';
import { ApiService } from '../../services/ApiService';

class Weather extends Component {
  constructor() {
    super();
    this.api = new ApiService('https://api.open-meteo.com/v1');
    this.state = {
      isLoading: false,
      weather: {},
    };
  }

  setIsLoading(isLoading) {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  }

  getWeather() {
    this.setIsLoading(true);
    this.api
      .get('/forecast', {
        latitude: '52.52',
        longitude: '13.41',
        current_weather: true,
        hourly: 'temperature_2m,relativehumidity_2m,windspeed_10m',
      })
      .then((data) => {
        this.setState((state) => {
          return {
            ...state,
            isLoading: false,
            weather: data,
          };
        });
      });
  }

  componentDidMount() {
    this.getWeather();
  }

  render() {
    const { isLoading, weather } = this.state;

    const wheatheStateMap = {
      0: '🌞',
      2: '☁️',
    };

    return isLoading
      ? 'Loading...'
      : `
        <h1>Weather ${weather?.current_weather?.temperature}</h1>
        <p>${wheatheStateMap[weather?.current_weather?.weathercode]}</p>
    `;
  }
}

customElements.define('it-weather', Weather);
