import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import { WeatherService } from './../../services/weather.service';
import { SEARCH_WEATHER } from '../actions';
import {
  SearchWeather,
  SearchWeatherSuccess,
  SearchWeatherFail
} from '../actions/weather.action';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

  @Effect()
  getWeatherForcast$ = this.actions$.ofType(SEARCH_WEATHER).pipe(
    map((action: SearchWeather ) => action.payload),
      switchMap(cityName => {
      return this.weatherService
        .getForecast(cityName)
        .pipe(
          map(weather => new SearchWeatherSuccess(weather)),
          catchError(error => of(new SearchWeatherFail(error)))
        );
    })
  );
}
