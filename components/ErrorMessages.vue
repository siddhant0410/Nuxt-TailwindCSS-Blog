<template>
  <div v-if="message" class="text-center py-10">
    <p
      class="text-lg font-semibold"
      :class="error ? 'text-red-500' : 'text-gray-600'"
    >
      {{ message }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  message: String,
  error: {
    type: Boolean,
    default: false,
  },
});
</script>
