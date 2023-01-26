const generateData = (numPoints: number): number[] => {
  //  Generate data dan tidak ada data yang sama
  const data: number[] = [];
  for (let i = 0; i < numPoints; i++) {
    const randomNum = Math.floor(Math.random() * numPoints) + 1;
    if (data.includes(randomNum)) {
      i--;
    } else {
      data.push(randomNum);
    }
  }
  return data;
};

export default generateData;
