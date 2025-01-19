<!-- <template>
  <div class="space-y-6">
    <div
      v-for="n in 3"
      :key="n"
      class="p-4 bg-gray-200 rounded-lg animate-pulse"
    >
      <div class="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div class="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  </div>
</template>

<script setup></script> -->
<template>
  <div class="space-y-4">
    <div
      v-for="n in 3"
      :key="n"
      class="animate-pulse bg-gray-200 h-12 w-full rounded-md"
    ></div>
  </div>
</template>

<script setup></script>
