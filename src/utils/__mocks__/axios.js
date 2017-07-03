const fs = require('fs');

const axios = {
  get: () => new Promise((resolve, reject) => {
    fs.readFile(`./src/utils/__mockData__/wikiResults.json`, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      }

      resolve(JSON.parse(data));
    });
  })
};

export default axios;
