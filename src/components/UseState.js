import React, { useState } from 'react';

const UseState = () => {
  const [inputValue, setInputValue] = useState('Brian');

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input
        type="text"
        placeholder="Enter something..."
        value={inputValue}
        onChange={onChange}
        className="border border-gray-300 p-2 rounded mb-4"
      />
      <div className="text-2xl font-semibold">{inputValue}</div>
    </div>
  );
};

export default UseState;
