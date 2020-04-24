<template>
  <section class="rounded-md shadow-md bg-gray-800 p-4 text-center mb-6">
    <p class="font-bold">HEIGHT</p>
    <p class="text-5xl font-bold">
      {{ height }}<small class="text-sm">cm</small>
    </p>
    <input
      type="range"
      min="120"
      max="215"
      v-model="height"
      class="slider w-full h-1 rounded-lg outline-none opacity-75 transition-all duration-300 hover:opacity-100"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      height: 120
    };
  }
};
</script>

<style>
.slider {
  -webkit-appearance: none;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 35px;
  height: 35px;
  border: 0;
  background: url("/slider.png");
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 35px;
  height: 35px;
  border: 0;
  background: url("/slider.png");
  cursor: pointer;
}
</style>
