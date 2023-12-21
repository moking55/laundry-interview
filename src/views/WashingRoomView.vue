<template>
  <div
    class="text-center d-flex align-center justify-center bg-indigo-darken-2"
    style="height: 200px"
  >
    <div class="mb-6">
      <h1 class="mb-2">มาเริ่มกันเลย!</h1>
      <h3>
        1.นำผ้าใส่เครื่อง
        <v-icon> mdi-chevron-right </v-icon>
        2.หยอดเหรียญ <v-icon> mdi-chevron-right </v-icon> 3.กดเริ่มซักผ้า
        <v-icon> mdi-chevron-right </v-icon> 4.รอรับการแจ้งเตือน
      </h3>
    </div>
  </div>
  <v-container>
    <v-row class="mt-5">
      <v-col
        cols="12"
        class="text-center overflow-hidden"
        md="6"
        lg="4"
        v-for="(machine, index) in machines"
        :key="index"
      >
        <v-img
          :src="coin"
          v-if="!machine.isWashing"
          class="coin animate__animated"
          height="70"
          :class="{ animate__fadeOutDown: machine.animation }"
          @click="insertCoin(index)"
        ></v-img>
        <div v-else class="text-red d-flex align-center justify-center" style="height: 70px">
          <h3>เครื่องซักผ้าไม่พร้อมใช้งาน</h3>
        </div>
        <WashMachine :isWashing="machine.isWashing" />
        <div>
          <h4
            :class="{
              'text-red': machine.isWashing,
              'text-orange': machine.insertedCoin > 0 && !machine.isWashing
            }"
          >
            {{ machine.name }}
          </h4>
          <p>เหรียญที่หยอด: {{ machine.insertedCoin }}</p>
          <p>เวลาที่เหลือ: {{ secondsToTime(machine.timeLeft) }} นาที</p>
          <v-btn
            color="primary"
            v-if="!machine.isWashing"
            :disabled="machine.insertedCoin <= 0"
            @click="startWashing(index)"
          >
            เริ่มซักผ้า
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import WashMachine from "@/components/WashMachine.vue";
import coin from "@/assets/coin.png";

export default {
  name: "WashingRoomView",
  components: {
    WashMachine
  },
  data() {
    return {
      coin,
      machines: [
        {
          name: "เครื่องซักผ้า 1",
          insertedCoin: 0,
          timeLeft: 0,
          timer: null,
          animation: false,
          isWashing: false
        },
        {
          name: "เครื่องซักผ้า 2",
          insertedCoin: 0,
          timeLeft: 0,
          timer: null,
          animation: false,
          isWashing: false
        },
        {
          name: "เครื่องซักผ้า 3",
          insertedCoin: 0,
          timeLeft: 0,
          timer: null,
          animation: false,
          isWashing: false
        }
      ]
    };
  },
  methods: {
    // insert coin per machine
    insertCoin(id) {
      this.machines[id].insertedCoin += 1;
      this.machines[id].timeLeft += 60; // 1 coin = 1 minuteD
      this.machines[id].animation = true;
      let state = setInterval(() => {
        this.machines[id].animation = false;
        clearInterval(state);
      }, 1000);
    },
    // start washing
    startWashing(id) {
      this.machines[id].isWashing = true;
      this.machines[id].timer = setInterval(() => {
        this.machines[id].timeLeft -= 1;
        console.log(this.machines[id].timeLeft);
        if (this.machines[id].timeLeft <= 0) {
          this.machines[id].isWashing = false;
          this.machines[id].insertedCoin = 0;
          clearInterval(this.machines[id].timer);
        }
      }, 1000);
    },
    secondsToTime(second) {
      const h = Math.floor(second / 3600)
          .toString()
          .padStart(2, "0"),
        m = Math.floor((second % 3600) / 60)
          .toString()
          .padStart(2, "0"),
        s = Math.floor(second % 60)
          .toString()
          .padStart(2, "0");

      return h + ":" + m + ":" + s;
      //return `${h}:${m}:${s}`;
    }
  }
};
</script>
<style scoped>
.coin {
  position: relative;
  z-index: 19;
  cursor: pointer;
}
</style>
