<template>
  <div>
    <div class="container mx-auto px-4 md:px-20 py-16">
      <Hero />
    </div>

    <!-- Blogs Section -->
    <div ref="blogsSection" class="container mx-auto px-4 md:px-20 py-16">
      <h2 class="text-3xl font-bold mb-6 text-center">Explore Blogs</h2>

      <!-- Search Bar -->
      <div class="mb-6">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search blogs by title or content..."
          class="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <!-- Blog List -->
      <div v-if="paginatedBlogs.length" class="space-y-6">
        <div v-for="blog in paginatedBlogs" :key="blog.slug">
          <BlogCard :blog="blog" />
        </div>
      </div>

      <!-- No Results Message -->
      <div v-else class="text-center text-gray-600">
        No blogs found matching your search criteria.
      </div>

      <!-- Pagination Controls -->
      <div class="flex justify-center items-center mt-8 space-x-2">
        <button
          @click="currentPage--"
          :disabled="currentPage === 1"
          class="px-4 py-2 bg-gray-200 rounded-l-md hover:bg-blue-100 disabled:opacity-50"
        >
          Previous
        </button>
        <span class="px-4 py-2 text-gray-700">
          Page {{ currentPage }} of {{ totalPages }}
        </span>
        <button
          @click="currentPage++"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 bg-gray-200 rounded-r-md hover:bg-blue-100 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Hero from "@/components/Hero.vue";
import BlogCard from "@/components/BlogCard.vue";
import { ref, computed } from "vue";

// Fetch blogs
const { data: blogs } = await useFetch("/data/blogs.json", { server: false });

// Search Query
const searchQuery = ref("");

// Pagination State
const currentPage = ref(1);
const itemsPerPage = 3;

// Filtered Blogs
const filteredBlogs = computed(() => {
  if (!blogs.value) return [];
  const query = searchQuery.value.toLowerCase();
  return blogs.value.filter(
    (blog) =>
      blog.title.toLowerCase().includes(query) ||
      blog.content.toLowerCase().includes(query)
  );
});

// Paginated Blogs
const paginatedBlogs = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredBlogs.value.slice(startIndex, endIndex);
});

// Total Pages
const totalPages = computed(() =>
  Math.ceil(filteredBlogs.value.length / itemsPerPage)
);

// Scroll to Blogs Section
const blogsSection = ref(null);
const scrollToBlogs = () => {
  blogsSection.value?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
/* Ensure the container does not stretch too wide */
.container {
  max-width: 1280px;
}
</style>
