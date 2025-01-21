<template>
  <div class="space-y-6" id="scroll-to-blogs">
    <div v-for="blog in blogs" :key="blog.slug">
      <BlogCard :blog="blog" />
    </div>
  </div>
</template>

<script setup>
import BlogCard from "~/components/HomePageComponents/BlogCard.vue";
defineProps({
  blogs: {
    type: Array,
    required: true,
  },
});
</script>
