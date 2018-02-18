import { Weather } from './../../models/weather.model';
import * as fromAction from './weather.action';

describe('Weather actions', () => {

  describe('SearchWeather', () => {

    it('should create an action', () => {
      const action = new fromAction.SearchWeather('london');

      expect({ ...action }).toEqual({
        type: fromAction.SEARCH_WEATHER,
        payload: 'london'
      });
    });

  });

  describe('SearchWeatherSuccess', () => {

    it('should create an action', () => {
      const payload: Weather = {
        id: 123,
        cityName: 'london',
        forecasts: [{
          date: new Date(),
          temp: 123
        }]
      };

      const action = new fromAction.SearchWeatherSuccess(payload);
      expect({ ...action }).toEqual({
        type: fromAction.SEARCH_WEATHER_SUCCESS,
        payload,
      });
    });

  });

  describe('SearchWeatherFail', () => {

    it('should create an action', () => {
      const payload = { message: 'Network error'};
      const action = new fromAction.SearchWeatherFail(payload);
      expect({ ...action }).toEqual({
        type: fromAction.SEARCH_WEATHER_FAIL,
        payload,
      });
    });

  });

});
