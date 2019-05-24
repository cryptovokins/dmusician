import { AppPage } from './app.po';

describe('DMusic App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getHeader()).toEqual('DMusic');
  });
});
