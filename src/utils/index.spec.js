import {
  searchWikiArticles
} from './index';

jest.mock('axios');

describe('Util Function:', () => {
  it('axios gets wiki search results json', () => {
    searchWikiArticles('engine')
    .then(data => {
      expect(data).toBeDefined();
      expect(data.continue.sroffset).toEqual(10);
      expect(data.query.search[0].title).toEqual('Engine');
    })
    .catch(error => {
      console.log(error); // eslint-disable-line no-console
    });
  });
});
