<template>
  <v-card class="ma-4 d-flex" min-height="100" width="300">
    <template v-slot:prepend>
      <v-avatar size="64">
        <v-img cover :src="avatar"></v-img>
      </v-avatar>
    </template>
    <div class="ms-n5">
      <v-card-title class="mb-n3">{{ name }}</v-card-title>
      <v-card-text class="ms-n1">
        <v-rating
          length="5"
          :model-value="rating"
          density="compact"
          size="small"
          active-color="yellow-darken-1"
          readonly
        ></v-rating>
        <p class="ms-1">{{ comment }}</p>
      </v-card-text>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    avatar: String,
    name: String,
    rating: Number,
    comment: String
  }
};
</script>
<style></style>
