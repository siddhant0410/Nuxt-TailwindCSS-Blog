<template>
  <div class="bg-gray-50 py-16">
    <div
      class="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:gap-12"
    >
      <!-- Left Content -->
      <div class="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Welcome to <span class="text-blue-500">My Blog</span>
        </h1>
        <p class="text-lg text-gray-600 mt-4">
          Discover insights, tutorials, and stories that
          <span class="font-semibold text-gray-700">inspire</span>. Let's
          explore the world of technology together.
        </p>
        <div class="mt-6">
          <NuxtLink
            to="/blog"
            class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-200"
          >
            Explore Blogs
          </NuxtLink>
        </div>
      </div>

      <!-- Right Content: Video -->
      <div class="lg:w-1/2 flex justify-center">
        <div class="relative lg:w-3/4 rounded-lg shadow-lg overflow-hidden">
          <video
            class="w-full h-full rounded-lg transform hover:scale-105 transition duration-300"
            autoplay
            loop
            muted
            playsinline
          >
            <source
              src="https://videos.pexels.com/video-files/4354035/4354035-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
