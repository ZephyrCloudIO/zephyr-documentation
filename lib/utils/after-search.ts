import type { AfterSearch } from 'rspress/theme';
const afterSearch: AfterSearch = async (query, searchResult) => {


  fetch('http://localhost:9999/.netlify/functions/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: query
    })
  });


};

export { afterSearch };
