<template>
  <section class="grid grid-cols-2 gap-2 mb-6 text-center">
    <div class="rounded-md shadow-md bg-gray-800 p-4 w-full">
      <p class="uppercase font-bold">Weight</p>
      <p class="text-5xl font-bold">{{ weight }}</p>
      <div class="flex items-center justify-around">
        <input min="0" max="200" type="hidden" v-model="weight" />
        <button
          @click="updateWeight(-1)"
          v-longclick="() => updateWeight(-1)"
          class="rounded-full bg-gray-900 h-12 w-12 text-2xl"
        >
          -
        </button>
        <button
          @click="updateWeight(1)"
          v-longclick="() => updateWeight(1)"
          class="rounded-full bg-gray-900 h-12 w-12 text-2xl"
        >
          +
        </button>
      </div>
    </div>
    <div class="rounded-md shadow-md bg-gray-800 p-4 w-full">
      <p class="uppercase font-bold">Age</p>
      <p class="text-5xl font-bold">{{ age }}</p>
      <div class="flex items-center justify-around">
        <input min="10" max="100" type="hidden" v-model="age" />
        <button
          @click="updateAge(-1)"
          v-longclick="() => updateAge(-1)"
          class="rounded-full bg-gray-900 h-12 w-12 text-2xl"
        >
          -
        </button>
        <button
          @click="updateAge(1)"
          v-longclick="() => updateAge(1)"
          class="rounded-full bg-gray-900 h-12 w-12 text-2xl"
        >
          +
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      age: 10,
      weight: 30
    };
  },
  methods: {
    updateAge(val) {
      this.age += val;
      this.$emit("ageweightListener", { age: this.age, weight: this.weight });
    },
    updateWeight(val) {
      this.weight += val;
      this.$emit("ageweightListener", { age: this.age, weight: this.weight });
    }
  }
};
</script>

<style></style>
