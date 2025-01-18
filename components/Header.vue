<template>
  <header class="bg-white shadow-sm">
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div>
        <NuxtLink
          to="/"
          class="text-2xl font-bold text-gray-800 hover:text-blue-500 transition duration-200"
        >
          My Blog
        </NuxtLink>
      </div>
      <!-- Navigation Links -->
      <div>
        <ul class="flex gap-6 text-gray-600 font-medium">
          <li>
            <NuxtLink
              to="/"
              class="hover:text-blue-500 transition duration-200"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/blogs"
              class="hover:text-blue-500 transition duration-200"
            >
              Blogs
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact-form"
              class="hover:text-blue-500 transition duration-200"
            >
              Contact Us
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
/* Optional custom styles if needed */
</style>
