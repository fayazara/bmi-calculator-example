<template>
  <div class="container mx-auto pt-6 px-4 max-w-lg">
    <p class="text-4xl font-bold mb-4">Your Result</p>
    <div class="rounded bg-gray-700 p-6 text-center">
      <p class="text-green-400 font-bold uppercase">{{ result.label }}</p>
      <p class="text-6xl font-bold text">{{ bmi || "27" }}</p>
      <p class="text-gray-400 font-bold">{{ result.label }} BMI Range</p>
      <p>BMI {{ result.range }}</p>
      <p class="my-8 text-xl">{{ result.message }}</p>
      <button @click="share" class="my-4 bg-gray-600 p-4 rounded w-full">
        SHARE
      </button>
    </div>
    <nuxt-link
      to="/"
      class="bg-superpink font-bold uppercase p-4 fixed text-center w-full bottom-0 left-0"
    >
      RE Calculate BMI
    </nuxt-link>
  </div>
</template>

<script>
export default {
  methods: {
    share() {
      if (navigator.share) {
        navigator
          .share({
            title: `My BMI is ${this.bmi}`,
            text: "Checkout out how to code a BMI calculator",
            url:
              "https://dev.to/fayazara/let-s-code-a-dribble-design-with-vue-js-tailwindcss-working-demo-part-1-of-2-3h9"
          })
          .then(() => console.log("Successful share"))
          .catch(error => console.log("Error sharing", error));
      } else {
        alert("Sharing is not allowed in this device");
      }
    }
  },
  data() {
    return {
      bmi: this.$route.query.bmi,
      type: {
        underweight: {
          label: "Underweight",
          range: "<18.5",
          message: "You seem to be underweight for your height"
        },
        normal: {
          label: "Normal",
          range: "18.5 - 24.9",
          message: "You have a normal body weight. Good Job!"
        },
        overweight: {
          label: "Overweight",
          range: "25.0 - 29.9",
          message: "You are gaining weight!"
        },
        obese1: {
          label: "Obese 1",
          range: "30.0 - 34.9",
          message: "Time to hit the gym"
        },
        obese2: {
          label: "Obese 2",
          range: "35.0 - 39.9",
          message: "This is alarming state."
        },
        obese3: {
          label: "Obese 3",
          range: ">40",
          message: "This is a very alarming state."
        }
      }
    };
  },
  computed: {
    result() {
      if (this.bmi >= 40) {
        return this.type.obese3;
      }

      if (this.bmi <= 39.99 && this.bmi >= 35) {
        return this.type.obese2;
      }

      if (this.bmi <= 34.99 && this.bmi >= 30) {
        return this.type.obese1;
      }

      if (this.bmi <= 29.99 && this.bmi >= 25) {
        return this.type.overweight;
      }

      if (this.bmi <= 18.5 && this.bmi >= 24.99) {
        return this.type.normal;
      }

      if (this.bmi < 18.5) {
        return this.type.underweight;
      }
      return this.type.normal;
    }
  }
};
</script>
