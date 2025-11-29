import { CircularProgressFire as CircularProgressFireClass } from '@webeach/gl-circular-progress/CircularProgressFire';
import { ElementRef, ForwardedRef, forwardRef, ReactNode, useRef } from 'react';

import { useCircularProgress } from '../../hooks/useCircularProgress';
import { ContainerElementType } from '../../types/component';
import { CanvasContainer, CanvasContainerBaseProps } from '../CanvasContainer';

import { CircularProgressFireProps } from './types';

function CircularProgressFireInternal<
  TagName extends ContainerElementType = 'div',
>(
  props: CircularProgressFireProps<TagName>,
  ref?: ForwardedRef<ElementRef<TagName>>,
) {
  const { children, options, ...containerBaseProps } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useCircularProgress(
    options,
    (initialOptions) => {
      return new CircularProgressFireClass(canvasRef.current!, initialOptions);
    },
    (instance, extraOptions) => {
      instance.intensity = extraOptions.intensity ?? 1.0;
    },
  );

  return (
    <CanvasContainer
      {...(containerBaseProps as CanvasContainerBaseProps<TagName>)}
      canvasRender={(canvasProps) => (
        <canvas {...canvasProps} ref={canvasRef} />
      )}
      options={options}
      ref={ref}
    >
      {children}
    </CanvasContainer>
  );
}

/**
 * A React component that renders a circular progress bar with a **fire** effect using WebGL.
 *
 * It wraps the `@webeach/gl-circular-progress` library and handles the lifecycle of the WebGL context.
 *
 * @example
 * ```tsx
 * <CircularProgressFire
 *   aria-label="Loading..."
 *   options={{
 *     colors: [0xff5a00, 0xff9a00],
 *     progress: 0.75,
 *     speed: 1.5,
 *   }}
 * />
 * ```
 *
 * @see https://github.com/webeach/gl-circular-progress-react/blob/main/docs/en/CircularProgressFire.md
 */
export const CircularProgressFire = forwardRef<
  HTMLDivElement,
  CircularProgressFireProps
>(CircularProgressFireInternal) as <
  TagName extends ContainerElementType = 'div',
>(
  props: CircularProgressFireProps<TagName> & {
    ref?: ForwardedRef<ElementRef<TagName>>;
  },
) => ReactNode;
