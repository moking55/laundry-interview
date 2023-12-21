<template>
  <v-layout>
    <NavigationHeader />
    <v-main>
      <router-view></router-view>
      <FooterBar />
    </v-main>
  </v-layout>
</template>

<script>
import NavigationHeader from "./components/NavigationHeader.vue";
import FooterBar from "./components/FooterBar.vue";
export default {
  components: {
    NavigationHeader,
    FooterBar
  }
};
</script>

<style scoped></style>
