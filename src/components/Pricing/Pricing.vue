<template>
  <div>
    <h2>Choose Pricing Plan</h2>
    <span>
      This new-found knowledge may then be used
      by engineers to create new tools and machines
    </span>
    <PricingCard />
    <PricingCard />
    <PricingCard />
  </div>
</template>

<script>
import PricingCard from '../PricingCard/PricingCard';

export default { components: { PricingCard } };
</script>

<style src="./pricing.css"> </style>
