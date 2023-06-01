import React, { useState } from 'react';

const LandingPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('inputValue', inputValue);
  };
return (
    <div>
      <h1>Landing Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default LandingPage;