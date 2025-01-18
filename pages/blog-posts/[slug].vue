<template>
  <div class="max-w-4xl mx-auto p-6 space-y-8">
    <!-- Loading State -->
    <div v-if="pending" class="text-center py-10">
      <p class="text-lg font-semibold text-gray-700">Loading blog details...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-10">
      <p class="text-lg font-semibold text-red-500">
        Failed to load blog details. Please try again later.
      </p>
    </div>

    <!-- Blog Content -->
    <div v-else-if="blog" class="bg-white shadow-md rounded-lg overflow-hidden">
      <!-- Blog Image -->
      <div
        class="h-72 bg-cover bg-center"
        :style="{ backgroundImage: `url(${blog.image})` }"
      ></div>

      <!-- Blog Details -->
      <div class="p-6">
        <!-- Title -->
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ blog.title }}</h1>

        <!-- Author, Date, and Reading Time -->
        <div class="flex items-center text-sm text-gray-500 mb-6 space-x-4">
          <p>
            Written by
            <span class="font-medium text-gray-800">{{ blog.author }}</span>
          </p>
          <p>• {{ blog.date }}</p>
          <p>• {{ blog.readingTime }}</p>
        </div>

        <!-- Tags -->
        <div class="mb-6">
          <h3 class="text-lg font-medium text-gray-700 mb-2">Tags:</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in blog.tags"
              :key="tag"
              class="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm font-medium"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Content -->
        <p class="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
          {{ blog.content }}
        </p>

        <!-- Likes and Comments -->
        <div class="flex items-center justify-between text-gray-600 text-sm">
          <p>
            <span class="font-bold text-gray-900">{{ blog.likes }}</span> Likes
          </p>
          <p>
            <span class="font-bold text-gray-900">{{ blog.comments }}</span
            >{" "} Comments
          </p>
        </div>

        <!-- Back Button -->
        <div class="text-center mt-8">
          <NuxtLink
            to="/"
            class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md shadow-md transition duration-200"
          >
            Back to Blogs
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Blog Not Found -->
    <div v-else class="text-center py-10">
      <p class="text-lg text-gray-600">Blog not found.</p>
    </div>
  </div>
</template>

--- ### **Script Setup** ```javascript
<script setup>
import { useRoute } from "vue-router";
import { useFetch } from "#app";

// Get route parameters
const route = useRoute();
const { slug } = route.params;

// Define URI for fetching the blogs
const uri = "/data/blogs.json";

// Fetch the blogs data
const {
  data: blogs,
  pending,
  error,
} = await useFetch(uri, {
  server: false, // Client-side fetching only
});

// Find the blog using slug
const blog = blogs.value?.find((b) => b.slug === slug);
</script>
