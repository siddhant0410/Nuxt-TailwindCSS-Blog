<template>
  <div class="max-w-4xl mx-auto p-4">
    <div v-if="pending" class="text-center py-10">
      <p class="text-lg font-semibold text-gray-700">Loading blog details...</p>
    </div>

    <div v-else-if="error" class="text-center py-10">
      <p class="text-lg font-semibold text-red-500">
        Failed to load blog details. Please try again later.
      </p>
    </div>

    <div v-else-if="blog" class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="p-6">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ blog.title }}</h1>
        <p class="text-gray-700 leading-relaxed mb-6">{{ blog.content }}</p>
        <p class="text-sm text-gray-500">
          Written by
          <span class="font-medium text-gray-800">{{ blog.author }}</span> on
          {{ blog.date }}
        </p>
      </div>
    </div>

    <div v-else class="text-center py-10">
      <p class="text-lg text-gray-600">Blog not found.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useFetch } from "#app";

// Get route parameters
const route = useRoute();
const { slug } = route.params;
const id = route.state?.id; // Optional: Get id from state if passed

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

// Find the blog using slug or id
const blog = blogs.value?.find(
  (b) => b.slug === slug || (id && b.id === Number(id))
);
</script>

<style scoped></style>
