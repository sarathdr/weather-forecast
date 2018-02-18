import { WeatherState } from '../reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  getWeatherForecast,
  getWeatherForecastLoaded,
  getWeatherForecastLoading
} from '../reducers/weather.reducer';

export const getSearchState = createFeatureSelector<WeatherState>(
  'weather'
);

export const getWeatherForcastSelector = createSelector(
  getSearchState,
  (state: WeatherState) => {
    console.log('selector >> action=select_forecast_reducer');
    return state.foreCastReducer;
  }
);

export const getForcastDataSelector = createSelector(
  getWeatherForcastSelector,
  getWeatherForecast
);

export const getWeatherForcastDataLoaded = createSelector(
  getWeatherForcastSelector,
  getWeatherForecastLoaded
);

export const getWeatherForcastDataLoading = createSelector(
  getWeatherForcastSelector,
  getWeatherForecastLoading
);
