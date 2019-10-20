<template>
  <Layout>
    <v-row>
      <span class="ma-5 ml-10">🔍</span>
      <v-text-field
        hide-details
        single-line
        placeholder="フェミニン"
        v-model="searchKeyword"
      ></v-text-field>
    </v-row>
    <PrismStoneCard
      class="prism-stone-card"
      v-for="prismStone in $page.prismStones.edges"
      v-if="prismStone.node.name.includes(searchKeyword)"
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
import PrismStoneCard from '~/components/PrismStoneCard.vue';

export default {
  name: 'PrismStoneList',
  components: {
    PrismStoneCard,
  },
  data() {
    return {
      searchKeyword: '',
    };
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
