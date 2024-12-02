declare module 'prismjs' {
  export const highlight: (code: string, grammar: any, language: string) => string;
  export const languages: Record<string, any>;
  export const highlightAll: () => void;
  export default {
    highlight,
    languages,
    highlightAll
  };
}
