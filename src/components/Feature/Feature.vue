<template>
  <div class="feature">
    <img :src="imgUrl" class="feature-img" />
    <span v-text="title" class="feature-title" />
    <span v-text="description" class="feature-description" />
  </div>
</template>

<script>
export default {
  props: ["imgUrl", "title", "description"]
};
</script>

<style src="./feature.css"></style>
