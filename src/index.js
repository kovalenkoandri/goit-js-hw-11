import defaultExport from './js/style';
import { axiosGetApiService } from './js/axiosGet';
import { axiosSearch } from './js/axiosSearch';
import { loadMoreApiService } from './js/axiosLoadMore';
const searchForm = document.querySelector('#search-form');
loadMoreApiService.hide();
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  axiosGetApiService.resetPage();
  axiosGetApiService.resetInnerHTML();
  axiosGetApiService.value = event.currentTarget.elements.searchQuery.value;
  axiosSearch();
});
loadMoreApiService.loadMoreBtn.addEventListener('click', event => {
  axiosGetApiService.incrementPage();
  loadMoreApiService.axiosLoadMore();
});
