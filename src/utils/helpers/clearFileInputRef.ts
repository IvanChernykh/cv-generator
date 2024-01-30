export const clearFileInputRef = (ref: React.RefObject<HTMLInputElement>) => {
  if (ref.current) {
    ref.current.files = null;
    ref.current.value = '';
  }
};
