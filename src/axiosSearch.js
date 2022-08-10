import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { axiosGet } from './axiosGet';
import { render } from './render';
import { loadMore } from './index';
export function axiosSearch(response) {
  axiosGet()
    .then(function (response) {
      // handle success
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
      render(response);
    });
}
