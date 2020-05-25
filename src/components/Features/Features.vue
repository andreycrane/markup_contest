<template>
  <section class="features-section">
    <h2 class="title">Awesome feature</h2>
    <span class="subtitle">Beautiful and Fully Isolated</span>
    <Feature
      :imgUrl="item.img"
      :title="item.title"
      :description="item.description"
      :key="key"
      v-for="(item, key) in items"
    />
  </section>
</template>

<script>
import Feature from "../Feature/Feature";

export default {
  data: function() {
    return {
      items: [
        {
          img: require("@/assets/image/paper_hand.png"),
          title: "a4 paper",
          description:
            "computer manufacturer Lenovo is in hot water this week after pre-installing"
        },
        {
          img: require("@/assets/image/Eyedropper.png"),
          title: "EYEDROPER",
          description:
            "It seems like hundreds of new iPhone apps pop up every week, but which"
        },
        {
          img: require("@/assets/image/Crown.png"),
          title: "CROWN",
          description:
            "Watching a movie on your smartphone can be pretty great, but who has the arm"
        }
      ]
    };
  },
  components: { Feature }
};
</script>

<style scoped src="./features.css"></style>
