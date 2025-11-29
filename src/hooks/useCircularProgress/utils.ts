import { BaseCircularProgressOptions } from '@webeach/gl-circular-progress';

import { shallowCompareArrays } from '../../utils/shallowCompareArrays';
import { shallowCompareObjects } from '../../utils/shallowCompareObjects';

export function compareOptions<Options extends BaseCircularProgressOptions>(
  prevOptions: Options,
  nextOptions: Options,
) {
  const { colors: nextColors, ...nextOptionsRest } = nextOptions;
  const { colors: prevColors, ...prevOptionsRest } = prevOptions;

  if (shallowCompareArrays(prevColors, nextColors)) {
    return false;
  }

  return shallowCompareObjects(prevOptionsRest, nextOptionsRest);
}
