<template>
  <div class="max-w-4xl mx-auto p-6 space-y-8">
    <!-- Loading State -->
    <SkeletonLoader v-if="pending" />

    <!-- Error State -->
    <ErrorMessages v-else-if="error" :message="error" :error="true" />

    <!-- Blog Content -->
    <div v-else-if="blog" class="bg-white shadow-md rounded-lg overflow-hidden">
      <!-- Blog Image -->
      <div
        class="h-72 bg-cover bg-center"
        :style="{ backgroundImage: `url(${blog.image})` }"
      ></div>

      <!-- Blog Details -->
      <BlogDetails :blog="blog" />

      <!-- Back Button -->
      <div class="text-center">
        <NuxtLink
          to="/"
          class="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-3 rounded-md shadow-md transition duration-200"
        >
          Back to Blogs
        </NuxtLink>
      </div>
    </div>

    <!-- Blog Not Found -->
    <ErrorMessages v-else message="Blog not found." />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import ErrorMessages from "~/components/GlobalComponents/ErrorMessages.vue";
import SkeletonLoader from "~/components/GlobalComponents/SkeletonLoader.vue";
import BlogDetails from "~/components/DynamicRenderingComponents/BlogDetails.vue";

// Get route parameters
const route = useRoute();
const { slug } = route.params;

// Define state for blog data, loading, and error
const blog = ref(null);
const pending = ref(true);
const error = ref(null);

// Fetch blog data
onMounted(async () => {
  try {
    // Fetch all blogs from the JSON file
    const response = await fetch("/data/blogs.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const blogs = await response.json();

    // Find the blog with the matching slug
    blog.value = blogs.find((b) => b.slug === slug);

    if (!blog.value) {
      throw new Error("Blog not found");
    }
  } catch (err) {
    error.value = err.message;
  } finally {
    pending.value = false; // Always stop the loader
  }
});
</script>
