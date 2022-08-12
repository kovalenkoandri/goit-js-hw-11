import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { axiosGetApiService } from './axiosGet';
import { render } from './render';
class LoadMoreApiService {
  loadMoreBtn = document.querySelector('.load-more');
  hide() {
    this.loadMoreBtn.classList.add(`visually-hidden`);
  }
  show() {
    this.loadMoreBtn.classList.remove(`visually-hidden`);
  }
  axiosLoadMore() {
    axiosGetApiService
      .axiosGet()
      .then(function (response) {
        // handle success
        return response;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function (response) {
        // always executed
        render(response);
        if (response.data.hits.length === 0) {
          Notify.failure(
            "We're sorry, but you've reached the end of search results."
          );
          this.hide();
        }
      });
  }
}
export const loadMoreApiService = new LoadMoreApiService();
