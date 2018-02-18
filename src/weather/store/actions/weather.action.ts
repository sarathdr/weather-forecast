import { Action } from '@ngrx/store';
import { Weather } from '../../models/weather.model';


export const SEARCH_WEATHER = '[Weather] Search';
export const SEARCH_WEATHER_FAIL = '[Weather] Search Fail';
export const SEARCH_WEATHER_SUCCESS = '[Weather] Search Success';

export class SearchWeather implements Action {
  readonly type = SEARCH_WEATHER;
  constructor(public payload: string) {}
}

export class SearchWeatherFail implements Action {
  readonly type = SEARCH_WEATHER_FAIL;
  constructor(public payload: any) {}
}

export class SearchWeatherSuccess implements Action {
  readonly type = SEARCH_WEATHER_SUCCESS;
  constructor(public payload: Weather) {}
}

// action types
export type WeatherAction = SearchWeather | SearchWeatherFail | SearchWeatherSuccess;
