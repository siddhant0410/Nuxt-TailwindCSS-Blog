<template>
  <div
    class="group border dark:border-gray-800 m-2 overflow-hidden rounded-2xl shadow-sm text-zinc-700 dark:text-zinc-300"
  >
    <!-- Blog Image -->
    <div
      class="h-48 bg-cover"
      :style="{ backgroundImage: `url(${blog.image})` }"
      :title="blog.title"
    ></div>

    <!-- Blog Content -->
    <div class="p-4">
      <!-- Title -->
      <h2 class="text-gray-900 font-bold text-xl mb-2">{{ blog.title }}</h2>

      <!-- Excerpt -->
      <p class="text-gray-700 text-base mb-4">
        {{
          blog.content.length > 100
            ? blog.content.substring(0, 100) + "..."
            : blog.content
        }}
      </p>

      <!-- Read More -->
      <NuxtLink
        :to="`/blog-posts/${blog.slug}`"
        class="text-blue-500 hover:underline"
      >
        Read More
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { blog } = defineProps(["blog"]);
</script>

<style scoped></style>
