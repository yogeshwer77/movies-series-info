import {SEARCH_MOVIES, FEATCH_MOVIES, FEATCH_MOVIE, LOADING} from './action'
import axios from 'axios'
import {APIKey} from '../APIKey'

export const searchMovie = text => dispatch=>{
    dispatch({
        type: SEARCH_MOVIES,
        payload : text
    })
}

export const fetchMovies = text => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(response => dispatch({
        type : FEATCH_MOVIES,
        payload : response.data
        // payload : response.data.Search
    }))
    .catch(error => console.log(error))
}

export const fetchMovie = id => dispatch =>{
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(response => dispatch({
        type : FEATCH_MOVIE,
        payload : response.data
    }))
    .catch(error => console.log(error))
}

export const setLoading = () =>{
    return{
        type : LOADING
    }
}