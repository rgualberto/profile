import axios from 'axios';

const wikiEndpoint = "http://en.wikipedia.org/w/api.php";

// NOTE: axios serializes params by default
export const searchWikiArticles = query => {
  return axios.get(wikiEndpoint, {
          params: {
            action: "query",
            list: "search",
            srsearch: query,
            format: "json",
            origin: "*",
            utf8: ''
          }
        });
};
