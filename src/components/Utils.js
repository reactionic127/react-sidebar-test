import namor from 'namor';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newProject = () => {
  return {
    name: namor.generate({ words: 3, numbers: 1 }),
    id: Math.floor(10000000 + (Math.random() * 9000000))
  };
};

export function makeData(len = 10) {
  return range(len).map(d => {
    return {
      ...newProject(),
      children: range(10).map(newProject)
    };
  });
}
