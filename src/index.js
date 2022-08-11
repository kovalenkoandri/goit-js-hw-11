import defaultExport from './js/style';
import axios from 'axios';
import { axiosSearch } from './js/axiosSearch';
import { axiosLoadMore } from './js/axiosLoadMore';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const searchForm = document.querySelector('#search-form');
export const gallery = document.querySelector('.gallery');
export const loadMore = document.querySelector('.load-more');
loadMore.classList.add(`visually-hidden`);
export let page = 1;
export let inputValue;
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
