import { SchremerPage } from './app.po';

describe('schremer App', () => {
  let page: SchremerPage;

  beforeEach(() => {
    page = new SchremerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
