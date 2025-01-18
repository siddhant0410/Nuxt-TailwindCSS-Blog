<template>
  <footer class="container mx-auto p-4 flex justify-between border-t-2">
    <!-- Links -->
    <div>
      <ul class="flex gap-2">
        <li><NuxtLink to="/terms">Terms of Service</NuxtLink></li>
        <li><NuxtLink to="/privacy">Privacy Policy</NuxtLink></li>
      </ul>
    </div>
    <!-- Copyright -->
    <p>&copy; {{ new Date().getFullYear() }} Vue Blog. All rights reserved.</p>
  </footer>
</template>

<script setup></script>

<style scoped>
/* Add component-specific styles if needed */
</style>
