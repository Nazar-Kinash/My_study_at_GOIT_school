import axios from 'axios';

export default (searchQuery, page) => {
  const myKey = '15737125-9731c193a08476753ed150b4b';

  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then((response) => response.data.hits);
};
