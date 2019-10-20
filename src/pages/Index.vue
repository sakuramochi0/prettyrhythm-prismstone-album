<template>
  <Layout>
    <PrismStoneCard
      class="prism-stone-card"
      v-for="(prismStone, i) in $page.prismStones.edges"
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
