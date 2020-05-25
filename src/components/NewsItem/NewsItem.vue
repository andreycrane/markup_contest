<template>
  <article class="news-item">
    <img :src="imgUrl" />
    <h2 v-text="title" class="item-title" />
    <div v-text="description" class="item-description" />
    <div v-text="views" class="item-views" />
    <div v-text="published" class="item-views" />
  </article>
</template>

<script>
export default {
  props: ["imgUrl", "title", "description", "views", "published"]
};
</script>

<style scoped src="./news-item.css"></style>
