import { MeepoCorePage } from './app.po';

describe('meepo-core App', () => {
  let page: MeepoCorePage;

  beforeEach(() => {
    page = new MeepoCorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
