const setIngredientPrice = (currency, rate, price) => {
  if (currency === "USD") return `Price: ${(price * rate).toFixed(2)} $`;
  return `Price: ${(price * 1).toFixed(2)} ₾`;
};

export default setIngredientPrice;
