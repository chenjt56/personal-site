<template>
  <header
    class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800"
  >
    <nav class="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <NuxtLink to="/" class="font-semibold text-lg tracking-tight"> Chen Jiantao </NuxtLink>
      <div class="flex items-center gap-6 text-sm text-gray-500">
        <NuxtLink to="/" class="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
          首页
        </NuxtLink>
        <ColorToggle />
      </div>
    </nav>
  </header>
</template>
