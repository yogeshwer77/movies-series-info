import {SEARCH_MOVIES, FEATCH_MOVIES, FEATCH_MOVIE, LOADING} from '../actions/action'

const inistialState = {
    text : '',
    movies: [],
    loading : false,
    movie : []
}

export default function(state =inistialState, action){
    switch(action.type){
        case SEARCH_MOVIES : return {
            ...state,
            text: action.payload,
            loading : false
        }
        case FEATCH_MOVIES : return {
            ...state,
            movies: action.payload,
            loading : false
        }
        case FEATCH_MOVIE : return {
            ...state,
            movie: action.payload,
            loading : false
        } 
        case LOADING : return {
            ...state,
            loading: true   
        }
        default :return state
    }
}