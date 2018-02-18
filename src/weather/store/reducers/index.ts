import {
  ActionReducerMap
} from '@ngrx/store';

import {
  WeatherForecastState,
  reducer
} from './weather.reducer';

export interface WeatherState {
  foreCastReducer: WeatherForecastState;
}

/* Export reducer */
export const reducers: ActionReducerMap<WeatherState> = {
  foreCastReducer: reducer
};
