import { Nganimation2Page } from './app.po';

describe('nganimation2 App', () => {
  let page: Nganimation2Page;

  beforeEach(() => {
    page = new Nganimation2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
