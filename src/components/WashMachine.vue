<template>
  <Vue3Lottie
    style="position: relative; top: -100px;margin-bottom: -180px;"
    :animationLink="(isWashing) ? animationState[1] : animationState[0]"
    width="360px"
    :autoPlay="isWashing"
    ref="washMachine"
  />
</template>
<script>
import { Vue3Lottie } from "vue3-lottie";
export default {
  name: "WashMachine",
  components: {
    Vue3Lottie
  },
  props: {
    isWashing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
        animationState: [
            "https://lottie.host/a0715190-4fd9-4487-92b7-ef92e2e3cbcd/MdCMPgmsJe.json", // inactive
            "https://lottie.host/38287101-8a75-44ad-adef-b489fc341e52/O9dltgLTvQ.json", // washing
        ]
    }
  },
};
</script>
<style></style>
