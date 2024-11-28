// composables/useCloneDeep.ts
import { cloneDeep } from 'lodash';

export const useLodash = () => {
  const deepClone = (value: any): any => {
    return cloneDeep(value);
  };

  return {
    deepClone,
  };
};
