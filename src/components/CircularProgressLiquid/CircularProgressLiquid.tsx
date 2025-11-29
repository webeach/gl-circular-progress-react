import { CircularProgressLiquid as CircularProgressLiquidClass } from '@webeach/gl-circular-progress/CircularProgressLiquid';
import { ElementRef, ForwardedRef, forwardRef, ReactNode, useRef } from 'react';

import { useCircularProgress } from '../../hooks/useCircularProgress';
import { ContainerElementType } from '../../types/component';
import { CanvasContainer, CanvasContainerBaseProps } from '../CanvasContainer';

import { CircularProgressLiquidProps } from './types';

function CircularProgressLiquidInternal<
  TagName extends ContainerElementType = 'div',
>(
  props: CircularProgressLiquidProps<TagName>,
  ref?: ForwardedRef<ElementRef<TagName>>,
) {
  const { children, options, ...containerBaseProps } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useCircularProgress(
    options,
    (initialOptions) => {
      return new CircularProgressLiquidClass(
        canvasRef.current!,
        initialOptions,
      );
    },
    (instance, extraOptions) => {
      instance.volume = extraOptions.volume ?? 0;
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
 * A React component that renders a circular progress bar with a **liquid** (metaballs) effect using WebGL.
 *
 * It wraps the `@webeach/gl-circular-progress` library and handles the lifecycle of the WebGL context.
 *
 * @example
 * ```tsx
 * <CircularProgressLiquid
 *   aria-label="Loading..."
 *   options={{
 *     colors: [0x00c6ff, 0x0072ff],
 *     progress: 0.6,
 *     volume: 0.5,
 *   }}
 * />
 * ```
 *
 * @see https://github.com/webeach/gl-circular-progress-react/blob/main/docs/en/CircularProgressLiquid.md
 */
export const CircularProgressLiquid = forwardRef<
  HTMLDivElement,
  CircularProgressLiquidProps
>(CircularProgressLiquidInternal) as <
  TagName extends ContainerElementType = 'div',
>(
  props: CircularProgressLiquidProps<TagName> & {
    ref?: ForwardedRef<ElementRef<TagName>>;
  },
) => ReactNode;
