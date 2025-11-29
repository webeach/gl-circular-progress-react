import { BaseCircularProgressOptions } from '@webeach/gl-circular-progress';
import { ComponentPropsWithoutRef, HTMLAttributes, ReactNode } from 'react';

import { ContainerElementType } from '../../types/component';

export type CanvasContainerBaseProps<
  TagName extends ContainerElementType = 'div',
> = {
  /**
   * Accessible label for the progress bar.
   * Required for accessibility compliance (WAI-ARIA).
   */
  'aria-label': string;

  /**
   * Controls how the content fits within the container.
   * - 'contain': Content is scaled to maintain aspect ratio while fitting within the container.
   * - 'cover': Content is scaled to maintain aspect ratio while filling the container.
   */
  contentFit?: CanvasContainerContentFit;

  /**
   * Defines the Z-order of the children relative to the progress bar.
   * - 'background': Children are rendered behind the progress path.
   * - 'foreground': Children are rendered on top of the progress path.
   * @default 'background'
   */
  contentLayer?: CanvasContainerContentLayer;

  /**
   * The HTML tag to use for the container wrapper.
   * Defaults to 'div'.
   * @default 'div'
   */
  tagName?: TagName;
} & HTMLAttributes<HTMLElement> &
  ComponentPropsWithoutRef<TagName>;

export type CanvasContainerContentFit = 'contain' | 'cover';

export type CanvasContainerContentLayer = 'background' | 'foreground';

export type CanvasContainerProps<TagName extends ContainerElementType = 'div'> =
  CanvasContainerBaseProps<TagName> & {
    canvasRender: (
      canvasProps: ComponentPropsWithoutRef<'canvas'>,
    ) => ReactNode;
    options: BaseCircularProgressOptions;
  };
