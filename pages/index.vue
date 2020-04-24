<template>
  <div class="container mx-auto pt-6 px-4 max-w-lg">
    <gender />
    <height />
    <ageweight />
    <button class="bg-pink-600 font-bold uppercase p-4 fixed w-full bottom-0 left-0">
      Calculate your Bmi
    </button>
  </div>
</template>

<script>
import gender from "~/components/home/gender";
import height from "~/components/home/height";
import ageweight from "~/components/home/age-weight";
export default {
  components: {
    gender,
    height,
    ageweight
  }
};
</script>
