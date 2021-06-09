import axios from 'axios';

const urlMovies = 'https://api.themoviedb.org/3/search/movie';
const apiKey = 'c9ce16d5e7d7b65151b3d21cb94f543d';

export default {
    getAllMovies: (limit, callback) => {
        const urlBase = urlMovies + 'movie?apikey=' + apiKey + '&query=' + limit;
        axios.get(urlBase).then((movies) => {
            if (callback) {
                callback(movies);
            }
        })
    }
}