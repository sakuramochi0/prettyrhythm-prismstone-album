<template>
  <Layout>
    <div class="prism-stone-list">
      <PrismStoneCard
        v-for="(prismStone, i) in $page.prismStones.edges"
        :prism-stone="prismStone"
        :key="prismStone.id"
      />
    </div>
  </Layout>
</template>

<style scoped lang="scss">
.prism-stone-list {
  /*display: flex;*/
}
.prism-stone-card {
  /*flex: 1;*/
}
</style>

<script>
import PrismStoneCard from "~/components/PrismStoneCard.vue";

export default {
  metaInfo: {
    title: "プリズムストーン一覧"
  },
  name: "PrismStoneList",
  components: {
    PrismStoneCard
  }
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
