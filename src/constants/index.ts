import { FAQ, Feature, Home, Locale, Tier, TiersEnum } from '@/types/home'
import { MagnetIcon } from 'lucide-react'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import { FaToolbox } from 'react-icons/fa'
import { FaEarthAsia, FaMobileScreenButton } from 'react-icons/fa6'
import { MdCloudUpload, MdEmail } from 'react-icons/md'
import { SiJuejin } from 'react-icons/si'

export const localeNames: Record<string, Locale> = {
  en: {
    icon: '🇺🇸',
    name: 'English'
  },
  zh: {
    icon: '🇨🇳',
    name: '中文'
  },
  ja: {
    icon: '🇯🇵',
    name: '日本語'
  },
  ar: {
    icon: '🇸🇦',
    name: 'العربية'
  },
  es: {
    icon: '🇪🇸',
    name: 'Español'
  },
  ru: {
    icon: '🇷🇺',
    name: 'Русский'
  }
}

export const OPEN_SOURCE_URL = 'https://github.com/JakeXu/landing-page-starter'
export const ROUGH_BG_COLOR = '#2563EB'
export const ROUGH_BOX_COLOR = '#B71C1C'

const baseSiteConfig = {
  name: 'title', // i18n key
  description: 'description', // i18n key
  url: 'https://landing.pinnasky.com',
  ogImage: 'https://landing.pinnasky.com/og.png',
  metadataBase: '/',
  keywords: ['landing page boilerplate', 'landing page template', 'awesome landing page', 'next.js landing page'],
  authors: [
    {
      name: 'Jake',
      url: 'https://pinnasky.com',
      twitter: 'https://twitter.com/pinnasky'
    }
  ],
  creator: '@JakeXu',
  openSourceURL: OPEN_SOURCE_URL,
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  nextThemeColor: 'system', // next-theme option: system | dark | light
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/logo.png'
  },
  headerLinks: [
    { name: 'repo', href: OPEN_SOURCE_URL, icon: BsGithub },
    { name: 'twitter', href: 'https://twitter.com/pinnasky', icon: BsTwitterX }
  ],
  footerLinks: [
    { name: 'email', href: 'mailto:pinnasky@gmail.com', icon: MdEmail },
    { name: 'twitter', href: 'https://twitter.com/pinnasky', icon: BsTwitterX },
    { name: 'github', href: 'https://github.com/JakeXu/', icon: BsGithub },
    { name: 'juejin', href: 'https://juejin.cn/user/1169536105056775', icon: SiJuejin }
  ],
  footerProducts: [
    { url: 'https://chat.deepseek.com/', name: 'DeepSeek' },
    { url: 'https://chat.openai.com/', name: 'OpenAI GPT-4 / ChatGPT' },
    { url: 'https://gemini.google.com/', name: 'Gemini' },
    { url: 'https://www.midjourney.com/', name: 'Midjourney' },
    { url: 'https://www.liblib.art/', name: 'Stable Diffusion' },
    { url: 'https://www.doubao.com/chat/', name: '豆包（Doubao）' },
    { url: 'https://yuanbao.tencent.com/', name: '元宝（Yuanbao）' }
  ]
}

export const siteConfig: Home = {
  ...baseSiteConfig,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name
  },
  twitter: {
    card: 'summary_large_image',
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator
  }
}

export const Makers = [
  {
    image: '/proofs/1.png'
  },
  {
    image: '/proofs/2.png'
  },
  {
    image: '/proofs/3.png'
  },
  {
    image: '/proofs/4.png'
  },
  {
    image: '/proofs/5.png'
  },
  {
    image: '/proofs/6.png'
  },
  {
    image: '/proofs/7.png'
  },
  {
    image: '/proofs/8.png'
  }
]

export const Marquees = [
  {
    name: 'Next.js',
    image: '/marquees/nextjs.svg'
  },
  {
    name: 'React',
    image: '/marquees/react.svg'
  },
  {
    name: 'Tailwind',
    image: '/marquees/tailwind.svg'
  },
  {
    name: 'Motion',
    image: '/marquees/motion.svg'
  },
  {
    name: 'Shadcnui',
    image: '/marquees/shadcnui.svg'
  },
  {
    name: 'Nextui',
    image: '/marquees/nextui.svg'
  },
  {
    name: 'TS',
    image: '/marquees/typescript.svg'
  },
  {
    name: 'Vercel',
    image: '/marquees/vercel.svg'
  }
]

export const Features: Feature[] = [
  {
    key: 'github',
    icon: BsGithub
  },
  {
    key: 'responsive',
    icon: FaMobileScreenButton
  },
  {
    key: 'i18n',
    icon: FaEarthAsia
  },
  {
    key: 'seo',
    icon: MagnetIcon
  },
  {
    key: 'custom',
    icon: FaToolbox
  },
  {
    key: 'deploy',
    icon: MdCloudUpload
  }
]

export const Tiers: Tier[] = [
  {
    key: TiersEnum.Free,
    href: siteConfig.openSourceURL || '#',
    features: ['Free', 'Access to full codes', 'Secondary development', 'MIT License'],
    buttonColor: 'primary',
    buttonVariant: 'solid'
  },
  {
    key: TiersEnum.Customize,
    href: siteConfig.authors[0].twitter || '#',
    features: ['Access to full code', 'Secondary development', 'Exclusive style', 'One-on-one service', 'More exquisite pages'],
    buttonColor: 'default',
    buttonVariant: 'flat'
  }
]

export const Testimonials = [
  {
    user: {
      name: 'Author',
      username: 'pinnasky',
      image: '/users/pinnasky.jpeg'
    },
    content:
      "As a front-end developer, I'm highly satisfied with this landing page template. Editing text and images was very intuitive, and I encountered no technical hurdles throughout the process. The template's responsive design is excellent as well; whether on mobile or desktop, the page layout adapts perfectly. I managed to launch my own product's landing page in just half a day, significantly boosting my efficiency."
  },
  {
    user: {
      name: 'User1',
      username: 'pinnasky',
      image: '/users/1.png'
    },
    content:
      'This template has given me a new perspective on coding. As a backend developer with not much front-end experience, I found this template to be very user-friendly. I could build a professional-looking landing page with hardly any coding required. This not only saved me time but also sparked more interest in front-end development.'
  },
  {
    user: {
      name: 'User2',
      username: 'pinnasky',
      image: '/users/2.png'
    },
    content:
      "As a developer who transitioned from design, I'm impressed with the aesthetic design of this template. It's not only easy to use but also comes with a default design that feels both modern and professional. I made some adjustments to the details to match my brand style, and the entire process was both simple and enjoyable."
  },
  {
    user: {
      name: 'User3',
      username: 'pinnasky',
      image: '/users/3.png'
    },
    content:
      'The performance of this template is outstanding, with very fast loading times and SEO-friendly features. As a developer focused on product optimization, I appreciate the high performance and optimization of the template. With simple modifications, I was able to further optimize my landing page, improving the speed at which users can access it. The SEO friendliness of the template also helped my page achieve better rankings in search engines.'
  },
  {
    user: {
      name: 'User4',
      username: 'pinnasky',
      image: '/users/4.png'
    },
    content:
      'The interactive elements of this template added a lot of fun to my project. I particularly liked the settings for animations and transition effects, which made the browsing experience richer and more dynamic. Adjusting these interactive elements was very straightforward, requiring no deep front-end knowledge, which was very user-friendly for a non-professional front-end developer like me.'
  },
  {
    user: {
      name: 'User5',
      username: 'pinnasky',
      image: '/users/5.png'
    },
    content:
      'This template does a great job with multi-language support, which is crucial for my international project. I was able to easily add different language versions, and the template ensured consistency in layout and design across various languages. This significantly reduced my workload in the localization process and helped me reach global users more quickly.'
  },
  {
    user: {
      name: 'User6',
      username: 'pinnasky',
      image: '/users/6.png'
    },
    content:
      'The interactive elements of this template added a lot of fun to my project. I particularly liked the settings for animations and transition effects, which made the browsing experience richer and more dynamic. Adjusting these interactive elements was very straightforward, requiring no deep front-end knowledge, which was very user-friendly for a non-professional front-end developer like me.'
  },
  {
    user: {
      name: 'User7',
      username: 'pinnasky',
      image: '/users/7.png'
    },
    content:
      'This template does a great job with multi-language support, which is crucial for my international project. I was able to easily add different language versions, and the template ensured consistency in layout and design across various languages. This significantly reduced my workload in the localization process and helped me reach global users more quickly.'
  }
]

export const FAQs: FAQ[] = Array.from({ length: 12 }, (_, index) => ({
  question: `question${index + 1}`,
  answer: `answer${index + 1}`
}))
