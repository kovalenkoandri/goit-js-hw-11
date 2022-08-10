const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
.visually-hidden { 
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
.gallery { 
  // display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  display: flex;
}
.photo-card {
  flex-basis: 100px;
}
img {
    width: 40%;
}`;
document.getElementsByTagName('head')[0].appendChild(style);
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.load-more');
loadMore.classList.add(`visually-hidden`);
let page = 1;
let per_page = 3;
let inputValue;
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  page = 1;
  gallery.innerHTML = '';
  inputValue = event.currentTarget.elements.searchQuery.value;
  axiosSearch();
});

loadMore.addEventListener('click', event => {
  page += 1;
  axiosLoadMore();
});

function axiosSearch() {
  axios
    .get(`?q=${inputValue}`, {
      params: {
        key: '29101880-694af7e9974b3c9bb9fbf3052',
        image_typemit: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: per_page,
        page: page,
      },
    })
    .then(function (response) {
      // handle success
      console.log(response);
      if (response.data.totalHits === 0) {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else Notify.info(`Hooray! We found ${response.data.totalHits} images.`);
      loadMore.classList.add(`visually-hidden`);
      setTimeout(() => loadMore.classList.remove(`visually-hidden`), 1000);

      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function (response) {
      // always executed
      console.log(response.data.totalHits);
      gallery.insertAdjacentHTML(
        'afterbegin',
        response.data.hits.reduce(
          (ac, element) =>
            ac +
            `
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
`,
          ``
        )
      );
    });
}
function axiosLoadMore() {
  axios
    .get(`?q=${inputValue}`, {
      params: {
        key: '29101880-694af7e9974b3c9bb9fbf3052',
        image_typemit: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: per_page,
        page: page,
      },
    })
    .then(function (response) {
      // handle success
      console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function (response) {
      // always executed
      console.log(response.data.totalHits);
      gallery.insertAdjacentHTML(
        'afterbegin',
        response.data.hits.reduce(
          (ac, element) =>
            ac +
            `
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
`,
          ``
        )
      );
      if (response.data.hits.length === 0) {
        Notify.failure(
          "We're sorry, but you've reached the end of search results."
        );
        loadMore.classList.add(`visually-hidden`);
        return;
      }
    });
}
