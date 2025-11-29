import type { CircularProgressFireOptions } from '@webeach/gl-circular-progress/CircularProgressFire';

import { ContainerElementType } from '../../types/component';
import { CanvasContainerBaseProps } from '../CanvasContainer';

export type CircularProgressFireProps<
  TagName extends ContainerElementType = 'div',
> = CanvasContainerBaseProps<TagName> & {
  /**
   * Configuration options for the fire effect.
   * @see {@link CircularProgressFireOptions}
   */
  options: CircularProgressFireOptions;
};

export type { CircularProgressFireOptions };
