<div align="center">
  <img alt="gl-circular-progress-react" src="./assets/logo.svg" height="96">
  <br><br><br>
  <p>
    <a href="https://www.npmjs.com/package/@webeach/gl-circular-progress-react">
       <img src="https://img.shields.io/npm/v/@webeach/gl-circular-progress-react.svg?color=646fe1&labelColor=9B7AEF" alt="npm package" />
    </a>
    <a href="https://github.com/webeach/gl-circular-progress-react/actions">
      <img src="https://img.shields.io/github/actions/workflow/status/webeach/gl-circular-progress-react/ci.yml?color=646fe1&labelColor=9B7AEF" alt="build" />
    </a>
    <a href="https://www.npmjs.com/package/@webeach/gl-circular-progress-react">
      <img src="https://img.shields.io/npm/dm/@webeach/gl-circular-progress-react.svg?color=646fe1&labelColor=9B7AEF" alt="npm downloads" />
    </a>
  </p>
  <p><a href="./README.md">🇺🇸 English version</a> | <a href="./README.ru.md">🇷🇺 Русская версия</a></p>
  <p>React-библиотека красивых круговых прогресс-баров на WebGL (эффекты огня и жидкости).</p>
  <br>
  <p><a href="https://webeach.github.io/gl-circular-progress">👀 Смотреть Демо</a></p>
</div>

---

## 💎 Особенности

- **React Компоненты.** Готовые компоненты для простой интеграции.
- **WebGL Рендеринг.** Высокая производительность и плавные анимации шейдеров на базе `@webeach/gl-circular-progress`.
- **Эффектные стили.** Готовые пресеты для имитации огня (`Fire`) и жидкости (`Liquid`).
- **Полная кастомизация.** Настройка цветов, толщины, скорости, интенсивности через пропсы.
- **TypeScript.** Полная типизация "из коробки".

---

## 📦 Установка

```bash
npm install @webeach/gl-circular-progress-react
```

или

```bash
pnpm install @webeach/gl-circular-progress-react
```

или

```bash
yarn add @webeach/gl-circular-progress-react
```

---

## 📥 Использование

```tsx
import { CircularProgressFire } from '@webeach/gl-circular-progress-react';

function App() {
  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressFire
        aria-label="Прогресс"
        options={{
          colors: [0xff5a00, 0xff9a00],
          progress: 0.5,
          speed: 1.5,
          thickness: 15,
        }}
      />
    </div>
  );
}
```

---

## 🛠 Компоненты и Документация

Библиотека предоставляет два основных компонента с различными визуальными эффектами:

### 🔥 [CircularProgressFire](./docs/ru/CircularProgressFire.md)
Круговой прогресс с динамичным эффектом пламени. Поддерживает настройку интенсивности огня и цветовых градиентов.

### 💧 [CircularProgressLiquid](./docs/ru/CircularProgressLiquid.md)
Круговой прогресс с эффектом текучей жидкости и метаболлов. Поддерживает настройку "объема" (volume) для создания 3D-эффекта линзы.

---

## 🧩 Зависимости

Библиотека является оберткой над `@webeach/gl-circular-progress` и использует `@webeach/react-hooks` для эффективного управления ресурсами WebGL.

---

## 🔖 Выпуск новой версии

Релизы обрабатываются автоматически с помощью `semantic-release`.

Перед публикацией новой версии убедись, что:

1. Все изменения закоммичены и запушены в ветку `main`.
2. Сообщения коммитов соответствуют формату [Conventional Commits](https://www.conventionalcommits.org/ru/v1.0.0/):
   - `feat: ...` — для новых фич
   - `fix: ...` — для исправлений багов
   - `chore: ...`, `refactor: ...` и другие типы — по необходимости
3. Версионирование определяется автоматически на основе типа коммитов (`patch`, `minor`, `major`).

---

## 👨‍💻 Автор

Разработка и поддержка: [Руслан Мартынов](https://github.com/ruslan-mart)

Если у тебя есть предложения или найден баг, открывай issue или отправляй pull request.

---

## 📄 Лицензия

Этот пакет распространяется под [лицензией MIT](./LICENSE).

