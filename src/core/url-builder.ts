import { environment } from './../environments/environment';
export default class UrlBuilder {

  static getForecastUrl(city: string) {
    return environment.weatherUrl + '?cnt=8&q=' + encodeURIComponent(city)
      + '&appid=' + environment.apiKey;
  }

}
