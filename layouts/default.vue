<template>
  <div>
    <!-- Header Component -->
    <Header />

    <!-- Page Content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
/* Add layout-specific styles if needed */
</style>
