import { WeatherForecastState } from './weather.reducer';
import {
  WeatherAction,
  SEARCH_WEATHER,
  SEARCH_WEATHER_SUCCESS,
  SEARCH_WEATHER_FAIL
} from './../actions/weather.action';
import { Weather } from './../../models/weather.model';

export interface WeatherForecastState {
  forecasts: Weather[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: WeatherForecastState = {
  forecasts: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: WeatherAction
): WeatherForecastState {

  switch (action.type) {
    case SEARCH_WEATHER: {
      return {
        ...state,
        loading: true,
      };
    }

    case SEARCH_WEATHER_SUCCESS: {

      if (doesExist(state, action.payload)) {
        return {
          ...state,
          loading: false,
          loaded: true
        };
      }

      const forecasts = [...state.forecasts, action.payload];
      return {
        ...state,
        loading: false,
        loaded: true,
        forecasts
      };
    }

    case SEARCH_WEATHER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  console.log('reducer >> action=initial_state');
  return state;
}

export function doesExist(state: WeatherForecastState, weather: Weather): boolean {
  return state.forecasts.some(
    forecast => forecast.id === weather.id
  );
}

export const getWeatherForecast = (state: WeatherForecastState) => {
  console.log('reducer >> action=broadcast_data data=', state.forecasts);
  return state.forecasts;
};

export const getWeatherForecastLoading = (state: WeatherForecastState) => state.loading;
export const getWeatherForecastLoaded = (state: WeatherForecastState) => state.loaded;
