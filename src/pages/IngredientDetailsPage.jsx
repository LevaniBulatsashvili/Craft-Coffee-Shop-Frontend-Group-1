import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import StyledSpinner from "../components/StyledSpinner";
import StyledError from "../components/StyledError";
import ingredientImg from "../assets/ingredient.png";
import useRate from "../hooks/useRate";
import StyledCurrencyBtn from "../components/StyledCurrencyBtn";
import StyledDetails from "../components/StyledDetails";
import setIngredientPrice from "../utils/setIngredientPrice";

const CoffeeDetailsPage = () => {
  const { id } = useParams();
  const [currency, setCurrency] = useState("GEL");
  const { rate, loading: rateLoading, error: rateError } = useRate();

  const {
    data: ingredient,
    loading: ingredientLoading,
    error: ingredientError,
  } = useFetch(`https://crudapi.co.uk/api/v1/ingredients/${id}`, "GET", {});

  const onCurrencyBtnClick = () =>
    setCurrency((prev) => (prev === "USD" ? "GEL" : "USD"));

  if (ingredientLoading || rateLoading) return <StyledSpinner />;
  if (ingredientError || rateError)
    return <StyledError text={ingredientError.message ?? rateError.message} />;

  return (
    <div>
      <StyledCurrencyBtn
        currency={currency}
        onCurrencyBtnClick={onCurrencyBtnClick}
      />
      <StyledDetails
        image={ingredientImg}
        product={ingredient}
        price={setIngredientPrice(currency, rate, ingredient.price)}
      ></StyledDetails>
    </div>
  );
};

export default CoffeeDetailsPage;
