<template>
  <div :class="{ feature: true, 'feature--new': isNew }">
    <div class="feature-img" :style="imageStyle" />
    <span v-text="title" class="feature-title" />
    <span v-text="description" class="feature-description" />
    <a v-if="isNew" class="new-button">
      <span class="arrow">
        &rarr;
      </span>
    </a>
    <span v-if="isNew" class="new-badge">New</span>
  </div>
</template>

<script>
export default {
  props: ["imgUrl", "title", "description", "isNew", "position"],
  computed: {
    imageStyle() {
      return {
        backgroundImage: `url(${this.imgUrl})`,
        backgroundPosition: this.position
      };
    }
  }
};
</script>

<style scoped src="./feature.css"></style>
