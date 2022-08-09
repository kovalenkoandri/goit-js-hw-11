// const axios = require('axios').default;
import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
// const instance = axios.create({
//   baseURL: 'https://pixabay.com/api/',
//   headers: { common: { Authorization: '29101880-694af7e9974b3c9bb9fbf3052' } },
// });
const searchForm = document.querySelector('#search-form');
const searchParams = new URLSearchParams({
  image_typemit: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});
searchForm.addEventListener('input',  event => {
  const inputValue = event.currentTarget.elements.searchQuery.value;
    axios
      .get(
        // `https://pixabay.com/api/?key=29101880-694af7e9974b3c9bb9fbf3052&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true`
        // `${instance.defaults.baseURL}?key=${instance.defaults.headers.common['Authorization']}&q=${inputValue}&${searchParams}`
        // `https://pixabay.com/api/?q=${inputValue}&${searchParams}`,
        `?q=${inputValue}`,
        {
          params: {
            key: '29101880-694af7e9974b3c9bb9fbf3052',
            image_typemit: 'photo',
            orientation: 'horizontal',
            safesearch: true,
          },
        }
      )
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
});
