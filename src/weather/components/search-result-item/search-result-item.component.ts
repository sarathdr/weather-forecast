import {
  OnInit,
  EventEmitter,
  Output,
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { Weather } from './../../models/weather.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultItemComponent {
  @Input() public weather: Weather;
  constructor() { }
}
