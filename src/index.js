import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
searchForm.addEventListener('input',  event => {
  const inputValue = event.currentTarget.elements.searchQuery.value;
    axios
      .get(`?q=${inputValue}`, {
        params: {
          key: '29101880-694af7e9974b3c9bb9fbf3052',
          image_typemit: 'photo',
          orientation: 'horizontal',
          safesearch: true,
        },
      })
      .then(function (response) {
        // handle success
        response.data.total === 0 &&
          Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        return response;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function (response) {
        // always executed
        console.log(response.data.hits);
        gallery.insertAdjacentHTML(
          'afterbegin',
          response.data.hits
            .map(
              element => `
<div class="photo-card">
  <img src="${element.webformatURL}" alt="${element.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b> ${element.likes}
    </p>
    <p class="info-item">
      <b>Views</b> ${element.views}
    </p>
    <p class="info-item">
      <b>Comments</b> ${element.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b> ${element.downloads}
    </p>
  </div>
</div>
`
            )
            .join('')
        );
      });
});
