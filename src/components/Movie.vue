<template>
  <div class="movieApp">
    <h1 style="margin-top:2%">Now Playing</h1>
    <List />
  </div>
</template>

<script>
    import List from './List.vue';
    export default {
        name: 'Movie',
        components: {
            List
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
