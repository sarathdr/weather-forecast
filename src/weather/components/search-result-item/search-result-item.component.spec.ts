import { Weather } from './../../models/weather.model';
import { FormsModule } from '@angular/forms';
import { SearchResultItemComponent } from './search-result-item.component';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

const weather: Weather = {
  id: 123,
  cityName: 'london',
  forecasts: [{
    date: new Date('2018-02-17 00:00:00'),
    temp: 123
  }]
};

describe('SearchResultItemComponent', () => {
  let component: SearchResultItemComponent;
  let fixture: ComponentFixture<SearchResultItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [SearchResultItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultItemComponent);
    component = fixture.componentInstance;
    component.weather = weather;
    fixture.detectChanges();
  });

  describe('html rendering', () => {

    it('should create search result item component', () => {
      expect(component).toBeTruthy();
    });

    it('should render row item', async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelectorAll('div.item span').length).toEqual(2);
    }));

  });

});
