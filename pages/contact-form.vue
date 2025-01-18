<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
      <h2 class="text-3xl font-extrabold text-gray-800 text-center mb-6">
        Contact Us
      </h2>
      <p class="text-gray-600 text-center mb-8">
        We'd love to hear from you. Fill out the form below to get in touch!
      </p>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Name Field -->
        <div>
          <label
            for="name"
            class="block text-sm font-semibold text-gray-700 mb-1"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            placeholder="Enter your full name"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <!-- Email Field -->
        <div>
          <label
            for="email"
            class="block text-sm font-semibold text-gray-700 mb-1"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="Enter your email address"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <!-- Message Field -->
        <div>
          <label
            for="message"
            class="block text-sm font-semibold text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            v-model="form.message"
            placeholder="Write your message here..."
            class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="5"
            required
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="text-center">
          <button
            type="submit"
            class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  alert(`Thank you, ${form.value.name}! Your message has been sent.`);
  form.value.name = "";
  form.value.email = "";
  form.value.message = "";
};
</script>

<style scoped>
/* Add subtle background gradient */
body {
  background: linear-gradient(to bottom, #f3f4f6, #e5e7eb);
}
</style>
