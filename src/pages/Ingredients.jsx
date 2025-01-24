import React, { useState } from 'react';
import styled from 'styled-components';
import ingredients from "../assets/ingredients.png"

// Styled-components
const CoffeeCatalog = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const CoffeeItem = styled.div`
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 9px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 15px;
`;

const CoffeeName = styled.h3`
  font-size: 20px;
  margin: 10px 0;
  color: #333;
`;

const CoffeeDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 10px;
`;

const CoffeePrice = styled.p`
  font-size: 16px;
  margin-top: 10px;
  color: #333;
`;

const LearnMoreButton = styled.button`
  background-color: #333;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 0.9rem;
  
  &:hover {
    background-color: darkgoldenrod;
  }
`;

const CoffeeDetails = styled.p`
  font-size: 0.9rem;
  color: #333;
  margin-top: 15px;
  display: ${props => (props.showDetails ? 'block' : 'none')};
`;

const ToggleButton = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkgoldenrod;
  }
`;

const coffeeData = [
  { name: 'Espresso', description: 'Ingredients', priceUSD: 4.0, image: ingredients, details: 'Ingredients' },
  { name: 'Cappuccino', description: 'Ingredients', priceUSD: 4.0, image: ingredients, details: 'Ingredients' },
  { name: 'Latte', description: 'Ingredients', priceUSD: 4.0, image: ingredients, details: 'Ingredients' },
  { name: 'Americano', description: 'Ingredients', priceUSD: 4.0, image: ingredients, details: 'Ingredients' },
  { name: 'Mocha', description: 'Ingredients', priceUSD: 3.0, image: ingredients, details: 'Ingredients' },
  { name: 'Macchiato', description: 'Ingredients', priceUSD: 3.0, image: ingredients, details: 'Ingredients' },
  { name: 'Affogato', description: 'Ingredients', priceUSD: 3.0, image: ingredients, details: 'Ingredients' },
  { name: 'Flat White', description: 'Ingredients', priceUSD: 4.0, image: ingredients, details: 'Ingredients' },
  { name: 'Cold Brew', description: 'Ingredients', priceUSD: 4.0, image: ingredients, details: 'Ingredients' },
  { name: 'Irich Coffee', description: 'Ingredients', priceUSD: 3.0, image: ingredients, details: 'Ingredients' }
];

const Ingredients = () => {
  const [isUSD, setIsUSD] = useState(true); 
  const [showDetails, setShowDetails] = useState(null); 
  const exchangeRate = 2.85; 

  const toggleCurrency = () => {
    setIsUSD(!isUSD);
  };

  const toggleDetails = (index) => {
    setShowDetails(showDetails === index ? null : index);
  };

  return (
    <div>
      <ToggleButton onClick={toggleCurrency}>
        {isUSD ? 'Switch to GEL' : 'Switch to USD'}
      </ToggleButton>
      <CoffeeCatalog>
        {coffeeData.map((coffee, index) => {
          const price = isUSD ? coffee.priceUSD : (coffee.priceUSD * exchangeRate).toFixed(2);
          const currency = isUSD ? 'USD' : 'GEL';
          
          return (
            <CoffeeItem key={index}>
              <Image src={coffee.image} alt={coffee.title} />
              <Content>
                <CoffeeName>{coffee.name}</CoffeeName>
                <CoffeeDescription>{coffee.description}</CoffeeDescription>
                <CoffeePrice>{price} {currency}</CoffeePrice>
                <LearnMoreButton onClick={() => toggleDetails(index)}>
                  Learn More
                </LearnMoreButton>
              </Content>
              <CoffeeDetails showDetails={showDetails === index}>
                {coffee.details}
              </CoffeeDetails>
            </CoffeeItem>
          );
        })}
      </CoffeeCatalog>
    </div>
  );
};

export default Ingredients;
