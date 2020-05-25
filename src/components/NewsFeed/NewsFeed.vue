<template>
  <section class="news-feed">
    <h2 class="title">News feed</h2>
    <span class="subtitle">
      Watching a movie on your smartphone can be pretty great, but who has the
      arm
    </span>
    <NewsItem
      :key="idx"
      v-for="(item, idx) in items"
      :imgUrl="item.imgUrl"
      :title="item.title"
      :description="item.description"
      :views="item.views"
      :published="item.published"
    />
  </section>
</template>

<script>
import NewsItem from "../NewsItem/NewsItem";

export default {
  data: function() {
    return {
      items: [
        {
          imgUrl: require("@/assets/image/01.png"),
          title: "The number of protons",
          description:
            "Apple Inc has decided to launch the much awaited Apple Watch in the",
          views: 343,
          published: "1 june 2015"
        },
        {
          imgUrl: require("@/assets/image/02.png"),
          title: "Sport Stadium Birdview",
          description:
            "Apple Inc has decided to launch the much awaited Apple Watch in the",
          views: 343,
          published: "1 june 2015"
        },
        {
          imgUrl: require("@/assets/image/03.png"),
          title: "The number of protons",
          description:
            "Startup founders often have a more casual or offbeat attitude in their dress, office space and marketing, as compared to",
          views: 343,
          published: "1 june 2015"
        },
        {
          imgUrl: require("@/assets/image/04.png"),
          title: "The number of protons",
          description:
            "Apple Inc has decided to launch the much awaited Apple Watch in the",
          views: 343,
          published: "1 june 2015"
        },
        {
          imgUrl: require("@/assets/image/05.png"),
          title: "The number of protons",
          description:
            "Apple Inc has decided to launch the much awaited Apple Watch in the upcoming month of April and has already received around five to six million",
          views: 343,
          published: "1 june 2015"
        }
      ]
    };
  },
  components: { NewsItem }
};
</script>

<style scoped src="./news-feed.css"></style>
