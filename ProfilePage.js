import React from 'react';

const ProfilePage = () => {
  const inputValue = localStorage.getItem('inputValue');

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

export default ProfilePage;