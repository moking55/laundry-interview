<template>
  <v-app-bar
    :color="scrollY ? '' : 'indigo-darken-2'"
    class="scrollY-enter-active"
    :flat="!scrollY"
    dark
  >
    <v-app-bar-side-icon></v-app-bar-side-icon>
    <v-app-bar-title>
      <img :src="laundry_logo" class="mt-3" height="70" />
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-app-bar-items class="px-3">
      <v-btn
        v-for="link in navbar_links"
        :key="link.name"
        :to="link.link"
        text
        class="ml-1"
        flat
      >
        {{ link.name }}
      </v-btn>
    </v-app-bar-items>
  </v-app-bar>
</template>
<script>
import { ref } from "vue";
import laundry_logo from "@/assets/laundry_logo.png";
export default {
  name: "NavigationHeader",
  setup() {
    const scrollY = ref(false);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollY.value = true;
      } else if (window.scrollY < 100) {
        scrollY.value = false;
      }
    });
    return {
      scrollY
    };
  },
  data() {
    return {
      laundry_logo,
      navbar_links: [
        {
          name: "หน้าแรก",
          link: "/"
        },
        {
          name: "บริการซักผ้า",
          link: "/washing"
        },
      ]
    };
  }
};
</script>
<style scoped>
.scrollY-enter-active {
  transition: background-color 0.2s ease-in-out;
}
</style>
