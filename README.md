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
  <p>Beautiful WebGL circular progress bars React library (Fire and Liquid effects).</p>
  <br>
  <p><a href="https://webeach.github.io/gl-circular-progress">👀 View Demo</a></p>
</div>

---

## 💎 Features

- **React Components.** Ready-to-use components for easy integration.
- **WebGL Rendering.** High performance and smooth shader animations powered by `@webeach/gl-circular-progress`.
- **Stunning Effects.** Presets for `Fire` and `Liquid` simulation.
- **Fully Customizable.** Configure colors, thickness, speed, intensity via props.
- **TypeScript.** Full typing out of the box.

---

## 📦 Installation

```bash
npm install @webeach/gl-circular-progress-react
```

or

```bash
pnpm install @webeach/gl-circular-progress-react
```

or

```bash
yarn add @webeach/gl-circular-progress-react
```

---

## 📥 Usage

```tsx
import { CircularProgressFire } from '@webeach/gl-circular-progress-react';

function App() {
  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressFire
        aria-label="Progress"
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

## 🛠 Components and Documentation

The library provides two main components with different visual effects:

### 🔥 [CircularProgressFire](./docs/en/CircularProgressFire.md)
Circular progress with a dynamic fire effect. Supports configuration of fire intensity and color gradients.

### 💧 [CircularProgressLiquid](./docs/en/CircularProgressLiquid.md)
Circular progress with a fluid liquid and metaballs effect. Supports "volume" configuration for creating a 3D lens effect.

---

## 🧩 Dependencies

This library wraps `@webeach/gl-circular-progress` and uses `@webeach/react-hooks` for efficient WebGL resource management.

---

## 🔖 Releasing

Releases are automated with `semantic-release`.

Before publishing a new version, make sure that:

1. All changes are committed and pushed to `main`.
2. Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):
   - `feat: ...` — new features
   - `fix: ...` — bug fixes
   - `chore: ...`, `refactor: ...`, etc. — as needed
3. The next version (`patch`, `minor`, `major`) is derived automatically from the commit types.

---

## 👤 Author

Developed and maintained by [Ruslan Martynov](https://github.com/ruslan-mart).

Have an idea or found a bug? Open an issue or send a pull request.

---

## 📄 License

This package is distributed under the [MIT License](./LICENSE).

