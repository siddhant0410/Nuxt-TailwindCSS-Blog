<template>
  <div>
    <!-- Skeleton Loader -->
    <SkeletonLoader v-if="loading" />

    <!-- Hero Section -->
    <div v-else>
      <div class="container mx-auto px-4 md:px-20 py-16">
        <Hero />
      </div>
      <!-- Smooth Scroll Button -->
      <div class="text-center my-8">
        <button
          @click="scrollToBlogs"
          class="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
          Explore Blogs
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2 inline-block animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      <!-- Blogs Section -->
      <div ref="blogSection" class="container mx-auto px-4 md:px-20 py-16">
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
        <BlogList :blogs="paginatedBlogs" v-if="paginatedBlogs.length" />

        <!-- No Results Message -->
        <ErrorMessages
          v-else
          message="No blogs found matching your search criteria."
        />

        <!-- Pagination Controls -->
        <PaginationControls
          class="mt-8"
          :current-page="currentPage"
          :total-pages="totalPages"
          @previous="currentPage--"
          @next="currentPage++"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Hero from "~/components/HomePageComponents/Hero.vue";
import BlogList from "~/components/HomePageComponents/BlogList.vue";
import PaginationControls from "~/components/HomePageComponents/PaginationControls.vue";
import ErrorMessages from "~/components/GlobalComponents/ErrorMessages.vue";
import SkeletonLoader from "~/components/GlobalComponents/SkeletonLoader.vue";
import { ref, computed, onMounted } from "vue";

const config = useRuntimeConfig();

const blogs = ref([]);
const loading = ref(true); // Track loading state
const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = config.public.itemsPerPage;

// Fetch blog data
onMounted(async () => {
  try {
    const response = await fetch("/data/blogs.json");
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    blogs.value = await response.json();
  } catch (error) {
    console.error(error.message);
  } finally {
    loading.value = false; // Stop loading when fetch completes
  }
});

// Filtered Blogs
const filteredBlogs = computed(() => {
  if (!blogs.value.length) return [];
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
const blogSection = ref(null);

const scrollToBlogs = () => {
  if (blogSection.value) {
    blogSection.value.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error("Blog section not found!");
  }
};
</script>
