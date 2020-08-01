<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div
            v-for="flat in flats"
            :key="flat.id"
            class="column is-4"
          >
            <flat-item
              :flat="flat"
              @like="likeFlat(flat.id)"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FlatItem from './components/FlatItem';
import { getFlats, likeFlat } from './api';

export default {
  name: 'App',
  components: { FlatItem },

  data() {
    return {
      flats: [],
    };
  },

  async created() {
    try {
      this.flats = (await getFlats()).map(flat => ({ liked: false, ...flat }));
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    async likeFlat(flatId) {
      try {
        const result = await likeFlat(flatId);
        if (result) {
          const likedFlat = this.flats.find(flat => flat.id === flatId);
          likedFlat.liked = !likedFlat.liked;
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
};
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
