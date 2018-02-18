import { WeatherForecastState } from './weather.reducer';
import {
  WeatherAction,
  SEARCH_WEATHER,
  SEARCH_WEATHER_SUCCESS,
  SEARCH_WEATHER_FAIL
} from './../actions/weather.action';
import { Weather } from './../../models/weather.model';

export interface WeatherForecastState {
  data: Weather[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: WeatherForecastState = {
  data: [],
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
      const data = [...state.data, action.payload];
      return {
        ...state,
        loading: false,
        loaded: true,
        data
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

export const getWeatherForecast = (state: WeatherForecastState) => {
  console.log('reducer >> action=broadcast_data data=', state.data);
  return state.data;
};

export const getWeatherForecastLoading = (state: WeatherForecastState) => state.loading;
export const getWeatherForecastLoaded = (state: WeatherForecastState) => state.loaded;
