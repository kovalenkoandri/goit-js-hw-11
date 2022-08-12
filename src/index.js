import defaultExport from './js/style';
import { axiosGetApiService } from './js/axiosGet';
import { axiosSearch } from './js/axiosSearch';
import { axiosLoadMore } from './js/axiosLoadMore';
const searchForm = document.querySelector('#search-form');
export const loadMore = document.querySelector('.load-more');
loadMore.classList.add(`visually-hidden`);
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  axiosGetApiService.resetPage();
  axiosGetApiService.resetInnerHTML();
  axiosGetApiService.value = event.currentTarget.elements.searchQuery.value;
  axiosSearch();
});
loadMore.addEventListener('click', event => {
  axiosGetApiService.incrementPage();
  axiosLoadMore();
});
