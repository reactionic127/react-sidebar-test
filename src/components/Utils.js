import React from "react";
import namor from "namor";
import "../styles/index.css";

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
    id: Math.floor(10000000 + Math.random() * 9000000)
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

export const Logo = () =>
  <div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
    For more examples, visit {''}
  <br />
    <a href="https://github.com/react-tools/react-table" target="">
      <img
        alt="avatar"
        src="https://github.com/react-tools/media/raw/master/logo-react-table.png"
        style={{ width: `150px`, margin: ".5em auto .3em" }}
      />
    </a>
  </div>;

export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;