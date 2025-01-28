import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  padding: 10px;
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
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 180px;
`;

const Title = styled.h3`
  font-size: 20px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  overflow: hidden;
`;

const Price = styled.p`
  margin-top: auto;
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

function StyledCard({ item, img, price }) {
  const navigate = useNavigate();

  const viewDetails = (id) =>
    navigate(`/${item.title ? "coffees" : "ingredients"}/details/${id}`);

  return (
    <Card>
      <Image src={img} alt={item.title ? item.title : item.name} />

      <Content>
        <Title>{item.title || item.name}</Title>
        <Description>{item.description}</Description>
        <Price>{price}</Price>
        <Button onClick={() => viewDetails(item._uuid)}>Learn More</Button>
      </Content>
    </Card>
  );
}

export default StyledCard;
