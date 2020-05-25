<template>
  <div id="app">
    <Header />
    <Features />
    <NewsFeed />
    <Pricing />
    <GetStarted />
    <ContactUs />
    <Map />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Features from "./components/Features/Features.vue";
import NewsFeed from "./components/NewsFeed/NewsFeed.vue";
import Pricing from "./components/Pricing/Pricing.vue";
import GetStarted from "./components/GetStarted/GetStarted.vue";
import ContactUs from "./components/ContactUs/ContactUs.vue";
import Map from "./components/Map/Map.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Features,
    NewsFeed,
    Pricing,
    ContactUs,
    GetStarted,
    Map,
    Footer
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Arvo:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

:root {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
}
</style>
