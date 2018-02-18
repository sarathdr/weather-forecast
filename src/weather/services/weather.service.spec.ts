import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WeatherService } from './weather.service';
import { of } from 'rxjs/observable/of';
import { Weather } from '../models/weather.model';

describe('WeatherService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });
  });

  it('should create weather service', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));

  it('should return weather', inject([WeatherService], (service: WeatherService) => {

    service.getForecast('london').subscribe( weather => {
      expect(weather.forecasts.length).toEqual(8);
      expect(weather.cityName).toEqual('London');
    });

  }));

});
