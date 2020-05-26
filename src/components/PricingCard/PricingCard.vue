<template>
  <div class="pricing-card">
    <span v-text="title" class="plan-title" />
    <div class="plan-price">
      <span class="plan-currency">$</span>
      <span class="price" v-text="price" />
      <span class="plan-period">/mo</span>
    </div>
    <table class="features-section">
      <tr class="feature" v-for="(feature, key) in features" :key="key">
        <td v-text="feature.value" class="feature-value" />
        <td v-text="feature.label" class="feature-title" />
      </tr>
    </table>
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
          value: this.support
        }
      ];
    }
  }
};
</script>

<style scoped src="./pricing-card.css"></style>
