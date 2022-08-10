import axios from 'axios';
import { inputValue } from './index';
import { per_page } from './index';
import { page } from './index';
export const axiosGet = () =>
  axios.get(`?q=${inputValue}`, {
    params: {
      key: '29101880-694af7e9974b3c9bb9fbf3052',
      image_typemit: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: per_page,
      page: page,
    },
  });
