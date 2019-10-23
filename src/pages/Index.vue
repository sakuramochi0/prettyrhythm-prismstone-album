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
    <v-btn
      color="pink lighten-2"
      dark
      fab
      large
      fixed
      right
      bottom
      @click="() => (this.onlyLiked = !this.onlyLiked)"
      class="only-liked-button"
    >
      <v-icon>{{ onlyLiked ? 'mdi-heart-outline' : ' mdi-heart' }}</v-icon>
    </v-btn>
    <v-btn
      color="pink lighten-2"
      dark
      fab
      large
      fixed
      right
      bottom
      @click="() => (this.onlyStone = !this.onlyStone)"
    >
      <v-icon>{{ onlyStone ? 'view_agenda' : 'view_module' }}</v-icon>
    </v-btn>
    <v-container d-flex flex-wrap justify-center px-0 mb-12>
      <PrismStoneCard
        class="prism-stone-card mx-2 mb-3"
        v-for="prismStone in searchResults"
        v-if="!onlyLiked || likedIds.has(prismStone.id)"
        :only-stone="onlyStone"
        :prism-stone="prismStone"
        :key="prismStone.id"
        @click-card="clickCard"
        :initial-like="likedIds.has(prismStone.id)"
      />
    </v-container>
  </Layout>
</template>

<style scoped>
.only-liked-button {
  margin-right: 80px;
}
</style>

<script>
import Fuse from 'fuse.js';
import PrismStoneCard from '~/components/PrismStoneCard.vue';
import domify from 'domify';
import headFragment from '../../head-fragment';

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
      onlyStone: false,
      onlyLiked: false,
      likedIds:
        new Set(JSON.parse(localStorage.getItem('likedIds'))) || new Set(),
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
    updateQuery() {
      this.$router.push(`/?q=${this.searchKeyword}`);
    },
    search(e) {
      this.searchKeyword = e.target.value;
      this.updateQuery();
    },
    clickCard(id, like) {
      if (like) {
        this.likedIds.add(id);
      } else {
        this.likedIds.delete(id);
      }
      localStorage.setItem('likedIds', JSON.stringify([...this.likedIds]));
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
