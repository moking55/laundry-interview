<template>
  <div>
    Hello world
  </div>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>
.section-header {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.section-header svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
}

.section-header .shape-fill {
    fill: #FFFFFF;
}
</style>