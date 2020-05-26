<template>
  <div class="pricing-card">
    <span v-text="title" class="plan-title" />
    <div class="plan-price">
      <span class="plan-currency">$</span>
      <span class="price" v-text="price" />
      <span class="plan-period">/mo</span>
    </div>
    <div class="features-section">
      <span class="feature" v-for="(feature, key) in features" :key="key">
        <span v-text="feature.value" class="feature-value" />
        <span v-text="feature.label" class="feature-title" />
      </span>
    </div>
    <a class="buy-btn">Buy now</a>
  </div>
</template>

<script>
export default {
  props: ["title", "price", "projects", "images", "support", "popular"],
  computed: {
    features() {
      return [
        {
          label: "Project",
          value: this.projects
        },
        {
          label: "images",
          value: this.images
        },
        {
          label: "support",
          value: this.images
        }
      ];
    }
  }
};
</script>

<style scoped src="./pricing-card.css"></style>
