<template>
  <Layout>
    <v-row>
      <v-col>
        <v-row>
          <span class="ma-5 ml-10">🔍</span>
          <v-text-field
            hide-details
            single-line
            placeholder="フェミニン"
            v-model="searchKeyword"
            @focus="() => (this.isSearching = true)"
            @blur="() => (this.isSearching = false)"
          ></v-text-field>
        </v-row>
      </v-col>
    </v-row>
    <v-banner
      >{{ searchResults.length }} 個のプリズムストーンが見つかったよ！</v-banner
    >
    <v-progress-linear
      :indeterminate="isSearching"
      color="pink"
    ></v-progress-linear>
    <PrismStoneCard
      class="prism-stone-card"
      v-for="prismStone in searchResults"
      :prism-stone="prismStone"
      :key="prismStone.id"
    />
  </Layout>
</template>

<style>
.prism-stone-card {
  display: inline-block;
  margin: 1rem;
}
</style>

<script>
import Fuse from 'fuse.js';
import PrismStoneCard from '~/components/PrismStoneCard.vue';

export default {
  name: 'PrismStoneList',
  components: {
    PrismStoneCard,
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      },
    ],
  },
  data() {
    return {
      searchKeyword: '',
      searchIndex: null,
      isSearching: false,
    };
  },
  computed: {
    prismStones() {
      return this.$page.prismStones.edges.map(edge => edge.node);
    },
    searchResults() {
      if (this.searchKeyword === '' || this.searchIndex === null) {
        return this.prismStones;
      }
      const results = this.searchIndex.search(this.searchKeyword);
      this.isSearching = false;
      return results;
    },
  },
  mounted() {
    const options = {
      shouldSort: true,
      keys: ['id', 'name', 'series', 'brand', 'category'],
    };
    this.searchIndex = new Fuse(this.prismStones, options);
  },
};
</script>

<page-query>
query {
  prismStones: allPrismStones {
    edges {
      node {
        id
        name
        brand
        category
        series
        img_url
      }
    }
  }
}
</page-query>
