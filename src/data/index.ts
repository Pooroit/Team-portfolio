import type { Service, Project, Principle, TeamMember } from "../types";

import photoKir from "../image/Kir.jpg";
import photoAr from "../image/ar.jpg";
import photoArt from "../image/Art.jpg";
import photoDima from "../image/dima.jpg";
import photoIl from "../image/Il.jpg";
import photoMark from "../image/Mark.jpg";

export const services: Service[] = [
  {
    id: "01",
    title: "Разработка",
    desc: "Архитектура и инжиниринг сложных веб-приложений, от SaaS до Highload систем.",
    details: [
      "React / Next.js",
      "Node.js / Nest",
      "PostgreSQL / Redis",
      "CI/CD & Docker",
    ],
  },
  {
    id: "02",
    title: "Дизайн",
    desc: "Продуктовый UI/UX, брендинг и моушн-дизайн. Создаем визуальный язык.",
    details: [
      "UI/UX Design Systems",
      "Figma & Prototyping",
      "Motion Design",
      "Brand Identity",
    ],
  },
  {
    id: "03",
    title: "Аналитика",
    desc: "Сбор требований, UX-исследования и проектирование пользовательских сценариев.",
    details: [
      "A/B Testing",
      "User Interviews",
      "Data Visualization",
      "Product Metrics",
    ],
  },
  {
    id: "04",
    title: "Маркетинг",
    desc: "Performance-маркетинг, SEO и контент-стратегии для роста продукта.",
    details: [
      "SEO Optimization",
      "Performance Ads",
      "Content Strategy",
      "Analytics Setup",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "01",
    title: "Автомастерская",
    cat: "Fintech / Web App",
    color: "from-[#3D2C1E] to-[#0A0A0A]",
    year: "2026",
    desc: "Профессиональный детейлинг и ремонт автомобилей",
    url: "https://avtoservis-lemon.vercel.app",
    preview:
      "https://image.thum.io/get/width/1200/crop/630/https://avtoservis-lemon.vercel.app",
  },
  {
    id: "02",
    title: "Батутный центр",
    cat: "Retail / Branding",
    color: "from-[#1A2E25] to-[#0A0A0A]",
    year: "2025",
    desc: "Интернет-магазин люксовой мебели. Бесшовный опыт покупок и 3D-просмотр изделий.",
    url: "https://trampoline-6i2u.vercel.app",
    preview: "https://image.thum.io/get/width/1200/crop/630/https://trampoline-6i2u.vercel.app",
  },
  {
    id: "03",
    title: "Ландшафтный дизайн",
    cat: "SaaS / Product Design",
    color: "from-[#2A2A3D] to-[#0A0A0A]",
    year: "2025",
    desc: "B2B платформа на базе ИИ для автоматизации бизнес-процессов в логистике.",
    url: "https://bugaev-temp-neza-cex.vercel.app",
    preview: "https://image.thum.io/get/width/1200/crop/630/https://bugaev-temp-neza-cex.vercel.app",
  },
  {
    id: "04",
    title: "Пекарня",
    cat: "Mobile / UI/UX",
    color: "from-[#3D1E2C] to-[#0A0A0A]",
    year: "2024",
    desc: "Приложение для бронирования премиальных spa-услуг. Интеграция с Apple Pay и календарями.",
    url: "https://andrunikaa.github.io/Bakery",
    preview: null,
  },
];

export const principles: Principle[] = [
  {
    num: "01",
    title: "Исследование",
    desc: "Погружаемся в бизнес-задачи, изучаем рынок и аудиторию перед стартом.",
  },
  {
    num: "02",
    title: "Прототипирование",
    desc: "Проектируем логику и архитектуру интерфейса. Тестируем сценарии.",
  },
  {
    num: "03",
    title: "Визуальный язык",
    desc: "Создаем дизайн-систему, моушн-принципы и уникальную эстетику.",
  },
  {
    num: "04",
    title: "Инжиниринг",
    desc: "Превращаем макеты в быстрый, надежный и масштабируемый код.",
  },
];

export const team: TeamMember[] = [
  {
    id: "01",
    name: "Кирилл Рыков",
    role: "Tech Lead",
    focus: "Architecture",
    nextRole: "Разработчик",
    bio: "Архитектор систем с 10+ годами опыта. Превращает хаос в масштабируемый код.",
    skills: [
      { name: "System Design", level: 95 },
      { name: "Backend", level: 90 },
      { name: "DevOps", level: 85 },
    ],
    exp: "10 лет в коммерческой разработке. Ex-Yandex, Avito.",
    photo: photoKir,
  },
  {
    id: "02",
    name: "Ступников Арсений",
    role: "Art Director",
    focus: "UI/UX",
    nextRole: "Разработчик",
    bio: "Строит маркетинговые системы, которые приносят прибыль, а не клики.",
    skills: [
      { name: "Art Direction", level: 98 },
      { name: "UI Design", level: 95 },
      { name: "Motion", level: 80 },
    ],
    exp: "8 лет в дизайне. Награды Awwwards, FWA.",
    photo: photoAr,
  },
  {
    id: "03",
    name: "Солонин Артем",
    role: "Head of Growth",
    focus: "Strategy",
    nextRole: "Аналитик",
    bio: "Находит инсайты там, где другие видят просто цифры. Двигатель продуктовых решений.",
    skills: [
      { name: "Strategy", level: 92 },
      { name: "SEO/PPC", level: 88 },
      { name: "Analytics", level: 90 },
    ],
    exp: "7 лет в маркетинге. Выстроил отделы с нуля в 3 стартапах.",
    photo: photoArt,
  },
  {
    id: "04",
    name: "Дубров Дмитрий",
    role: "Data Analyst",
    focus: "Research",
    nextRole: "Отдел продаж",
    bio: "Строит маркетинговые системы, которые приносят прибыль, а не клики.",
    skills: [
      { name: "Data Science", level: 90 },
      { name: "UX Research", level: 85 },
      { name: "SQL/Python", level: 95 },
    ],
    exp: "6 лет в аналитике. Магистр прикладной математики.",
    photo: photoDima,
  },
  {
    id: "05",
    name: "Алехин Илья",
    role: "Senior Developer",
    focus: "Frontend",
    nextRole: "Отдел продаж",
    bio: "Одержим чистым кодом и производительностью. Перфекционист в верстке.",
    skills: [
      { name: "React/Next", level: 96 },
      { name: "TypeScript", level: 92 },
      { name: "WebGL", level: 78 },
    ],
    exp: "5 лет в разработке. Специалист по сложным анимациям.",
    photo: photoIl,
  },
  {
    id: "06",
    name: "Сидоров Марк",
    role: "Lead Designer",
    focus: "Brand Identity",
    nextRole: "Дизайн",
    bio: "Превращает идеи в визуальные манифесты. Эксперт по моушн-дизайну.",
    skills: [
      { name: "Branding", level: 94 },
      { name: "3D Motion", level: 89 },
      { name: "Typography", level: 95 },
    ],
    exp: "7 лет в дизайне. Работал с топ-10 агентствами СНГ.",
    photo: photoMark,
  },
  {
    id: "07",
    name: "Вакантное место",
    role: "Открытая позиция",
    focus: "Твоя экспертиза",
    nextRole: "Любой отдел",
    bio: "Мы ищем человека, который разделяет наши ценности и готов строить что-то большое вместе с командой Цеха.",
    skills: [
      { name: "Твои навыки", level: 0 },
    ],
    exp: "Расскажи нам о себе — и мы рассмотрим твою кандидатуру.",
    isVacant: true,
  },
];
