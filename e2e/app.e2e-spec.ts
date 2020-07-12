import { MintyPage } from './app.po';

describe('minty App', () => {
  let page: MintyPage;

  beforeEach(() => {
    page = new MintyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
