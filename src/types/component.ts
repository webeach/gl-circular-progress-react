import { ElementType } from 'react';

type VoidTags =
  | 'area'
  | 'base'
  | 'br'
  | 'embed'
  | 'col'
  | 'hr'
  | 'img'
  | 'input'
  | 'link'
  | 'meta'
  | 'param'
  | 'source'
  | 'track'
  | 'wbr';

export type ContainerElementType = Exclude<ElementType, VoidTags>;
