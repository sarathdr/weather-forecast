import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {
  SearchWeather,
  WeatherState,
  getForcastDataSelector
} from '../../store';
import { Weather } from './../../models/weather.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  weatherList$: Observable<Weather[]>;
  constructor(private store: Store<WeatherState>) { }

  ngOnInit() {
    this.weatherList$ = this.store.select(getForcastDataSelector);
  }

  onSearch(cityName: string) {
    this.store.dispatch(new SearchWeather(cityName));
  }
}
