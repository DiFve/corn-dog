<template>
  <div class="flex flex-col items-center">
    <div class="mt-8 text-[#001AFF]">About us</div>
    <div class="flex flex-row">
      <div class="flex flex-col w-[220px] mt-5">
        <img :src="Jark" class="w-[164px]" />
        <div class="mt-4">
          ศาสตราจารย์กิตติคุณพลตำรวจเอกศาสตราจารยผู้บังคับหมู่รองศาสตราจารย์พลตำรวจโทจอมพลนักเรียนนายเรืออากาศผู้ช่วยศาสตราจารย์รองผู้บัญชาการศาสตราจารย์คลินิกศาสตราจารย์อาคันตุกะดาบตำรวจนักวิจัยหลังปริญญาเอกร้อยตำรวจเอกพลตำรวจตรีนาวาเอกผู้ช่วยสอนสิบตรีผู้ช่วยวิจัย
          Animalia Chordata Mammalia Primates Haplorhini Simiiformes Hominidae
          Homininae Hominini Homo H.sapiens
        </div>
        <div>มาเหนือเมฆ ประดิษฐพงษ์</div>
      </div>

      <div class="flex flex-col w-[220px] mt-5 ml-5 items-center">
        <img :src="Focus" class="w-[164px]" />
        <div class="mt-4">สุรธันย์ บุญผ่อง</div>
      </div>

      <div class="flex flex-col w-[220px] mt-5 ml-5 items-center">
        <img :src="Sans" class="w-[164px]" />
        <div class="mt-4">พชรพล โชคคุณ</div>
      </div>

      <div class="flex flex-col w-[220px] mt-5 ml-5 items-center">
        <img :src="Sine" class="w-[164px]" />
        <div class="mt-4">วัชราภรณ์ ชาแท่น</div>
      </div>

      <div class="flex flex-col w-[220px] mt-5 ml-5 items-center">
        <img :src="Perth" class="w-[164px]" />
        <div class="mt-4">พิชชาภา เวียงทอง</div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Jark from "../assets/Jark.png";
import Focus from "../assets/Focus.jpg";
import Perth from "../assets/Perth.png";
import Sans from "../assets/Sans.png";
import Sine from "../assets/Sine.jpg";

export default {
  components: {
    // Navbar,
  },

  data() {
    return {
      Jark: Jark,
      Focus: Focus,
      Perth: Perth,
      Sans: Sans,
      Sine: Sine,
    };
  },
};
</script>
