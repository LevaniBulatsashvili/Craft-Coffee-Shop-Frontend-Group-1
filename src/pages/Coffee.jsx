import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import coffee from "../assets/coffee.webp"
import useFetch from '../hooks/useFetch';



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
  border-radius: 9px;
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
  const [coffeeList, setCoffeeList] = useState([]);
  const [currency, setCurrency] = useState('USD'); 
  
  const {data,loading,error }=useFetch (
      "https://crudapi.co.uk/api/v1/coffees",
      'GET',
      [],
      
      
    )
   
    useEffect(() => {
      console.log(data);

      
      if (data.length > 0) {
        setCoffeeList(data);
      } else {
        setCoffeeList(coffeeData);
      }
    }, [data]);

    if (loading) return <p>Loading...</p>;

  if (error) return <p>Error fetching coffee data.</p>;

  const toggleCurrency = () => {
    setCurrency(currency === 'USD' ? 'GEL' : 'USD'); 
  };

  const convertPrice = (price) => {
    
    if (typeof price !== 'number' || isNaN(price)) {
      return 'N/A';
    }///ეს თუ არ დავწერე ერორია თუ დავწერე  N/A' აბრუნებს
    if (currency === 'GEL') {
      return (price * 2.85).toFixed(2);
    }
    return price.toFixed(2) 
  };

  const calculatePrice = (items) => {
    // gavgo ari item tu ara array-Si
    if (!items || !Array.isArray(items)) {
      return 'N/A'; // თუ არ არის დააბრუნებს n/a
    }
  
    const total = items.reduce((initial, item) => {
      return initial + item.price; // daamatebs fraiss  initial mnSvnelobas 2
    }, 2); 
  
    return convertPrice(total); // daabrune mTliani fasi
  };

  return (
    <div>
      <CurrencyButton onClick={toggleCurrency}>
        Switch to {currency === 'USD' ? 'GEL' : 'USD'}
      </CurrencyButton>
      <Container>
      {coffeeList && coffeeList.length > 0 ? (
        coffeeList.map((coffee,index ) => (
            // {/* */ar imshava skhvanairad */}
          <Box key={coffee._uuid || index}> 
        
        <Image src={coffee.imageUrl} alt={coffee.title}/>
            <Content>
            <Title>{coffee.title}</Title>
            <Description>{coffee.description}</Description>
                <p>
                Price: {currency === 'USD' ? '$' : '₾'}
                 {calculatePrice(coffee.ingredients)}
                </p>
                <Button>Learn More</Button>
              </Content>
            </Box>
          ))
        ) : (
          <p>No coffees available.</p>
        )}
      </Container>
    </div>
  );
};

export default CoffeePage;
