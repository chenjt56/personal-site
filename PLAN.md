# 个人网站搭建计划

## 技术栈

| 项目 | 选择 |
|------|------|
| 框架 | Nuxt 3 |
| 渲染模式 | SSG（静态生成） |
| 样式 | Tailwind CSS |
| 设计风格 | 极简干净 |
| 部署平台 | Vercel（待部署） |
| 包管理 | npm |
| 代码仓库 | github.com/chenjt56/personal-site |

## 页面结构

```
/
├── 首页 (index.vue)
│   ├── 导航栏
│   ├── Hero 区：姓名、title、一句话简介
│   ├── 技能标签
│   ├── 工作经历时间线
│   │   ├── 华为 OD（2024-至今）
│   │   ├── 字节跳动（2021-2022）
│   │   └── 网易实习（2021）
│   ├── 教育经历（中山大学）
│   └── 联系方式
└── 文章/博客（预留，后续添加）
```

## 任务列表

### Phase 1：项目初始化 ✅

- [x] `npx nuxi init personal-site` 创建项目
- [x] 安装 Tailwind CSS：`npm install @nuxtjs/tailwindcss`
- [x] 配置 `nuxt.config.ts`
- [x] 配置 Tailwind 自定义主题（极简风格）
- [x] 创建基础布局 `layouts/default.vue`
- [x] 创建全局样式
- [x] 提交 Git 初始化

### Phase 2：首页开发 ✅

- [x] 导航栏组件（固定、半透明、响应式）
- [x] Hero 区域：姓名、职位、一句话简介
- [x] 技能标签区域
- [x] 工作经历时间线组件
- [x] 教育经历区域
- [x] 联系方式区域
- [x] 暗色模式切换
- [x] 页面响应式适配

### Phase 3：内容填充 ✅

- [x] 填写个人信息（陈剑涛 - 前端开发工程师）
- [x] 填写华为 OD 经历（公司、岗位、时间、技术栈）
- [x] 填写字节跳动经历
- [x] 填写网易实习经历
- [x] 填写教育经历（中山大学）
- [x] 填写技能列表

### Phase 4：部署上线 ✅（代码已推送）

- [x] 创建 GitHub 仓库并推送代码 → `github.com/chenjt56/personal-site`
- [ ] 注册/登录 Vercel 并导入该仓库 → **待你操作**
- [ ] 配置自定义域名（可选）
- [ ] 设置 GTM / 统计（可选）

### Phase 5：后续迭代（可选）

- [ ] 添加博客功能（`@nuxt/content`）
- [ ] 添加动画（vueuse/motion）
- [ ] 添加项目案例展示
- [ ] 添加简历 PDF 下载
- [ ] 添加中英文切换

## 目录结构

```
personal-site/
├── app.vue                          # 入口
├── layouts/
│   └── default.vue                  # 页面布局
├── pages/
│   └── index.vue                    # 首页
├── components/
│   ├── AppHeader.vue                # 导航栏
│   ├── AppFooter.vue                # 页脚
│   ├── HeroSection.vue              # 个人简介
│   ├── SkillsSection.vue            # 技能标签
│   ├── TimelineSection.vue          # 工作经历列表
│   ├── TimelineItem.vue             # 单条经历卡片
│   ├── EducationSection.vue         # 教育经历
│   ├── ContactSection.vue           # 联系方式
│   └── ColorToggle.vue              # 暗色模式切换
├── assets/
│   └── css/
│       └── main.css                 # 全局样式
├── nuxt.config.ts                   # Nuxt 配置
├── tailwind.config.ts               # Tailwind 配置
├── tsconfig.json
├── package.json
└── PLAN.md                          # 本计划
```
