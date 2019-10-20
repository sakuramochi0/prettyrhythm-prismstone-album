<template>
  <v-card width="540">
    <v-row>
      <v-col>
        <v-img
          width="200"
          class="mx-auto mt-3"
          :src="prismStone.node.img_url"
          loading="lazy"
        />
      </v-col>
      <v-col>
        <v-card-title>{{ prismStone.node.name }}</v-card-title>
        <v-card-subtitle>{{ prismStone.node.series }}</v-card-subtitle>
        <v-card-text class="text--primary">
          {{ prismStone.node.id }} / {{ prismStone.node.brand }} /
          {{ prismStone.node.category }}
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'PrismStoneCard',
  props: {
    prismStone: {
      id: String,
      name: String,
      brand: String,
      category: String,
      series: String,
      img_url: String,
    },
  },
  methods: {
    getTitle(prismStone) {
      return `${prismStone.id} ${prismStone.name} [${prismStone.series}]`;
    },
  },
};
</script>
