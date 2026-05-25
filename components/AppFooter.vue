<script setup lang="ts">
const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="border-t border-gray-100 dark:border-gray-800 py-8 mt-32">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center text-sm text-gray-400">
      <p>&copy; {{ year }} Chen Jiantao</p>
    </div>
  </footer>
</template>
