import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import useRate from "../hooks/useRate";
import StyledSpinner from "../components/StyledSpinner";
import StyledError from "../components/StyledError";
import coffeeImg from "../assets/coffee.webp";
import calculatePrice from "../utils/calculatePrice";
import StyledCurrencyBtn from "../components/StyledCurrencyBtn";
import StyledDetails from "../components/StyledDetails";
import setCoffeePrice from "../utils/setCoffeePrice";

const CoffeeIngredients = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  list-style: none;
  padding-left: 0;
  font-size: 14px;
  color: #555;
`;

const CoffeeIngredient = styled.li`
  cursor: pointer;
  font-weight: 800;
  padding: 8px;
  border: 1px solid black;
  border-radius: 12px;
  margin-bottom: 5px;
  background-color: #008000a3;
  color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: #008000f5;
  }
`;

const CoffeeDetailsPage = () => {
  const { id } = useParams();
  const [currency, setCurrency] = useState("GEL");
  const { rate, loading: rateLoading, error: rateError } = useRate();
  const navigate = useNavigate();

  const {
    data: coffee,
    loading: coffeeLoading,
    error: coffeeError,
  } = useFetch(`https://crudapi.co.uk/api/v1/coffees/${id}`, "GET", {});

  const onCurrencyBtnClick = () =>
    setCurrency((prev) => (prev === "USD" ? "GEL" : "USD"));
  const toIngredientDetails = (id) => navigate(`/ingredients/details/${id}`);

  if (coffeeLoading || rateLoading) return <StyledSpinner />;
  if (coffeeError || rateError)
    return <StyledError text={coffeeError.message ?? rateError.message} />;

  return (
    <div>
      <StyledCurrencyBtn
        currency={currency}
        onCurrencyBtnClick={onCurrencyBtnClick}
      />

      <StyledDetails
        image={coffeeImg}
        product={coffee}
        price={
          coffee.ingredients &&
          setCoffeePrice(currency, rate, coffee.ingredients)
        }
      >
        <CoffeeIngredients>
          {coffee.ingredients &&
            coffee.ingredients.map((ingredient) => (
              <CoffeeIngredient
                key={ingredient._uuid}
                onClick={() => toIngredientDetails(ingredient._uuid)}
              >
                {ingredient.name}
              </CoffeeIngredient>
            ))}
        </CoffeeIngredients>
      </StyledDetails>
    </div>
  );
};

export default CoffeeDetailsPage;
