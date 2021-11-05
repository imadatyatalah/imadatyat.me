// Source: https://github.com/delbaoliveira/website/blob/6b24c4eda9e972e5906cf4ca72d9af7db0863ace/lib/shuffleArray.ts#L2

export const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};
