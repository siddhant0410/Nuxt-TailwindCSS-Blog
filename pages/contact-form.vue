<template>
  <section class="py-24">
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div class="bg-white shadow-lg rounded-lg p-8">
        <h4
          class="text-indigo-600 text-base font-medium leading-6 mb-4 text-center"
        >
          Contact Us
        </h4>
        <h2
          class="text-gray-900 font-manrope text-3xl font-semibold leading-10 mb-8 text-center"
        >
          We’d Love to Hear From You
        </h2>
        <form @submit.prevent="handleSubmit">
          <input
            v-model="form.name"
            type="text"
            class="w-full h-14 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300 py-2 px-4 mb-6"
            placeholder="Name"
            :class="{ 'border-red-500': errors.name }"
          />
          <p v-if="errors.name" class="text-red-500 text-sm mb-4">
            {{ errors.name }}
          </p>
          <input
            v-model="form.email"
            type="email"
            class="w-full h-14 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300 py-2 px-4 mb-6"
            placeholder="Email"
            :class="{ 'border-red-500': errors.email }"
          />
          <p v-if="errors.email" class="text-red-500 text-sm mb-4">
            {{ errors.email }}
          </p>
          <textarea
            v-model="form.message"
            class="w-full h-48 shadow-sm resize-none text-gray-600 placeholder-gray-400 text-lg font-normal leading-7 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-300 px-4 py-4 mb-2"
            placeholder="Message (Max 300 characters)"
            :class="{ 'border-red-500': errors.message }"
            maxlength="300"
          ></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm mb-4">
            {{ errors.message }}
          </p>
          <p class="text-gray-500 text-sm mb-6">
            {{ 300 - form.message.length }} characters remaining
          </p>
          <button
            type="submit"
            class="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-md bg-indigo-600 shadow transition-all duration-300 hover:bg-indigo-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const errors = ref({});

const handleSubmit = () => {
  // Clear previous errors
  errors.value = {};

  // Validate form
  if (!form.value.name) {
    errors.value.name = "Name is required.";
  }
  if (!form.value.email) {
    errors.value.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = "Email is invalid.";
  }
  if (!form.value.message) {
    errors.value.message = "Message is required.";
  } else if (form.value.message.length > 300) {
    errors.value.message = "Message cannot exceed 300 characters.";
  }

  // Submit if no errors
  if (Object.keys(errors.value).length === 0) {
    alert(`Thank you, ${form.value.name}! Your message has been sent.`);
    form.value.name = "";
    form.value.email = "";
    form.value.message = "";
  }
};
</script>

<style scoped>
body {
  background: linear-gradient(to bottom, #f9fafb, #f3f4f6);
}
</style>
