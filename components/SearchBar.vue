<template>
  <div class="mb-6">
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Search blogs by title or content..."
      class="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
});
defineEmits(["update:modelValue"]);
</script>
