import type { CircularProgressLiquidOptions } from '@webeach/gl-circular-progress/CircularProgressLiquid';

import { ContainerElementType } from '../../types/component';
import { CanvasContainerBaseProps } from '../CanvasContainer';

export type CircularProgressLiquidProps<
  TagName extends ContainerElementType = 'div',
> = CanvasContainerBaseProps<TagName> & {
  /**
   * Configuration options for the liquid effect.
   * @see {@link CircularProgressLiquidOptions}
   */
  options: CircularProgressLiquidOptions;
};

export type { CircularProgressLiquidOptions };
