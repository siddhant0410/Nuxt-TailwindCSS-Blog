<template>
  <div>
    <!-- Hero Section -->
    <div class="container mx-auto px-4 md:px-20 py-8">
      <Hero />
    </div>

    <!-- Blog Posts Section -->
    <div class="container mx-auto px-4 md:px-20 py-8">
      <h2 class="text-2xl font-bold mb-6 text-center">Recent Posts</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="blog in blogs" :key="blog.slug" class="p-4">
          <BlogCard :blog="blog" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: blogs } = await useFetch("/data/blogs.json", { server: false });
</script>

<style scoped>
/* Optional additional styling */
.container {
  max-width: 1280px; /* Ensures the container doesn't stretch too much */
}
</style>
