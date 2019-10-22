<template>
  <v-card :width="onlyStone ? 110 : 540">
    <v-row>
      <v-col :cols="onlyStone ? null : 4">
        <v-img
          :width="onlyStone ? 90 : 180"
          :height="onlyStone ? 85 : null"
          :class="{ 'ma-auto': true, 'mx-5': !onlyStone, 'my-5': !onlyStone }"
          :src="prismStone.img_url"
          loading="lazy"
        />
      </v-col>
      <v-col cols="8" v-show="!onlyStone">
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
    onlyStone: Boolean,
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
