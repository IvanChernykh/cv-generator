export const combineWordsWithComma = (...args: string[]) => {
  return [args].filter(Boolean).join(', ');
};
