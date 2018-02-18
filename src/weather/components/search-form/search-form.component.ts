import {
  EventEmitter,
  Output,
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent {

  keyword: string;
  @Output() search = new EventEmitter<string>();

  constructor() { }

  searchCity() {
    this.search.emit(this.keyword);
    this.keyword = '';
  }
}
