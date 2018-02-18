import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import { Weather } from './../models/weather.model';
import UrlBuilder from '../../core/url-builder';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getForecast(city: string): Observable<Weather> {
    console.log('service >> action=search city_name: ', city);
    return this.http.get(UrlBuilder.getForecastUrl(city)).pipe(
      map(this.formatData)
    );
  }

  private formatData(data: any): Weather {
    const forecasts = [];
    data.list.forEach(item => {
      forecasts.push({
        date: new Date(item.dt_txt),
        temp: item.main.temp
      });
    });

    return {
      id: data.city.id,
      cityName: data.city.name,
      forecasts: forecasts
    };
  }

}
