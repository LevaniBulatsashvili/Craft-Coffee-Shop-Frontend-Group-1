import calculatePrice from "./calculatePrice";

const setCoffeePrice = (currency, rate, coffee) => {
  if (currency === "USD")
    return `Price: ${(calculatePrice(coffee) * rate).toFixed(2)} $`;
  return `Price: ${(calculatePrice(coffee) * 1).toFixed(2)} ₾`;
};

export default setCoffeePrice;
