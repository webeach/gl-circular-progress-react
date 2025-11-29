# CircularProgressFire

## Description

`CircularProgressFire` is a React component that wraps the `gl-circular-progress` library to create a circular progress bar with a **fire** effect using WebGL.
It allows flexible customization of colors, speed, and intensity of the flame via props.

The effect is rendered on a `<canvas>` element managed by the component.

[👀 View Demo](https://webeach.github.io/gl-circular-progress/CircularProgressFire.html)

---

## Signature

```tsx
<CircularProgressFire options={options} aria-label="Loading..." />
```

---

## Examples

### Basic Usage

```tsx
import { CircularProgressFire } from '@webeach/gl-circular-progress-react';

function App() {
  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressFire
        aria-label="Fire Progress"
        options={{
          colors: [0xff5a00, 0xff9a00, 0xffce00], // Fire colors
          intensity: 1.0,
          progress: 0.75, // Initial value
          speed: 1.5,
          thickness: 20,
        }}
      />
    </div>
  );
}
```

### Dynamic Updates

Update the `options` prop to change the effect on the fly. The component handles the updates efficiently.

```tsx
import { useState } from 'react';
import { CircularProgressFire } from '@webeach/gl-circular-progress-react';

function DynamicExample() {
  const [progress, setProgress] = useState(0);

  return (
    <CircularProgressFire
      aria-label="Dynamic Fire"
      options={{
        colors: [0xff5a00, 0xff9a00],
        progress: progress, // Dynamic value
        speed: 1.5,
        thickness: 20,
      }}
    />
  );
}
```

### With Children (Center Content)

You can place content inside the progress bar. Use `contentLayer` to control if it sits behind or in front of the effects (though for Fire, it usually makes sense to be separate or behind depending on opacity).

```tsx
<CircularProgressFire
  aria-label="Progress with text"
  options={{ ...options, progress: 0.5 }}
>
  <span style={{ color: 'white', fontSize: '2rem' }}>50%</span>
</CircularProgressFire>
```

---

## API

### Props

| Prop           | Type                           | Default        | Description                                |
|----------------|--------------------------------|----------------|--------------------------------------------|
| `options`      | `CircularProgressFireOptions`  | **Required**   | Configuration object for the effect.       |
| `aria-label`   | `string`                       | **Required**   | Accessible label for the progress bar.     |
| `tagName`      | `keyof JSX.IntrinsicElements`  | `'div'`        | HTML tag to use for the container wrapper. |
| `contentFit`   | `'contain' \| 'cover'`         | `undefined`    | How the content fits within the container. |
| `contentLayer` | `'background' \| 'foreground'` | `'background'` | Z-order of children relative to canvas.    |

The component also accepts all standard HTML attributes and event listeners supported by the specified `tagName` (default is `'div'`), as well as a `ref`.

### Options (`CircularProgressFireOptions`)

Configuration object passed to the `options` prop.

| Property     | Type       | Default       | Description                                                   |
|--------------|------------|---------------|---------------------------------------------------------------|
| `colors`     | `number[]` | **Required.** | Array of HEX colors (e.g. `0xff5a00`). Used for the gradient. |
| `intensity`  | `number`   | `1.0`         | Intensity of the fire effect.                                 |
| `progress`   | `number`   | `0`           | Initial progress value (0.0 to 1.0).                          |
| `reversed`   | `boolean`  | `false`       | Fill direction. If `true`, progress fills counter-clockwise.  |
| `speed`      | `number`   | `1.0`         | Animation speed of the flame.                                 |
| `startAngle` | `number`   | `0`           | Starting angle of the progress in degrees.                    |
| `thickness`  | `number`   | `10`          | Thickness of the progress ring in pixels.                     |

---

## Typing

```ts
import type { CircularProgressFireProps, CircularProgressFireOptions } from '@webeach/gl-circular-progress-react';
```

---

## See Also

- [CircularProgressLiquid](./CircularProgressLiquid.md) — liquid effect.

