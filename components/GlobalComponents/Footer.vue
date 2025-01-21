<template>
  <footer
    class="container mx-auto p-6 flex flex-col md:flex-row justify-between items-center border-t-2 gap-4"
  >
    <!-- Open Source Message -->
    <div class="text-center md:text-left">
      <p class="text-gray-700 text-lg font-semibold">
        🌐 Made with ❤️ by the community.
      </p>
      <p class="text-gray-500 text-sm">
        No rights reserved – this is open source, built for everyone!
      </p>
    </div>
    <!-- Social Media Handles -->
    <div class="flex gap-4">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-600 hover:text-gray-900 transition"
        aria-label="GitHub"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.298 3.438 9.798 8.207 11.385.599.111.793-.26.793-.577v-2.173c-3.338.726-4.033-1.416-4.033-1.416-.546-1.386-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.304 3.495.996.108-.774.418-1.304.762-1.604-2.665-.305-5.466-1.332-5.466-5.93 0-1.311.469-2.382 1.237-3.221-.123-.303-.537-1.524.117-3.176 0 0 1.008-.323 3.3 1.231a11.55 11.55 0 013.003-.404c1.019.005 2.043.138 3.002.403 2.292-1.554 3.298-1.231 3.298-1.231.656 1.653.243 2.874.12 3.176.771.839 1.237 1.91 1.237 3.221 0 4.609-2.804 5.623-5.474 5.921.43.369.823 1.1.823 2.221v3.293c0 .318.192.694.8.576C20.565 22.093 24 17.593 24 12.297 24 5.67 18.627.297 12 .297z"
          />
        </svg>
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-600 hover:text-gray-900 transition"
        aria-label="Twitter"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M23.954 4.569c-.885.392-1.833.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.003.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.917 2.201-4.917 4.917 0 .39.045.765.126 1.124-4.083-.205-7.698-2.161-10.126-5.144-.422.724-.664 1.561-.664 2.475 0 1.708.869 3.216 2.188 4.099-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.398 0-.79-.023-1.17-.067 2.18 1.394 4.768 2.21 7.557 2.21 9.053 0 14-7.496 14-13.986 0-.209 0-.423-.015-.633.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
          />
        </svg>
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-600 hover:text-gray-900 transition"
        aria-label="LinkedIn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M20.447 20.452H17.56v-5.554c0-1.325-.472-2.231-1.656-2.231-.902 0-1.437.611-1.673 1.2-.086.211-.108.507-.108.805v5.78h-2.886s.039-9.394 0-10.362h2.886v1.467c.383-.592 1.063-1.436 2.588-1.436 1.889 0 3.305 1.234 3.305 3.89v6.441zM5.337 6.433c-.983 0-1.631-.656-1.631-1.474 0-.836.67-1.476 1.671-1.476s1.631.64 1.644 1.476c0 .818-.647 1.474-1.644 1.474zm1.444 14.019H3.78V10.09h3.001v10.362zM22.225 0H1.771C.785 0 0 .772 0 1.73v20.541C0 23.235.785 24 1.771 24h20.452C23.22 24 24 23.236 24 22.272V1.73C24 .772 23.22 0 22.225 0z"
          />
        </svg>
      </a>
    </div>
    <!-- Copyright -->
    <p class="text-gray-500 text-sm text-center">
      &copy; {{ new Date().getFullYear() }} Built by dreamers, for dreamers.
    </p>
  </footer>
</template>

<script setup></script>

<style scoped>
/* Add subtle hover styles or spacing tweaks if needed */
</style>
