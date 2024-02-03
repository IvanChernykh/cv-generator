export const moveItem = <T>(arr: T[], sourceIdx: number, targetIdx: number) => {
  if (sourceIdx === targetIdx) {
    return arr;
  }
  const arrCopy = [...arr];
  const elem = { ...arrCopy[sourceIdx] };

  arrCopy.splice(sourceIdx, 1);
  arrCopy.splice(targetIdx, 0, elem);

  return arrCopy.map((item) => item);
};
