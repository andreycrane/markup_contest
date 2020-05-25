<template>
  <article class="news-item">
    <img :src="imgUrl" class="item-img"/>
    <div class="item-preview">
      <h2 v-text="title" class="preview-title" />
      <div v-text="description" class="preview-description" />
    </div>
    <div class="item-info">
      <div v-text="published" class="info-published" />
      <div v-text="views" class="info-views" />
    </div>
  </article>
</template>

<script>
export default {
  props: ["imgUrl", "title", "description", "views", "published"]
};
</script>

<style scoped src="./news-item.css"></style>
