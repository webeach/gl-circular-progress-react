# CircularProgressLiquid

## Description

`CircularProgressLiquid` is a React component that wraps the `gl-circular-progress` library to create a circular progress bar with a **liquid** (metaballs) effect using WebGL.
It allows creating smooth animations with customizable volume distortion (lens effect) via props.

The effect is rendered on a `<canvas>` element managed by the component.

[👀 View Demo](https://webeach.github.io/gl-circular-progress/CircularProgressLiquid.html)

---

## Signature

```tsx
<CircularProgressLiquid options={options} aria-label="Loading..." />
```

---

## Examples

### Basic Usage

```tsx
import { CircularProgressLiquid } from '@webeach/gl-circular-progress-react';

function App() {
  return (
    <div style={{ width: 200, height: 200 }}>
      <CircularProgressLiquid
        aria-label="Liquid Progress"
        options={{
          colors: [0x00c6ff, 0x0072ff], // Liquid colors
          progress: 0.6, // Initial value
          speed: 0.5,
          startAngle: -90, // Start from left
          thickness: 30,
          volume: 0.5, // Volume/Lens effect
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
import { CircularProgressLiquid } from '@webeach/gl-circular-progress-react';

function DynamicExample() {
  const [progress, setProgress] = useState(0);

  return (
    <CircularProgressLiquid
      aria-label="Dynamic Liquid"
      options={{
        colors: [0x00c6ff, 0x0072ff],
        progress: progress, // Dynamic value
        speed: 1.2, // Speed up flow
        volume: 0.8, // Increase lens effect
        reversed: true, // Change direction
      }}
    />
  );
}
```

---

## API

### Props

| Prop           | Type                            | Default        | Description                                |
|----------------|---------------------------------|----------------|--------------------------------------------|
| `options`      | `CircularProgressLiquidOptions` | **Required**   | Configuration object for the effect.       |
| `aria-label`   | `string`                        | **Required**   | Accessible label for the progress bar.     |
| `tagName`      | `keyof JSX.IntrinsicElements`   | `'div'`        | HTML tag to use for the container wrapper. |
| `contentFit`   | `'contain' \| 'cover'`          | `undefined`    | How the content fits within the container. |
| `contentLayer` | `'background' \| 'foreground'`  | `'background'` | Z-order of children relative to canvas.    |

The component also accepts all standard HTML attributes and event listeners supported by the specified `tagName` (default is `'div'`), as well as a `ref`.

### Options (`CircularProgressLiquidOptions`)

Configuration object passed to the `options` prop.

| Property     | Type       | Default       | Description                                                                |
|--------------|------------|---------------|----------------------------------------------------------------------------|
| `colors`     | `number[]` | **Required.** | Array of HEX colors. Used for the liquid gradient.                         |
| `progress`   | `number`   | `0`           | Initial progress value (0.0 to 1.0).                                       |
| `reversed`   | `boolean`  | `false`       | Fill direction. If `true`, progress fills counter-clockwise.               |
| `speed`      | `number`   | `1.0`         | Animation speed of the liquid waves.                                       |
| `startAngle` | `number`   | `0`           | Starting angle of the progress in degrees.                                 |
| `thickness`  | `number`   | `10`          | Thickness of the progress ring in pixels.                                  |
| `volume`     | `number`   | `0`           | Volume effect (lens/3D). Value from `0.0` (flat) to `1.0` (strong effect). |

---

## Typing

```ts
import type { CircularProgressLiquidProps, CircularProgressLiquidOptions } from '@webeach/gl-circular-progress-react';
```

---

## See Also

- [CircularProgressFire](./CircularProgressFire.md) — fire effect.

