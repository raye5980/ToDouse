import React, { useState } from 'react';


export default function App() {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);

  const handleClick = () => {
    if (input !== '') {
      setList([...list, bolsa], setInput(''));
    }
  };
  const bolsa = {
    value: input,
    id: Date.now(),
  };
  function Remove(id) {
    const deletar = list.filter((item) => item.id !== id);
    setList(deletar);
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1>Metas de hoje:</h1>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        +
      </button>
      {list.map((item) => (
        <ul key={item.id}>
          <li>{item.value}</li>
          <button
            onClick={() => {
              Remove(item.id);
            }}
          >
            x
          </button>
        </ul>
      ))}
    </form>
  );
}
