import { getCollection, getEntry, render, type CollectionEntry } from 'astro:content';

export const homeCopy = {
  eyebrow: 'Software Engineer & .NET Enthusiast',
  headline: 'Створюю код, який',
  headlineAccent: 'має значення.',
  summary: 'Працюю над складними системами на .NET, експериментую з Python та волонтерю в Пласті.',
  philosophyEyebrow: 'Philosphy & Mindset',
  philosophyTitle: 'Більше, ніж просто код',
  philosophyText:
    'Коли не пишу код, я займаюся музикою, цікавлюся історією, читаю книжки або працюю з залізом. Вірю, що найкращі ідеї та рішення народжуються на перетині технологій та творчості.',
  interests: ['ProjectK', 'Music', 'Plast volunteer', 'Hardware Enthusiast'],
  projectsEyebrow: 'Portfolio',
  projectsTitle: 'Pet-projects',
  experienceEyebrow: 'Journey',
  experienceTitle: 'Досвід',
  introPlainText:
    'Я - .NET інженер, який цінує порядок у коді та архітектурі, волонтер Пласту. Попри досвід у Full-Stack .NET, зараз вивчаю AI ML на Python.',
};

export const experienceItems = [
  {
    period: '2022 - 2026',
    title: 'Студент',
    company: 'Західноукраїнський національний університет, Тернопіль',
    description:
      "Навчання на факультеті комп'ютерних інформаційних технологій, спеціальність - ІСТ. Активна участь у студентських проєктах.",
    tags: ['C++', 'C#', 'Algorithms & Data Structures', 'Git', 'Docker', 'GitHub', 'CI/CD'],
  },
  {
    period: '2024 - 2025',
    title: 'Trainee Software Engineer',
    company: 'GlobalLogic Ukraine',
    description:
      'Розробка та підтримка мікросервісного веб-додатку на .NET для медичних клінік та ветеринарів. Впровадження нових функцій та оптимізація існуючих рішень.',
    tags: ['.NET', 'Angular', 'Web Development', 'Agile', 'SQL Server', 'Azure'],
  },
  {
    period: '2025 - 2026',
    title: 'Associate Software Engineer',
    company: 'GlobalLogic Ukraine',
    description:
      'Продовження роботи в проєкті над веб-додатком для медичних клінік. Розробка складних функцій, оптимізація продуктивності та участь у плануванні спринтів. Перехід на Python стек для AI ML проєкту.',
    tags: ['.NET', 'Python', 'AI/ML', 'PyTorch', 'Scikit-learn'],
  },
];

export const engineeringInsights = [
  {
    label: 'Рядків коду',
    value: '1.2M+',
    description: 'Написано, відрефакторено та закоммічено з початку 2022 року',
    size: 'large',
    gradient: 'from-blue-600 via-cyan-500 to-teal-400',
    shadow: 'shadow-blue-500/20',
    delay: '0.1s',
  },
  {
    label: 'Dev Fuel',
    value: '450+',
    description: 'Кружок кави та банок енергетиків для Deep Work сесій',
    size: 'small',
    gradient: 'from-orange-500 via-rose-500 to-amber-400',
    shadow: 'shadow-orange-500/20',
    delay: '0.2s',
  },
  {
    label: 'Deep Work',
    value: '4,200+',
    description: 'Годин концентрації в IDE, терміналі та за дебагом',
    size: 'small',
    gradient: 'from-purple-600 via-indigo-500 to-sky-400',
    shadow: 'shadow-purple-500/20',
    delay: '0.3s',
  },
  {
    label: 'Bugs Fixed',
    value: 'inf',
    description: 'Виправлених помилок, збережених нервів та закритих тікетів',
    size: 'small',
    gradient: 'from-emerald-500 via-teal-500 to-lime-400',
    shadow: 'shadow-emerald-500/20',
    delay: '0.4s',
  },
  {
    label: 'Проєкти',
    value: '5+',
    description: 'Доведено до релізу: від скриптів до мікросервісів',
    size: 'small',
    gradient: 'from-fuchsia-600 via-purple-500 to-pink-400',
    shadow: 'shadow-fuchsia-500/20',
    delay: '0.5s',
  },
  {
    label: 'Stack Transition',
    value: '.NET -> Py',
    description: 'Успішний перехід зі стеку .NET на Python для AI/ML проєкту в GlobalLogic.',
    size: 'large',
    gradient: 'from-yellow-400 to-orange-500',
    shadow: 'shadow-yellow-500/20',
    delay: '0.2s',
  },
] as const;

export const techStackContent = {
  eyebrow: 'Stack & Ecosystem',
  title: 'Інструменти, якими я володію',
  description:
    'Мій основний фокус - екосистема .NET та архітектура складних систем. Але я завжди відкритий до нових тулзів, які роблять код чистішим.',
  hardSkillsLabel: 'Всі хард скіли',
  softSkillsLabel: "Шукаєте більш м'які навички?",
  icons: [
    { slug: 'simple-icons:dotnet', color: 'text-[#512BD4]', top: '12%', left: '15%', delay: '0s' },
    { slug: 'simple-icons:csharp', color: 'text-[#512BD4]', top: '22%', left: '82%', delay: '4s' },
    { slug: 'simple-icons:python', color: 'text-[#3776AB]', top: '68%', left: '10%', delay: '2s' },
    { slug: 'simple-icons:docker', color: 'text-[#2496ED]', top: '75%', left: '88%', delay: '1.5s' },
    { slug: 'simple-icons:postgresql', color: 'text-[#4169E1]', top: '18%', left: '55%', delay: '3s' },
    { slug: 'simple-icons:visualstudiocode', color: 'text-[#007ACC]', top: '42%', left: '5%', delay: '0.5s' },
    { slug: 'simple-icons:angular', color: 'text-[#DD0031]', top: '52%', left: '92%', delay: '3.5s' },
    { slug: 'simple-icons:github', color: 'text-black dark:text-white/30', top: '85%', left: '45%', delay: '5s' },
  ],
};

export type HomePageData = {
  introEntry: CollectionEntry<'intro'> | undefined;
  IntroContent: Awaited<ReturnType<typeof render<CollectionEntry<'intro'>>>>['Content'] | undefined;
  projects: CollectionEntry<'projects'>[];
};

export async function getHomePageData(): Promise<HomePageData> {
  const introEntry = await getEntry('intro', 'greeting');
  const rendered = introEntry ? await render(introEntry) : undefined;
  const allProjects = await getCollection('projects');

  return {
    introEntry,
    IntroContent: rendered?.Content,
    projects: allProjects.sort((a, b) => a.data.order - b.data.order),
  };
}
