<script setup lang="ts">
const experiences = [
  {
    company: '华为技术有限公司',
    role: '前端开发工程师（OD）',
    period: '2024 - 至今',
    location: '深圳',
    description: '负责华为内部系统前端开发与维护，参与企业级应用的功能迭代。',
    techStack: ['Vue 3', 'TypeScript', 'Vite'],
  },
  {
    company: '广东今日头条科技有限公司（字节跳动）',
    role: '前端开发工程师',
    period: '2021.07 - 2022.07',
    location: '广州',
    description: '负责飞书审批应用的网页端维护和开发，以及飞书小程序 OA 审批的维护和开发。处理审批公共组件的线上问题，实现审批二级页面的骨架屏功能。',
    techStack: ['React', 'Vue', '飞书小程序'],
  },
  {
    company: '广州网易计算机系统有限公司',
    role: 'Web 前端开发实习生',
    period: '2021.01 - 2021.05',
    location: '广州',
    description: '维护和开发《创作热爱者计划》后台管理系统，负责积分商城移动端 H5 页面开发。',
    techStack: ['React', 'Ant Design'],
  },
]
</script>

<template>
  <section class="mb-24">
    <h2 class="text-lg font-semibold mb-8 text-gray-500 dark:text-gray-400 uppercase tracking-wider text-sm">
      工作经历
    </h2>
    <div class="space-y-10">
      <TimelineItem
        v-for="(exp, index) in experiences"
        :key="index"
        :company="exp.company"
        :role="exp.role"
        :period="exp.period"
        :location="exp.location"
        :description="exp.description"
        :techStack="exp.techStack"
      />
    </div>
  </section>
</template>
