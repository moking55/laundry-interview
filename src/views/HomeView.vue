<template>
  <v-img class="bg-indigo-darken-2" min-height="350">
    <v-container class="h-100">
      <v-row class="align-center d-flex h-100">
        <v-col cols="12" md="8" class="text-center text-md-start">
          <h1 class="header-title animate__animated animate__fadeInUp">
            ให้การซักผ้าเป็นเรื่องที่<span class="text-amber-lighten-2">ง่ายสำหรับคุณ</span>
          </h1>
          <p class="animate__animated animate__fadeInUp" style="animation-delay: 0.3s">
            บริการเครื่องซักผ้าหยอดเหรียญ ซักง่าย ซักไว แจ้งเตือนผ่านไลน์
          </p>
          <v-btn
            style="animation-delay: 0.3s"
            flat
            size="large"
            class="animate__animated animate__fadeInUp mt-3 rounded-xl"
            :to="{ name: 'washing' }"
          >
            เริ่มใช้งาน
            <template v-slot:append>
              <v-icon size="large"> mdi-menu-right </v-icon>
            </template>
          </v-btn>
        </v-col>
        <v-col cols="12" md="4" class="d-none d-md-block text-md-end text-center">
          <v-img :src="laundry" height="380"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
  <div class="divider-top">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        opacity=".25"
        class="shape-fill"
      ></path>
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity=".5"
        class="shape-fill"
      ></path>
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        class="shape-fill"
      ></path>
    </svg>
  </div>

  <v-container class="mt-8">
    <h2 class="section-header my-6">วิธีใช้ 4 ขั้นตอนง่ายๆ</h2>
    <div class="d-flex justify-space-between align-center">
      <div class="animate__animated animate__fadeInLeft">
        <v-img :src="choose" height="100" class="mb-3"></v-img>
        <div>เลือกเครื่องซักผ้าที่ว่าง</div>
      </div>
      <v-icon size="x-large"> mdi-arrow-right-bold-circle </v-icon>
      <div class="animate__animated animate__fadeInLeft" style="animation-delay: 0.3s">
        <v-img :src="insert_coin" height="100" class="mb-3"></v-img>
        <div>หยอดเหรียญ</div>
      </div>
      <v-icon size="x-large"> mdi-arrow-right-bold-circle </v-icon>
      <div class="animate__animated animate__fadeInLeft" style="animation-delay: 0.6s">
        <v-img :src="washing_machine" height="100" class="mb-3"></v-img>
        <div>รอซักผ้าเสร็จ</div>
      </div>
      <v-icon size="x-large"> mdi-arrow-right-bold-circle </v-icon>
      <div class="animate__animated animate__fadeInLeft" style="animation-delay: 0.9s">
        <v-img :src="notification" height="100" class="mb-3"></v-img>
        <div>รับการแจ้งเตือนผ่านไลน์</div>
      </div>
    </div>

    <h2 class="section-header mt-10 mb-4">ทำไมต้องเลือกเรา?</h2>
    <v-row>
      <v-col cols="12" md="4">
        <v-img :src="preview_pic" class="elevation-3 rounded-lg" cover height="280"></v-img>
      </v-col>
      <v-col class="d-flex align-center justify-space-around" cols="12" md>
        <v-list>
          <v-list-item v-for="(choice, index) in why_choose_us" :key="index">
            <v-list-item-icon class="me-2">
              <v-icon color="success">mdi-check</v-icon>
            </v-list-item-icon>
            <v-list-item-content>{{ choice }}</v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list>
          <v-list-item v-for="(choice, index) in bad_reason" :key="index">
            <v-list-item-icon class="me-2">
              <v-icon color="grey">mdi-close</v-icon>
            </v-list-item-icon>
            <v-list-item-content>{{ choice }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <h2 class="section-header mt-10 mb-4">แผนที่บริการ</h2>

    <!-- <h1 class="text-center mb-3" style="margin-top: 2em">แผนที่บริการ</h1> -->
    <div
      class="elevation-5 rounded-lg"
      style="overflow: hidden; max-width: 100%; width: 100%; height: 400px"
    >
      <div id="my-map-canvas" style="height: 100%; width: 100%; max-width: 100%">
        <iframe
          style="height: 100%; width: 100%; border: 0"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?q=สะดวกซัก+Thanon+Asok+-+Din+Daeng,+Din+Daeng,+Bangkok,+Thailand&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
    </div>
  </v-container>
  <div class="bg-indigo-darken-1 position-relative" style="min-height: 230px">
    <v-container fluid class="py-10">
      <h1 class="text-center">รีวิวจากลูกค้า</h1>
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-for="review in customer_reviews" :key="review">
          <CustomerReviews
            :avatar="review.avatar"
            :name="review.name"
            :rating="review.rating"
            :comment="review.comment"
          />
        </v-slide-group-item>
      </v-slide-group>
    </v-container>
  </div>
</template>

<script>
import laundry from "@/assets/laundry.png";
import insert_coin from "@/assets/steps/insert-coin.png";
import washing_machine from "@/assets/steps/washing-machine.png";
import notification from "@/assets/steps/notification.png";
import tshirt from "@/assets/steps/tshirt.png";
import choose from "@/assets/steps/choose.png";
import preview_pic from "@/assets/preview_pic.jpg";
import CustomerReviews from "@/components/CustomerReviews.vue";

export default {
  name: "HomeView",
  components: {
    CustomerReviews
  },
  data() {
    return {
      laundry,
      insert_coin,
      washing_machine,
      notification,
      tshirt,
      choose,
      preview_pic,
      why_choose_us: [
        "เครื่องซักผ้าที่ใช้งานง่าย",
        "รองรับการซักผ้าทุกชนิด",
        "รองรับการซักผ้าทุกขนาด",
        "ไม่ต้องเสียเวลาในการรอซักผ้า",
        "รับการแจ้งเตือนผ่านไลน์"
      ],
      bad_reason: [
        "มีค่าใช้จ่ายแอบแฝง",
        "พนักงานไม่มีความเป็นมืออาชีพ",
        "เครื่องซักผ้าเก่า",
        "เครื่องซักผ้าไม่สะอาด",
        "บรรยากาศไม่ดี"
      ],
      customer_reviews: [
        {
          avatar: "https://i.pravatar.cc/100?img=68",
          name: "Golf",
          rating: 4,
          comment: "ร้านนี้ดีมากๆ ซักผ้าได้เร็ว และราคาไม่แพงเลย"
        },
        {
          avatar: "https://i.pravatar.cc/100?img=20",
          name: "Mint",
          rating: 4,
          comment: "จอดรถสะดวกมากๆ และร้านก็สะอาดดี"
        },
        {
          avatar: "https://i.pravatar.cc/100?img=17",
          name: "Wichai",
          rating: 5,
          comment: "พนักงานแก้ปัญหาได้ดี"
        },
        {
          avatar: "https://i.pravatar.cc/100?img=9",
          name: "Ploy",
          rating: 5,
          comment: "เครื่องใหม่สะอาดแถมมีโปรโมชั่นตลอด"
        },
        {
          avatar: "https://i.pravatar.cc/100?img=1",
          name: "Milky",
          rating: 4,
          comment: "ทันสมัยมากๆ ไม่ต้องเสียเวลาในการรอซักผ้าเลย"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* use Pattaya font */
@import url("https://fonts.googleapis.com/css2?family=Pattaya&display=swap");

.header-title {
  font-family: "Pattaya", sans-serif;
  letter-spacing: 4px;
  font-weight: 100;
  font-size: 30pt;
}

.section-header {
  border-left: #303f9f 5px solid;
  padding-left: 10px;
}
.divider-top {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.divider-top svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 90px;
}

.divider-top .shape-fill {
  fill: #303f9f;
}

#my-map-canvas .text-marker {
}
.map-generator {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
</style>
