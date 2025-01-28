import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./layouts/Header";
import PageContainer from "./layouts/PageContainer";
import styled from "styled-components";
import CoffeesPage from "./pages/CoffeesPage";
import IngredientsPage from "./pages/IngredientsPage";
import CoffeeDetailsPage from "./pages/CoffeeDetailsPage";
import IngredientDetailsPage from "./pages/IngredientDetailsPage";

const StyledApp = styled.div`
  min-height: 100dvh;
  background-color: #f4f4f9;
`;

const App = () => {
  return (
    <StyledApp>
      <Header />
      <PageContainer>
        <Routes>
          <Route path="/" element={<Navigate to="/coffees" replace />} />
          <Route path="/coffees" element={<CoffeesPage />} />
          <Route path="/ingredients" element={<IngredientsPage />} />
          <Route path="/coffees/details/:id" element={<CoffeeDetailsPage />} />
          <Route
            path="/ingredients/details/:id"
            element={<IngredientDetailsPage />}
          />
        </Routes>
      </PageContainer>
    </StyledApp>
  );
};

export default App;
