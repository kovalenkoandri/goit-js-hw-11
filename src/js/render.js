import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { gallery } from '../index';
let lightbox = new SimpleLightbox('a', {
  /* options */
  captionsData: 'alt',
});
export const render = response => {
  gallery.insertAdjacentHTML(
    'afterbegin',
    response.data.hits.reduce(
      (ac, element) =>
        ac +
        `
<a href="${element.largeImageURL}">
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
</a>
`,
      ``
    )
  );
  lightbox.refresh();
}