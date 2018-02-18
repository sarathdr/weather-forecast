import { WeatherService } from './../../services/weather.service';
import { Weather } from './../../models/weather.model';
import { FormsModule } from '@angular/forms';
import { SearchFormComponent } from './../../components/search-form/search-form.component';
import { SearchResultItemComponent } from './../../components/search-result-item/search-result-item.component';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { StoreModule, combineReducers, Store } from '@ngrx/store';

import * as fromStore from '../../store';
import { WeatherForecastState } from '../../store/reducers/weather.reducer';

const weather: Weather = {
  id: 123,
  cityName: 'london',
  forecasts: [{
    date: new Date('2018-02-17 00:00:00'),
    temp: 123
  }]
};

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let store: Store<WeatherForecastState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        StoreModule.forRoot({
          weather: combineReducers(fromStore.reducers)
        })
      ],
      providers: [WeatherService],
      declarations: [SearchComponent, SearchResultItemComponent, SearchFormComponent]
    })
      .compileComponents();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('html rendering', () => {

    it('should create search component', () => {
      expect(component).toBeTruthy();
    });

    it('should render column title', async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('div.title-row span')[0].textContent).toContain('City');
    }));

  });


  describe('search weather', () => {

    it('should dispatch an action to search weather', () => {
      const action = new fromStore.SearchWeather('London');
      component.onSearch('London');
      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should render weather for city', () => {
      store.dispatch(new fromStore.SearchWeatherSuccess(weather));
      component.weatherList$.subscribe(data => {
        expect(data[0].cityName).toBe(weather.cityName);
      });
    });

  });
});
