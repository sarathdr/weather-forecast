import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getSearchBox() {
    return element(by.css('#search-text'));
  }

  getSearchButton() {
    return element(by.css('app-root button'));
  }

  getListItems() {
    return element.all(by.css('app-root .item'));
  }

  getListItemCityNames() {
    return element.all(by.css('app-root .item span.city-name'));
  }
}
