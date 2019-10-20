<template>
  <v-card width="540">
    <v-row>
      <v-col cols="4">
        <v-img
          width="180"
          class="ma-auto mx-5 my-5"
          :src="prismStone.img_url"
          loading="lazy"
        />
      </v-col>
      <v-col cols="8">
        <v-card-subtitle class="pb-0">{{ prismStone.id }}</v-card-subtitle>
        <v-card-title>{{ prismStone.name }}</v-card-title>
        <v-card-subtitle>{{ prismStone.series }}</v-card-subtitle>
        <v-card-text class="text--primary">
          {{ prismStone.brand }} / {{ prismStone.category }}
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
