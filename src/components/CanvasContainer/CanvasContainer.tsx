import { ElementRef, ForwardedRef, forwardRef, ReactNode } from 'react';

import { ContainerElementType } from '../../types/component';
import { classList } from '../../utils/classList';
import { getSafeChildTag } from '../../utils/getSafeChildTag';

import {
  contentFitClassNameMap,
  contentLayerClassNameMap,
  DEFAULT_CONTENT_FIT,
  DEFAULT_CONTENT_LAYER,
} from './constants';
import styles from './styles.module.scss';
import { CanvasContainerProps } from './types';

function CanvasContainerInternal<TagName extends ContainerElementType = 'div'>(
  props: CanvasContainerProps<TagName>,
  ref?: ForwardedRef<ElementRef<TagName>>,
) {
  const {
    children,
    className,
    contentFit = DEFAULT_CONTENT_FIT,
    contentLayer = DEFAULT_CONTENT_LAYER,
    canvasRender,
    options,
    tagName = 'div',
    ...htmlProps
  } = props;

  const ContainerElement = tagName as ContainerElementType;
  const ContentElement = getSafeChildTag(ContainerElement);

  const ariaValue = Math.min(
    100,
    Math.max(0, Math.round((options.progress || 0) * 100)),
  );

  return (
    <ContainerElement
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={ariaValue}
      className={classList(styles.container, className)}
      ref={ref}
      role="progressbar"
      {...htmlProps}
    >
      <ContentElement
        className={classList(
          styles.content,
          contentFitClassNameMap[contentFit],
          contentLayerClassNameMap[contentLayer],
        )}
        style={{
          '--thickness': options.thickness ?? 10,
        }}
      >
        {children}
      </ContentElement>
      {canvasRender({ 'aria-hidden': true, className: styles.canvas })}
    </ContainerElement>
  );
}

/**
 * Base container component for WebGL circular progress bars.
 * Handles the layout, accessibility attributes, and canvas rendering.
 *
 * @internal
 */
export const CanvasContainer = forwardRef<HTMLDivElement, CanvasContainerProps>(
  CanvasContainerInternal,
) as <TagName extends ContainerElementType = 'div'>(
  props: CanvasContainerProps<TagName> & {
    ref?: ForwardedRef<ElementRef<TagName>>;
  },
) => ReactNode;
