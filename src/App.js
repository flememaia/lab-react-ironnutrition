import React from 'react';
import './App.css';

import FoodBox from './component/FoodBox';
import Food from './component/Food';

function App() {
  return (
      <div class="container">
        <h1 class="title">IronNutrition</h1>
        <Food />;
      </div>
  );
} 

export default App;
