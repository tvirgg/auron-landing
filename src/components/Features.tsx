import React, { useMemo } from 'react';
import { Card } from './ui/Card';
import { FadeIn } from './FadeIn';
import { Zap, ShieldCheck, Repeat, Wallet } from 'lucide-react';

// --- Генераторы случайных значений ---

// Получаем случайное целое число в диапазоне
const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

// Получаем случайное число с плавающей точкой в диапазоне
const getRandomFloat = (min: number, max: number) => Math.random() * (max - min) + min;

// Получаем случайный элемент из массива
const getRandomItem = (arr: any[]): any => arr[Math.floor(Math.random() * arr.length)];


// --- Конфигурация для градиентов ---

// Цветовые пары теперь с реальными HEX-кодами для использования в inline-стилях
const colorPairs = [
  { from: '#f43f5e', to: '#a78bfa' }, // rose-500 to violet-400
  { from: '#3b82f6', to: '#10b981' }, // blue-500 to emerald-500
  { from: '#f59e0b', to: '#ef4444' }, // amber-500 to red-500
  { from: '#a855f7', to: '#ec4899' }, // purple-500 to pink-500
  { from: '#0ea5e9', to: '#84cc16' }, // sky-500 to lime-500
  { from: '#f97316', to: '#06b6d4' }, // orange-500 to cyan-500
];

// Карта для преобразования классов Tailwind в CSS-свойства
const directionMap = {
  'bg-gradient-to-r': 'to right',
  'bg-gradient-to-l': 'to left',
  'bg-gradient-to-t': 'to top',
  'bg-gradient-to-b': 'to bottom',
  'bg-gradient-to-tr': 'to top right',
  'bg-gradient-to-tl': 'to top left',
  'bg-gradient-to-br': 'to bottom right',
  'bg-gradient-to-bl': 'to bottom left',
};
type DirectionKey = keyof typeof directionMap;
const directions = Object.keys(directionMap);


// --- Основные данные ---

// --- Основные данные ---

const features = [
  {
    icon: <Zap />,
    title: 'Instant Launch',
    description: 'Launch your token on any network in minutes with full liquidity pre-configuration.',
  },
  {
    icon: <Repeat />,
    title: 'Volume Generation',
    description: 'Our algorithm creates realistic trading volumes to attract traders\' attention.',
  },
  {
    icon: <Wallet />,
    title: 'Wallet Management',
    description: 'Mass creation and management of wallets for token distribution and airdrops.',
  },
  {
    icon: <ShieldCheck />,
    title: 'Security',
    description: 'Full control over your assets. Private keys are stored only by you.',
  },
    // ---- Здесь вы можете добавить больше уникальных карточек, если нужно, ----
    // ---- или удалить дубликаты, так как дублирование для анимации   ----
    // ---- происходит автоматически в JSX.                           ----
  {
    icon: <Zap />,
    title: 'Instant Launch',
    description: 'Launch your token on any network in minutes with full liquidity pre-configuration.',
  },
  {
    icon: <Repeat/>,
    title: 'Volume Generation',
    description: 'Our algorithm creates realistic trading volumes to attract traders\' attention.',
  },
  {
    icon: <Wallet />,
    title: 'Wallet Management',
    description: 'Mass creation and management of wallets for token distribution and airdrops.',
  },
  {
    icon: <ShieldCheck/>,
    title: 'Security',
    description: 'Full control over your assets. Private keys are stored only by you.',
  },
    {
    icon: <Zap />,
    title: 'Instant Launch',
    description: 'Launch your token on any network in minutes with full liquidity pre-configuration.',
  },
  {
    icon: <Repeat />,
    title: 'Volume Generation',
    description: 'Our algorithm creates realistic trading volumes to attract traders\' attention.',
  },
  {
    icon: <Wallet />,
    title: 'Wallet Management',
    description: 'Mass creation and management of wallets for token distribution and airdrops.',
  },
  {
    icon: <ShieldCheck />,
    title: 'Security',
    description: 'Full control over your assets. Private keys are stored only by you.',
  },
    // ---- Здесь вы можете добавить больше уникальных карточек, если нужно, ----
    // ---- или удалить дубликаты, так как дублирование для анимации   ----
    // ---- происходит автоматически в JSX.                           ----
  {
    icon: <Zap />,
    title: 'Instant Launch',
    description: 'Launch your token on any network in minutes with full liquidity pre-configuration.',
  },
  {
    icon: <Repeat/>,
    title: 'Volume Generation',
    description: 'Our algorithm creates realistic trading volumes to attract traders\' attention.',
  },
  {
    icon: <Wallet />,
    title: 'Wallet Management',
    description: 'Mass creation and management of wallets for token distribution and airdrops.',
  },
  {
    icon: <ShieldCheck/>,
    title: 'Security',
    description: 'Full control over your assets. Private keys are stored only by you.',
  },
];


// --- Главная функция-генератор стиля ---

const generateRandomGradientStyle = () => {
  // 1. Создаем темные "точки" (радиальные градиенты)
  const numDots = getRandomInt(3, 6); // От 3 до 6 темных пятен на карточке
  let radialGradients = [];

  for (let i = 0; i < numDots; i++) {
    const x = getRandomInt(0, 100);
    const y = getRandomInt(0, 100);
    const size = getRandomInt(40, 80); // Размер пятна в процентах
    const opacity = getRandomFloat(0.25, 0.55).toFixed(2); // Непрозрачность

    radialGradients.push(
      `radial-gradient(circle at ${x}% ${y}%, rgba(0,0,0,${opacity}) 0%, transparent ${size}%)`
    );
  }

  // 2. Создаем основной цветной фон (линейный градиент)
  const randomDirectionClass = getRandomItem(directions) as DirectionKey;
  const cssDirection = directionMap[randomDirectionClass];
  const { from, to } = getRandomItem(colorPairs);
  const linearGradient = `linear-gradient(${cssDirection}, ${from}, ${to})`;

  // 3. Совмещаем все слои в одно CSS-свойство
  // Радиальные градиенты идут первыми, чтобы быть "поверх" цветного фона
  const backgroundImage = [...radialGradients, linearGradient].join(', ');

  return { backgroundImage }; // Возвращаем объект для inline-стиля
};


// --- Компонент ---

export default function Features() {
  const randomizedFeatures = useMemo(() => {
    // Для каждой фичи генерируем уникальный объект стиля
    return features.map(feature => ({
      ...feature,
      style: generateRandomGradientStyle(),
    }));
  }, []);

  const duplicatedRandomFeatures = [...randomizedFeatures, ...randomizedFeatures];

  return (
    <section id="features" className="relative py-20 md:py-28 overflow-x-hidden">
      <FadeIn>
        <div className="relative z-10 text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold">All Tools in One Place</h2>
          <p className="mt-4 text-lg text-neutral-400">Powerful functionality for a successful start to your project.</p>
        </div>

        <div
          className="scroller w-full overflow-hidden"
          data-animated="true"
          style={{ maskImage: 'linear-gradient(to right, transparent, white 10%, white 90%, transparent)' }}
        >
          <div className="scroller__inner flex gap-8">
            {duplicatedRandomFeatures.map((feature, index) => (
              <Card
                key={`${feature.title}-${index}`}
                className="flex-shrink-0 w-[300px] md:w-[350px] text-white" // Убираем класс градиента
                style={feature.style} // <-- Применяем сгенерированный inline-стиль
                aria-hidden={index >= randomizedFeatures.length}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-300">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
