<template>
  <section class="pricing">
    <h2 class="header">Choose Pricing Plan</h2>
    <span class="subheader">
      This new-found knowledge may then be used by engineers to create new tools
      and machines
    </span>
    <PricingCard
      v-for="(plan, key) in plans"
      :key="key"
      :title="plan.title"
      :price="plan.price"
      :projects="plan.projects"
      :images="plan.images"
      :support="plan.support"
      :popular="plan.popular"
    />
  </section>
</template>

<script>
import PricingCard from "@/components/PricingCard/PricingCard";

export default {
  data() {
    return {
      plans: [
        {
          title: "BASIC PLAN",
          price: "29",
          projects: "5",
          images: "20",
          support: "9/5"
        },
        {
          title: "TEAM PLAN",
          price: "59",
          projects: "10",
          images: "40",
          support: "12/7",
          popular: true
        },
        {
          title: "BASIC PLAN",
          price: "199",
          projects: "Unlimited",
          images: "Unlimited",
          support: "24/7"
        }
      ]
    };
  },
  components: { PricingCard }
};
</script>

<style scoped src="./pricing.css"></style>
