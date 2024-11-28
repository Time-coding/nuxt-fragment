// composables/useDate.ts
import dayjs from 'dayjs';

export const useDate = () => {
  // 定义返回的数据类型
  const formatDate = (date: string| number | Date, format: string = 'YYYY-MM-DD'): string => {
    return dayjs(date).format(format);
  };

  // 返回函数，并声明返回类型
  return { formatDate };
};
