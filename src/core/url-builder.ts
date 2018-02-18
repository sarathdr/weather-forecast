import { environment } from './../environments/environment';
export default class UrlBuilder {

  static getForecastUrl(city: string) {
    return environment.weatherUrl + '?q=' + encodeURIComponent(city)
      + '&appid=' + environment.apiKey;
  }

}
