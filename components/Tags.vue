<template>
  <div class="mb-6">
    <h3 class="text-lg font-medium text-gray-700 mb-2">Tags:</h3>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm font-medium"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  tags: {
    type: Array,
    required: true,
  },
});
</script>
