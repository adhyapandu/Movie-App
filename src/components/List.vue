<template>
    <div class="movielist">
        <div class="movie-wrap" v-if="movie.results">
            <div class="card-group" >
  <div class="card" v-for="item in movie.results" :key="item.id"  style="flex: 1 0 25%; border:0px; margin:2%">
    <img class="card-img" v-bind:src="`https://image.tmdb.org/t/p/w500${item.poster_path}`" :alt="movie.original_title" >
    <div class="card-body" >
      <h2 class="card-title" style="font-weight:bold">{{ item.original_title }}</h2>
      <p class="card-text">{{ item.overview }}</p>
      <p class="card-text"><small class="text-muted">{{item.release_date}}</small></p>
    </div>
  </div>
</div>
        </div>
        <div v-else>Data Kosong</div>
    </div>
</template>

<script>
export default {
    name: 'List',
    computed: {
        movie() {
            return this.$store.state.movies
        }
    },
    created(){
        this.$store.dispatch('fetchMovie')
    }
}
</script>

<style>

</style>