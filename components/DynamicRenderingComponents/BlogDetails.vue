<template>
  <div class="p-6">
    <!-- Title -->
    <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ blog.title }}</h1>

    <!-- Author, Date, and Reading Time -->
    <div class="flex items-center text-sm text-gray-500 mb-6 space-x-4">
      <p>
        Written by
        <span class="font-medium text-gray-800">{{ blog.author }}</span>
      </p>
      <p>• {{ blog.date }}</p>
      <p>• {{ blog.readingTime }}</p>
    </div>

    <!-- Tags -->
    <Tags :tags="blog.tags" />

    <!-- Content -->
    <p class="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
      {{ blog.content }}
    </p>
  </div>
</template>

<script setup>
import Tags from "@/components/DynamicRenderingComponents/Tags.vue";
defineProps({
  blog: {
    type: Object,
    required: true,
  },
});
</script>
