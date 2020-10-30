<template>
    <div class="search">
      <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">MOVIE APP</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search" type='text' v-model='query' @keyup='getResult(query)'></b-form-input>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
        <div v-if="query != ''">
<div class="card-group" >
  <div class="card" v-for='result in results' :key='result.id'  style="flex: 1 0 25%; border:0px; margin:2%">
    <img class="card-img" v-bind:src="'http://image.tmdb.org/t/p/w500/' +  result.poster_path"  alt="Card image" >
    <div class="card-body" >
      <h2 class="card-title" style="font-weight:bold">{{result.original_title}}</h2>
      <p class="card-text">{{result.overview}}</p>
      <p class="card-text"><small class="text-muted">{{result.release_date}}</small></p>
    </div>
  </div>
</div>
</div>
<div v-else-if="query == ''"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Search',
    data () {
 return {
  query: '',
  results: ''
}
 },
 methods: {
  getResult(query) {
   axios.get('https://api.themoviedb.org/3/search/movie?api_key=2e2bd08b33eb27bb92c9c5c310eddc92&language=en-US&query=' + query+'&page=1').then(response => { this.results = response.data.results })
     console.log(this.results)
  }
 }
}
</script>

<style>

</style>