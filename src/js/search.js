import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';


import { renderGalleryFilms } from './render-gallery-films';


const search = document.querySelector('.btn__form-js');
const input = document.querySelector('.inpt-js');
// let langMovie = document.querySelector('.lng-languageChoose');
let pageNumber = 1;

async function fetchMovies(id, lang) {
  const resp = await fetch(
    `https://api.themoviedb.org/3/find/{external_id}?api_key=ab57a8d74b0df3fdba80a78e42f32d17&language=en&external_source=imdb_id`
  );
  return await resp.json();
 
}

search.addEventListener('click', e => {
  e.preventDefault();

  const trimmedValue = input.value.trim();
  if (trimmedValue !== '') {
    fetchMovies(trimmedValue, pageNumber).then(foundData => {
      if (foundData.hits.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
      } else {
        renderGalleryFilms(foundData.hits);
        Notiflix.Notify.success(
          `Hooray! We found ${foundData.totalHits} movies.`
        );
      }
    });
  }
});
