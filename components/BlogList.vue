<!-- <template>
  <div class="space-y-6" id="blog-list">
    <div v-for="blog in blogs" :key="blog.slug">
      <BlogCard :blog="blog" />
    </div>
  </div>
</template>

<script setup>
import BlogCard from "@/components/BlogCard.vue";

defineProps({
  blogs: {
    type: Array,
    required: true,
  },
});
</script> -->
<template>
  <div class="space-y-6">
    <div v-for="blog in blogs" :key="blog.slug">
      <BlogCard :blog="blog" />
    </div>
  </div>
</template>

<script setup>
import BlogCard from "@/components/BlogCard.vue";
defineProps({
  blogs: {
    type: Array,
    required: true,
  },
});
</script>
