<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-4"><flat-item /></div>
          <div class="column is-4"><flat-item /></div>
          <div class="column is-4"><flat-item /></div>
          <div class="column is-4"><flat-item /></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FlatItem from './components/FlatItem';

export default {
  name: 'App',
  components: { FlatItem },
}
</script>

<style lang="scss">
@charset "utf-8";
@import "~bulma/bulma";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
