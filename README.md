🌍 _[英文](README-en.md) ∙ [简体中文](README.md)_

# [Landing Page Boilerplate](https://landing.pinnasky.com/)

一个免费、开源、设计精美的落地页模板，它完全使用公共图标、文字和代码实现，0设计资源，适合不擅长UI设计的个人和团队，改改图标和文字就可以发布自己的产品落地页。

演示地址：https://landing.pinnasky.com

[![Landing Page Boilerplate](./public/og.png)](https://landing.pinnasky.com/)

## 技术栈

Landing Page Boilerplate 基于以下技术栈构建：

- Next.js – 前端
- TailwindCSS – 样式
- Google Analytics
- Vercel - 托管

## 本地运行

克隆仓库后，您需要复制 `.env.example` 文件来创建一个 `.env` 文件，并填写所需字段。

然后，在命令行中运行应用程序，它将在 `http://localhost:3000` 上可用。

```bash
pnpm dev
```

## 创建你的项目

修改以下文件：

- `.env` or `.env.example`
- `src/constants/index.ts`, 填写你的网站信息
- `public`, 修改 logo 文件
- `public/robots.txt`

## 一键部署

使用 Vercel 部署：

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JakeXu/landing-page-starter&project-name=&repository-name=landing-page-starter&demo-title=LandingPageBoilerplate&demo-description=Landing%20Page%20Boilerplate.&demo-url=https://landing.pinnasky.com&demo-image=https://landing.pinnasky.com/og.png)
