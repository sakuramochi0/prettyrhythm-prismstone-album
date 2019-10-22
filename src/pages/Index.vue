<template>
  <Layout>
    <v-text-field
      id="search"
      class="pb-3"
      hide-details
      single-line
      prepend-icon="search"
      placeholder="ハピなる フェミニン RONI キャラストーン…"
      @focus="() => (this.isSearching = true)"
      @blur="() => (this.isSearching = false)"
      @keydown.enter="search"
      :value="$route.query.q || ''"
    ></v-text-field>
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
import domify from 'domify';
import headFragment from '../head-fragment';

export default {
  name: 'PrismStoneList',
  components: {
    PrismStoneCard,
  },
  data() {
    return {
      searchKeyword: this.$route.query.q || '',
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
  methods: {
    insertHead() {
      document.body.appendChild(domify(headFragment));
    },
    search(e) {
      const newSearchKeyword = e.target.value;
      this.searchKeyword = newSearchKeyword;
      this.$router.push(`/?q=${newSearchKeyword}`);
    },
  },
  beforeRouteUpdate(to, _, next) {
    const newSearchKeyword = to.query.q;
    this.searchKeyword = newSearchKeyword;
    document.querySelector('#search').value = newSearchKeyword;
    next();
  },
  mounted() {
    const options = {
      shouldSort: true,
      keys: ['id', 'name', 'series', 'brand', 'category'],
    };
    this.searchIndex = new Fuse(this.prismStones, options);

    // Temporary workaround to avoid the vue-meta problem Gridsome & Vuetify v2
    this.insertHead();
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
