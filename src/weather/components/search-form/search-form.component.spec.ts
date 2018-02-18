import { Weather } from './../../models/weather.model';
import { FormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form.component';
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
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [SearchFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('html rendering', () => {

    it('should create search result item component', () => {
      expect(component).toBeTruthy();
    });

    it('should render html', async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('button').textContent).toEqual('search');
    }));

    it('should emit keyword', async(() => {
      spyOn(component, 'searchCity');

      const compiled = fixture.debugElement.nativeElement;
      component.keyword = 'London';
      const button = compiled.querySelector('button');
      button.click();
      fixture.whenStable().then(() => {
        expect(component.searchCity).toHaveBeenCalled();
      });

    }));

  });

});
