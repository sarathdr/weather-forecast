import { AppPage } from './app.po';

describe('weather App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('24 Hours weather forcast');
  });

  it('should search weather in a city', () => {

    page.getSearchBox().sendKeys('London');
    page.getSearchButton().click().then(() => {
      expect(page.getListItems().count()).toEqual(2);
      expect(page.getListItemCityNames().get(0).getText()).toEqual('London');
    });
  });

});
