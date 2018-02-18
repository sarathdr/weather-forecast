import * as fromAction from '../actions/weather.action';
import * as fromReducer from './weather.reducer';
import { Weather } from '../../models/weather.model';

describe('Weather reducer', () => {

  describe('initial state no action', () => {

    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {} as any;
      const state = fromReducer.reducer(undefined, action);
      expect(state).toBe(initialState);
    });
  });

  describe('SEARCH_WEATHER action', () => {

    it('should set loading true', () => {
      const { initialState } = fromReducer;
      const action = new fromAction.SearchWeather('london');
      const state = fromReducer.reducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.loaded).toEqual(false);
      expect(state.forecasts).toEqual([]);

    });
  });

  describe('SEARCH_WEATHER_SUCCESS action', () => {

    it('should populate data', () => {

      const payload: Weather = {
        id: 123,
        cityName: 'london',
        forecasts: [{
          date: new Date(),
          temp: 123
        }]
      };

      const { initialState } = fromReducer;
      const action = new fromAction.SearchWeatherSuccess(payload);
      const state = fromReducer.reducer(initialState, action);

      expect(state.loading).toEqual(false);
      expect(state.loaded).toEqual(true);
      expect(state.forecasts).toEqual([payload]);

    });
  });


  describe('SEARCH_WEATHER_FAIL action', () => {

    it('should not change the initial state', () => {

      const payload = {
        message: 'Network error'
      };

      const { initialState } = fromReducer;
      const action = new fromAction.SearchWeatherFail(payload);
      const state = fromReducer.reducer(initialState, action);
      expect(state).toEqual(initialState);

    });
  });

});
