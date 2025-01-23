import React, { useState } from 'react';
import styled from 'styled-components';
import coffee from "../assets/coffee.webp"

// Styled-components
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Box = styled.div`
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
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

const Title = styled.h3`
  font-size: 20px;
  margin: 10px 0;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: darkgoldenrod;
  }
`;

const CurrencyButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: darkgoldenrod;
  }
`;

// Boxes
const coffeeData = [
  { id: 1, title: 'Espresso', description: 'A strong and bold coffee.', image: coffee, price: 5 },
  { id: 2, title: 'Cappuccino', description: 'A creamy and foamy delight.', image: coffee, price: 6 },
  { id: 3, title: 'Latte', description: 'Smooth and delicious coffee.', image: coffee, price: 5.5 },
  { id: 4, title: 'Americano', description: 'Simple and classic coffee.', image: coffee, price: 4.5 },
  { id: 5, title: 'Mocha', description: 'Coffee with a chocolate twist.', image: coffee, price: 7 },
  { id: 6, title: 'Macchiato', description: 'Espresso with a dollop of foam.', image: coffee, price: 4 },
  { id: 7, title: 'Affogato', description: 'Espresso poured over ice cream.', image: coffee, price: 8 },
  { id: 8, title: 'Flat White', description: 'Rich and velvety coffee.', image: coffee, price: 6.5 },
  { id: 9, title: 'Cold Brew', description: 'Smooth and refreshing cold coffee.', image: coffee, price: 5 },
  { id: 10, title: 'Irish Coffee', description: 'Coffee with a kick of whiskey.', image: coffee, price: 7.5 },
];

const CoffeePage = () => {
  const [currency, setCurrency] = useState('USD'); 

  const toggleCurrency = () => {
    setCurrency(currency === 'USD' ? 'GEL' : 'USD'); 
  };

  const convertPrice = (price) => {
    if (currency === 'GEL') {
      return (price * 2.7).toFixed(2); 
    }
    return price.toFixed(2); 
  };

  return (
    <div>
      <CurrencyButton onClick={toggleCurrency}>
        Switch to {currency === 'USD' ? 'GEL' : 'USD'}
      </CurrencyButton>
      <Container>
        {coffeeData.map((coffee) => (
          <Box key={coffee.id}>
            <Image src={coffee.image} alt={coffee.title} />
            <Content>
              <Title>{coffee.title}</Title>
              <Description>{coffee.description}</Description>
              <p>Price: {currency === 'USD' ? '$' : '₾'} {convertPrice(coffee.price)}</p>
              <Button>Learn More</Button>
            </Content>
          </Box>
        ))}
      </Container>
    </div>
  );
};

export default CoffeePage;


