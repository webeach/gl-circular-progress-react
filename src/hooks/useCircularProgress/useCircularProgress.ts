import {
  BaseCircularProgress,
  BaseCircularProgressOptions,
} from '@webeach/gl-circular-progress';
import { useIsomorphicLayoutEffect } from '@webeach/react-hooks/useIsomorphicLayoutEffect';
import { useLayoutEffectCompare } from '@webeach/react-hooks/useLayoutEffectCompare';
import { useLiveRef } from '@webeach/react-hooks/useLiveRef';
import { useRef } from 'react';

import { compareOptions } from './utils';

export function useCircularProgress<
  CircularProgressInstance extends BaseCircularProgress,
  Options extends BaseCircularProgressOptions,
>(
  options: Options,
  initInstance: (initialOptions: Options) => CircularProgressInstance,
  extraOptionsResolver: (
    instance: CircularProgressInstance,
    extraOptions: Omit<Options, keyof BaseCircularProgressOptions>,
  ) => void,
) {
  const instanceRef = useRef<CircularProgressInstance>();

  const extraOptionsResolverLiveRef = useLiveRef(extraOptionsResolver);

  useIsomorphicLayoutEffect(() => {
    instanceRef.current = initInstance(options);

    return () => {
      instanceRef.current!.destroy();
    };
  }, []);

  useLayoutEffectCompare(
    () => {
      const instance = instanceRef.current!;

      instance.colors = options.colors;
      instance.progress = options.progress ?? 0;
      instance.reversed = Boolean(options.reversed);
      instance.speed = options.speed ?? 1.0;
      instance.startAngle = options.startAngle ?? 0;
      instance.thickness = options.thickness ?? 10;

      extraOptionsResolverLiveRef.current(instance, options);
    },
    compareOptions,
    options,
  );
}
