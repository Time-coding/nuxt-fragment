// 定义 RGBAColor 类型
type RGBAColor = {
  r: number; // 红色分量，取值范围 0-255
  g: number; // 绿色分量，取值范围 0-255
  b: number; // 蓝色分量，取值范围 0-255
  a: number; // 透明度分量，取值范围 0-1
};

// 定义函数 parseRGBA，接收一个字符串参数并返回 RGBAColor 类型
function parseRGBA(rgba: string): RGBAColor {
  const matches = rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/) as RegExpMatchArray | null;

  // 如果正则匹配失败，抛出错误
  if (!matches) {
    throw new Error('Invalid RGBA color format');
  }

  // 检查所有捕获组是否存在
  const r = matches[1] !== undefined ? parseInt(matches[1], 10) : 0;
  const g = matches[2] !== undefined ? parseInt(matches[2], 10) : 0;
  const b = matches[3] !== undefined ? parseInt(matches[3], 10) : 0;
  const a = matches[4] !== undefined ? parseFloat(matches[4]) : 1;

  return { r, g, b, a };
}

export function setAlpha(rgba: string, newAlpha: number): string {
  const { r, g, b } = parseRGBA(rgba);
  return `rgba(${r}, ${g}, ${b}, ${newAlpha})`;
}
