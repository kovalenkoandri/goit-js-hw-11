import defaultExport from './js/style';
import axios from 'axios';
import { axiosGetApiService } from './js/axiosGet';
import { axiosSearch } from './js/axiosSearch';
import { axiosLoadMore } from './js/axiosLoadMore';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const searchForm = document.querySelector('#search-form');
export const gallery = document.querySelector('.gallery');
export const loadMore = document.querySelector('.load-more');
loadMore.classList.add(`visually-hidden`);
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  axiosGetApiService.resetPage();
  gallery.innerHTML = '';
  axiosGetApiService.value = event.currentTarget.elements.searchQuery.value;
  axiosSearch();
});
loadMore.addEventListener('click', event => {
  axiosGetApiService.incrementPage();
  axiosLoadMore();
});
