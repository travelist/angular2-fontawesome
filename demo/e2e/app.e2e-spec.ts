import { CliAngPage } from './app.po';

describe('cli-ang App', function() {
  let page: CliAngPage;

  beforeEach(() => {
    page = new CliAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
