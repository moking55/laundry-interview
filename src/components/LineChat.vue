<template>
  <div style="z-index:25" :class="{ 'chat-widget': true, 'chat-widget-hidden': isChatHidden }">
    <div class="chat-header">
      <span>
        <v-icon>mdi-chat</v-icon>
        LINE</span
      >
    </div>
    <div class="chat-body bg-blue-lighten-3">
      <div style="max-width: 260px" class="animate__animated animate__fadeInLeft d-flex justify-start my-1" v-for="(message, index) in chatData" :key="index">
        <p class="chat-message bg-green text-white px-3 py-2 rounded-lg">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isChatHidden: {
      type: Boolean,
      default: true
    },
    chatData: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.chat-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 340px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease-out;
}

.chat-widget-hidden {
  transform: translateX(100%);
}

.chat-header {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

.chat-body {
  max-height: 400px;
  overflow-y: auto;
  padding: 10px;
}
</style>
