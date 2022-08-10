import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { axiosGet } from './axiosGet';
import { render } from './render';
import { loadMore } from './index';
export function axiosLoadMore() {
  axiosGet()
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
        loadMore.classList.add(`visually-hidden`);
      }
    });
}
