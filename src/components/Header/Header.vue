<template>
  <header class="header">
    <div class="menu-section">
      <h1 class="header-title">
        <span class="first-part">Land</span>
        <span class="second-part">ing</span>
      </h1>
      <nav :class="{ navigation: true, 'navigation--show': showNavigation }">
        <span
          class="navigation-close"
          @click="onCloseMobileNavigation"
        >
          &times;
        </span>
        <a class="navigation-item">Products</a>
        <a class="navigation-item">About</a>
        <a class="navigation-item">Blog</a>
        <a class="navigation-item">Contacts</a>
      </nav>
      <div
        class="mobile-button"
        @click="onShowMobileNavigation"
      >
        <span class="mobile-button__dash"></span>
        <span class="mobile-button__dash"></span>
        <span class="mobile-button__dash"></span>
      </div>
    </div>
    <div class="header-section">
      <span class="header-subtitle">Universal Music Group And Bands</span>
      <a class="action-btn">Learn More</a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showNavigation: false
    };
  },
  methods: {
    onShowMobileNavigation() {
      this.showNavigation = true;
    },
    onCloseMobileNavigation() {
      this.showNavigation = false;
    }
  }
};
</script>

<style scoped src="./header.css"></style>
