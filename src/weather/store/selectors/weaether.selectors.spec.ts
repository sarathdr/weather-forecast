import { TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

import * as fromStore from '../../store';
import * as fromAction from '../actions/weather.action';
import * as fromReducer from '../reducers/weather.reducer';
import * as fromSelector from './weather.selectors';
import { Weather } from '../../models/weather.model';

describe('WeatherSelectors', () => {

  const weather: Weather = {
    id: 123,
    cityName: 'london',
    forecasts: [{
      date: new Date('2018-02-17 00:00:00'),
      temp: 123
    }]
  };

  let store: Store<fromReducer.WeatherForecastState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          weather: combineReducers(fromStore.reducers)
        })
      ],
    });
    store = TestBed.get(Store);
  });

  describe('getWeatherForcastSelector', () => {

    it('should return weather state', () => {

      let result;
      store.select(fromSelector.getWeatherForcastSelector)
        .subscribe(value => result = value);

      expect(result).toEqual({
        forecasts: [],
        loaded: false,
        loading: false,
      });

      store.dispatch(new fromAction.SearchWeatherSuccess(weather));

      expect(result).toEqual({
        forecasts: [weather],
        loaded: true,
        loading: false,
      });

    });

  });

  describe('getForcastDataSelector', () => {

    it('should return weather', () => {

      let result;
      store.select(fromSelector.getForcastDataSelector)
        .subscribe(value => result = value);

      store.dispatch(new fromAction.SearchWeatherSuccess(weather));
      expect(result).toEqual([weather]);

    });

  });

  describe('getWeatherForcastDataLoaded', () => {

    it('should return loaded true', () => {

      let result;
      store.select(fromSelector.getWeatherForcastDataLoaded)
        .subscribe(value => result = value);

      expect(result).toEqual(false);
      store.dispatch(new fromAction.SearchWeatherSuccess({}));
      expect(result).toEqual(true);

    });

  });

  describe('getWeatherForcastDataLoading', () => {

    it('should return loading true', () => {

      let result;
      store.select(fromSelector.getWeatherForcastDataLoading)
        .subscribe(value => result = value);

      expect(result).toEqual(false);
      store.dispatch(new fromAction.SearchWeather('london'));
      expect(result).toEqual(true);

    });

  });

});
