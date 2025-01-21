<template>
  <header
    class="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-lg sticky top-0 z-50"
  >
    <nav
      class="container mx-auto px-4 py-4 flex items-center justify-between text-white"
    >
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <NuxtLink
          to="/"
          class="text-3xl font-extrabold tracking-tight hover:text-gray-200 transition duration-200"
        >
          Siddhant's Blog
        </NuxtLink>
        <p class="text-sm italic font-light">Open Minds, Open Source 🌐</p>
      </div>

      <!-- Navigation Links -->
      <ul class="flex space-x-8">
        <li>
          <NuxtLink
            to="/"
            class="relative group text-lg font-semibold hover:text-gray-200 transition duration-200"
          >
            Home
            <span
              class="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"
            ></span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact-form"
            class="relative group text-lg font-semibold hover:text-gray-200 transition duration-200"
          >
            Contact Us
            <span
              class="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"
            ></span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup></script>
