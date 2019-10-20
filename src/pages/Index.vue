<template>
  <Layout>
    <v-form class="mb-3">
      <v-text-field
        hide-details
        single-line
        prepend-icon="search"
        placeholder="フェミニン"
        v-model="searchKeyword"
        @focus="() => (this.isSearching = true)"
        @blur="() => (this.isSearching = false)"
      ></v-text-field>
    </v-form>
    <v-spacer />
    <v-banner
      >{{ searchResults.length }} 個のプリズムストーンが見つかったよ！</v-banner
    >
    <v-progress-linear
      :indeterminate="isSearching"
      color="pink"
    ></v-progress-linear>
    <v-container d-flex flex-wrap justify-center px-0>
      <PrismStoneCard
        class="prism-stone-card mx-2 mb-3"
        v-for="prismStone in searchResults"
        :prism-stone="prismStone"
        :key="prismStone.id"
      />
    </v-container>
  </Layout>
</template>

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
