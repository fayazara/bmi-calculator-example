<template>
  <div class="container mx-auto pt-6 px-4 max-w-lg">
    <gender @genderListener="saveGender" />
    <height @heightListener="saveHeight" />
    <ageweight @ageweightListener="saveAgeWeight" />
    <button
      @click="calculateBMI"
      class="bg-superpink font-bold uppercase p-4 fixed w-full bottom-0 left-0"
    >
      Calculate your Bmi
    </button>
  </div>
</template>

<script>
import gender from "~/components/home/gender";
import height from "~/components/home/height";
import ageweight from "~/components/home/age-weight";
export default {
  data() {
    return {
      gender: "male",
      height: 120,
      age: 10,
      weight: 30
    };
  },
  methods: {
    saveGender(value) {
      this.gender = value;
    },
    saveHeight(value) {
      this.height = value;
    },
    saveAgeWeight(val) {
      this.age = val.age;
      this.weight = val.weight;
    },
    calculateBMI() {
      var met = this.height / 100;
      const bmi = this.weight / (met * met);
      this.$router.push({
        query: { bmi: bmi.toFixed(2) },
        path: "/result"
      });
    }
  },
  components: {
    gender,
    height,
    ageweight
  }
};
</script>
