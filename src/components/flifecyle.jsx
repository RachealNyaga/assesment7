import React, { useState, useEffect } from 'react';

function FavoriteFruit() {
  const [fruit, setFruit] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const fruits = ["apple", "banana", "orange", "strawberry"];
      const randomIndex = Math.floor(Math.random() * fruits.length);
      setFruit(fruits[randomIndex]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>My Favorite Fruit is:</h1>
      <h2>{fruit}</h2>
    </div>
  );
}

export default FavoriteFruit;
