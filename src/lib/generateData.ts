const generateData = (numPoints: number): number[] => {
  const data: number[] = [];
  for (let i = 0; i < numPoints; i++) {
    const num = Math.floor(Math.random() * 100);
    data.push(num);
  }
  return data;
};

export default generateData;
