import { SearchWeatherSuccess } from './../actions/weather.action';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';

import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import * as fromEffect from './weather.effect';
import * as fromAction from '../actions/weather.action';

import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../models/weather.model';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

let actions$: TestActions;
let service: WeatherService;
let effects: fromEffect.WeatherEffects;

const weather: Weather = {
  id: 123,
  cityName: 'london',
  forecasts: [{
    date: new Date(),
    temp: 123
  }]
};

describe('WeatherEffect', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        WeatherService,
        fromEffect.WeatherEffects,
        { provide: Actions, useFactory: getActions },
      ],
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(WeatherService);
    effects = TestBed.get(fromEffect.WeatherEffects);

    spyOn(service, 'getForecast').and.returnValue(of(weather));
  });

  describe('getWeatherForcast$', () => {

    it('should return the weather forecast', () => {
      const action = new fromAction.SearchWeather('london');
      const completion = new fromAction.SearchWeatherSuccess(weather);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.getWeatherForcast$).toBeObservable(expected);

    });

  });


});
