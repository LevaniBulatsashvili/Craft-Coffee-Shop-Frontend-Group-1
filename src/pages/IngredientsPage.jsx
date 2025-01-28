import React, { useState } from "react";
import ingredientImg from "../assets/ingredient.png";
import useFetch from "../hooks/useFetch";
import useRate from "../hooks/useRate";
import StyledSpinner from "../components/StyledSpinner";
import StyledError from "../components/StyledError";
import StyledCurrencyBtn from "../components/StyledCurrencyBtn";
import StyledCardContainer from "../components/StyledCardContainer";
import StyledCard from "../components/StyledCard";
import StyledNoProducts from "../components/StyledNoProducts";
import setIngredientPrice from "../utils/setIngredientPrice";

const IngredientsPage = () => {
  const [currency, setCurrency] = useState("GEL");
  const { rate, loading: rateLoading, error: rateError } = useRate();

  const {
    data: ingredients,
    loading: ingredientsLoading,
    error: ingredientsError,
  } = useFetch("https://crudapi.co.uk/api/v1/ingredients", "GET", []);

  const onCurrencyBtnClick = () =>
    setCurrency((prev) => (prev === "USD" ? "GEL" : "USD"));

  if (rateLoading || ingredientsLoading) return <StyledSpinner />;
  if (rateError || ingredientsError)
    return (
      <StyledError
        text={rateError ? rateError.message : ingredientsError.message}
      />
    );

  return (
    <div>
      {ingredients.length !== 0 ? (
        <>
          <StyledCurrencyBtn
            currency={currency}
            onCurrencyBtnClick={onCurrencyBtnClick}
          />
          <StyledCardContainer>
            {ingredients.map((ingredient) => (
              <StyledCard
                key={ingredient._uuid}
                item={ingredient}
                img={ingredientImg}
                price={setIngredientPrice(currency, rate, ingredient.price)}
              />
            ))}
          </StyledCardContainer>
        </>
      ) : (
        <StyledNoProducts products="ingredients" />
      )}
    </div>
  );
};

export default IngredientsPage;
