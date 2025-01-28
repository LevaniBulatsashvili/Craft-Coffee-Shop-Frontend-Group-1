import React, { useState } from "react";
import coffeeImg from "../assets/coffee.webp";
import useFetch from "../hooks/useFetch";
import useRate from "../hooks/useRate";
import StyledSpinner from "../components/StyledSpinner";
import StyledError from "../components/StyledError";
import StyledCurrencyBtn from "../components/StyledCurrencyBtn";
import StyledCardContainer from "../components/StyledCardContainer";
import StyledCard from "../components/StyledCard";
import StyledNoProducts from "../components/StyledNoProducts";
import setCoffeePrice from "../utils/setCoffeePrice";

const CoffeesPage = () => {
  const [currency, setCurrency] = useState("GEL");
  const { rate, loading: rateLoading, error: rateError } = useRate();

  const {
    data: coffees,
    loading: coffeesLoading,
    error: coffeesError,
  } = useFetch("https://crudapi.co.uk/api/v1/coffees", "GET", []);

  const onCurrencyBtnClick = () =>
    setCurrency((prev) => (prev === "USD" ? "GEL" : "USD"));

  if (rateLoading || coffeesLoading) return <StyledSpinner />;
  if (rateError || coffeesError)
    return (
      <StyledError
        text={rateError ? rateError.message : coffeesError.message}
      />
    );

  return (
    <div>
      {coffees.length !== 0 ? (
        <>
          <StyledCurrencyBtn
            currency={currency}
            onCurrencyBtnClick={onCurrencyBtnClick}
          />
          <StyledCardContainer>
            {coffees.map((coffee) => (
              <StyledCard
                key={coffee._uuid}
                item={coffee}
                img={coffeeImg}
                price={setCoffeePrice(currency, rate, coffee.ingredients)}
              />
            ))}
          </StyledCardContainer>
        </>
      ) : (
        <StyledNoProducts products="coffees" />
      )}
    </div>
  );
};

export default CoffeesPage;
