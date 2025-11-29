import styles from './styles.module.scss';

import type {
  CanvasContainerContentFit,
  CanvasContainerContentLayer,
} from './types';

export const DEFAULT_CONTENT_FIT: CanvasContainerContentFit = 'cover';

export const DEFAULT_CONTENT_LAYER: CanvasContainerContentLayer = 'background';

export const contentFitClassNameMap: Record<
  CanvasContainerContentFit,
  string | undefined
> = {
  contain: styles.isFitContain,
  cover: styles.isFitCover,
};

export const contentLayerClassNameMap: Record<
  CanvasContainerContentLayer,
  string | undefined
> = {
  background: styles.isLayerBackground,
  foreground: styles.isLayerForeground,
};
