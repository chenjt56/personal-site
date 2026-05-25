<script setup lang="ts">
interface Props {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  techStack: string[];
}

defineProps<Props>();
</script>

<template>
  <div class="relative pl-6 border-l-2 border-gray-200 dark:border-gray-700">
    <div
      class="absolute left-0 top-1 w-2.5 h-2.5 -translate-x-[5.5px] rounded-full bg-gray-300 dark:bg-gray-600"
    />
    <div class="mb-1 text-sm text-gray-400">
      {{ period }}
    </div>
    <h3 class="text-base font-semibold mb-0.5">
      {{ company }}
    </h3>
    <p class="text-sm text-gray-500 mb-2">{{ role }} · {{ location }}</p>
    <p class="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
      {{ description }}
    </p>
    <div class="flex flex-wrap gap-1.5">
      <span
        v-for="tech in techStack"
        :key="tech"
        class="px-2 py-0.5 text-xs rounded bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>
