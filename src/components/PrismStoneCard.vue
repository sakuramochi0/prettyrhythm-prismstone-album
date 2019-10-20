<template>
  <v-card width="540">
    <v-row>
      <v-col cols="4">
        <v-img
          width="180"
          class="ma-auto mx-5 my-5"
          :src="prismStone.node.img_url"
          loading="lazy"
        />
      </v-col>
      <v-col cols="8">
        <v-card-subtitle class="pb-0">{{ prismStone.node.id }}</v-card-subtitle>
        <v-card-title>{{ prismStone.node.name }}</v-card-title>
        <v-card-subtitle>{{ prismStone.node.series }}</v-card-subtitle>
        <v-card-text class="text--primary">
          {{ prismStone.node.brand }} / {{ prismStone.node.category }}
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
};
</script>
