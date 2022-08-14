import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { axiosGetApiService } from './axiosGet';
import { render } from './render';
import { loadMoreApiService } from './axiosLoadMore';
export function axiosSearch() {
  axiosGetApiService
    .axiosGet()
    .then(function (response) {
      if (response.data.totalHits === 0) {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        loadMoreApiService.hide();
      } else {
        Notify.info(`Hooray! We found ${response.data.totalHits} images.`);
        loadMoreApiService.hide();
        setTimeout(() => loadMoreApiService.show(), 1000);
      }
      axiosGetApiService.resetInnerHTML();
      render(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
