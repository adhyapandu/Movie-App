import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        movies: {}
    },
    mutations: {
        addMovies(state, movie){
            state.movies = movie
        }
    },
    actions:{
        fetchMovie({ commit }){
            axios('https://api.themoviedb.org/3/movie/now_playing?api_key=2e2bd08b33eb27bb92c9c5c310eddc92')
                .then(res => {
                    commit('addMovies', res.data)
                })
                .catch(err => console.log(err))
        }
    }
})

export default store;