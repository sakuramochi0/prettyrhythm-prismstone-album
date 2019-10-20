<template>
  <div class="prism-stone-card">
    <!--    <p>id: {{  }}</p>-->
    <!--    <p>name: {{ prismStone.node.name }}</p>-->
    <!--    <p>brand: {{ prismStone.node.brand }}</p>-->
    <!--    <p>category: {{ prismStone.node.category }}</p>-->
    <!--    <p>series: {{ prismStone.node.series }}</p>-->
    <img
      :src="prismStone.node.img_url"
      loading="lazy"
      :title="getTitle(prismStone.node)"
    />
    <p>{{ prismStone.node.brand }}<br />{{ prismStone.node.category }}</p>
  </div>
</template>

<script>
export default {
  name: "PrismStoneCard",
  props: {
    prismStone: {
      id: String,
      name: String,
      brand: String,
      category: String,
      series: String,
      img_url: String
    }
  },
  methods: {
    getTitle(prismStone) {
      return `${prismStone.id} ${prismStone.name} [${prismStone.series}]`;
    }
  }
};
</script>

<style scoped lang="scss">
.prism-stone-card {
  display: inline-block;
  border: 1px black solid;
  padding: 1rem;
  margin: 1rem;
  width: 120px;
  height: 180px;
  img {
    max-width: 120px;
  }
}
</style>
