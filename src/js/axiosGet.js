import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
class AxiosGetApiService {
  gallery = document.querySelector('.gallery');
  constructor() {
    this.page = 1;
    this.inputValue = '';
  }
  async axiosGet() {
    return await axios.get(`?q=${this.inputValue}`, {
      params: {
        key: '29101880-694af7e9974b3c9bb9fbf3052',
        image_typemit: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
        page: this.page,
      },
    });
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  resetInnerHTML() {
    this.gallery.innerHTML = '';
  }

  get value() {
    return this.inputValue;
  }

  set value(newValue) {
    this.inputValue = newValue;
  }
}
export const axiosGetApiService = new AxiosGetApiService();
