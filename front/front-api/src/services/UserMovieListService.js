import axios from 'axios'

//At least, it will be getMyList/{idUser}
const USER_MOVIE_LIST_REST_API_URL = 'http://localhost:8080/getMyList/1'

class MoviesService {
    getUserMovieList() {
        return axios.get(USER_MOVIE_LIST_REST_API_URL)
    }
}
export default new MoviesService()