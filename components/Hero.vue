<template>
  <div class="relative bg-gray-50 h-[60vh] flex items-center justify-start">
    <!-- Video Background -->
    <video
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
      autoplay
      loop
      muted
      playsinline
    >
      <source
        src="https://videos.pexels.com/video-files/11274341/11274341-uhd_2560_1440_25fps.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay -->
    <div
      class="absolute top-0 left-0 bg-black bg-opacity-70 backdrop-blur-md p-8 rounded-br-lg z-10"
    >
      <!-- Text Content -->
      <div class="text-white">
        <h1 class="text-3xl md:text-4xl font-bold leading-tight">
          Welcome to <span class="text-blue-400">My Blog</span>
        </h1>
        <p class="text-md mt-2">
          Discover insights, tutorials, and stories that
          <span class="font-semibold">inspire</span>. Let's explore the world of
          technology together.
        </p>
        <div class="mt-4">
          <NuxtLink
            to="/"
            class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-200"
          >
            Explore Blogs
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
/* Ensure video and content maintain proportions */
html,
body,
#app {
  height: 100%;
  margin: 0;
}
</style>
