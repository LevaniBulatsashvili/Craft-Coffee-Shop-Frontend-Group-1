import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Coffee from './pages/Coffee';
import Ingredients from './pages/Ingredients';
import CoffeeDetails from './pages/CoffeeDetails';
import IngredientDetails from './pages/IngredientDetails';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/coffee/details/:id" element={<CoffeeDetails />} />
        <Route path="/ingredient/details/:id" element={<IngredientDetails />} />
      </Routes>
    </div>
  );
};

export default App;

