<template>
  <v-card
    :width="onlyStone ? 110 : 540"
    :color="like ? 'pink lighten-5' : null"
    @click="clickCard"
  >
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
      <v-icon
        :large="!onlyStone"
        :style="{
          position: 'absolute',
          right: onlyStone ? '4px' : '8px',
          bottom: onlyStone ? '4px' : '8px',
        }"
        :color="like ? 'pink' : null"
      >
        mdi-heart
      </v-icon>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'PrismStoneCard',
  data() {
    return {
      like: this.initialLike,
    };
  },
  props: {
    onlyStone: Boolean,
    initialLike: Boolean,
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
    clickCard() {
      this.like = !this.like;
      this.$emit('click-card', this.prismStone.id, this.like);
    },
  },
};
</script>
