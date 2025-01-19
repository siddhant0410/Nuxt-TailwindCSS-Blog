import { ref, computed } from "vue";

export function useBlogs() {
  const blogs = ref([]);
  const loading = ref(true);
  const error = ref(null);
  const searchQuery = ref("");
  const currentPage = ref(1);
  const itemsPerPage = 3;

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      const response = await fetch("/data/blogs.json");
      if (!response.ok) throw new Error("Failed to fetch blogs");
      blogs.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

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
    return filteredBlogs.value.slice(startIndex, startIndex + itemsPerPage);
  });

  // Total Pages
  const totalPages = computed(() =>
    Math.ceil(filteredBlogs.value.length / itemsPerPage)
  );

  return {
    blogs,
    loading,
    error,
    searchQuery,
    currentPage,
    itemsPerPage,
    filteredBlogs,
    paginatedBlogs,
    totalPages,
    fetchBlogs,
  };
}
