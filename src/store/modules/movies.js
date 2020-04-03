import axios from "axios";
const state = {
    title: "Szybkie i wkurwiajace",
    movies: [],
    trailer: null
}
const getters = {
    GET_MOVIE: state => {
        console.log(state.movies);
        return state.movies
    },
    GET_TRAILER: state => {
        return state.trailer
    }
}
const mutations = {
    SET_MOVIES: (state, payload) => {
        for(let i = 0; i < payload.payload.length;i++){
          payload.payload[i].readMore = true;
        }
        console.log(payload);
        state.movies.push(payload);
    },
    SET_TRAILER: (state, payload) => {
        state.trailer = payload
    }
}
const actions = {
    LOAD_MOVIES: async function (context, payload) {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0ad4eace6056a418472693e21809c21d&page=${payload}`).then((response) => {
            context.commit('SET_MOVIES', { payload: response.data.results })
            return true;
        }, (err) => {
            console.log(err)
            return false;
        })
    },
    LOAD_TRAILER: async function (context, payload) {
        axios.get(`https://api.themoviedb.org/3/movie/${payload}/videos?api_key=0ad4eace6056a418472693e21809c21d`).then((response) => {
            context.commit('SET_TRAILER', { payload: response.data.results })
            return true;
        }, (err) => {
            console.log(err)
            return false;
        })
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}