<template>
  <div class="flex justify-center items-center space-x-2">
    <button
      @click="$emit('previous')"
      :disabled="currentPage === 1"
      class="px-4 py-2 bg-gray-200 rounded-l-md hover:bg-blue-100 disabled:opacity-50"
    >
      Previous
    </button>
    <span class="px-4 py-2 text-gray-700">
      Page {{ currentPage }} of {{ totalPages }}
    </span>
    <button
      @click="$emit('next')"
      :disabled="currentPage === totalPages"
      class="px-4 py-2 bg-gray-200 rounded-r-md hover:bg-blue-100 disabled:opacity-50"
    >
      Next
    </button>
  </div>
</template>

<script setup>
defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});
defineEmits(["previous", "next"]);
</script>
