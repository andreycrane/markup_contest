<template>
  <div>
    <h2>News feed</h2>
    <span>
      Watching a movie on your smartphone can be pretty great, but who has the
      arm
    </span>
    <NewsItem />
    <NewsItem />
    <NewsItem />
    <NewsItem />
  </div>
</template>

<script>
import NewsItem from "../NewsItem/NewsItem";

export default { components: { NewsItem } };
</script>

<style src="./news-feed.css"></style>
