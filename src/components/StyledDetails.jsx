import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  height: 43dvh;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #a5a5a5;
  border-radius: 9px;

  @media (max-width: 520px) {
    height: 58dvh;
  }
`;

const Headers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-height: 200px;

  & > div {
    display: flex;
  }

  & > div > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 520px) {
    & > div {
      align-items: center;
      gap: 15px;
      flex-direction: column-reverse;
    }
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
`;

const Image = styled.img`
  margin-left: 10px;
  width: 250px;
  border-radius: 9px;
  float: right;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: #000000de;
  gap: 15px;

  & > div:first-child {
    display: flex;
    gap: 15px;
  }

  @media (max-width: 520px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Price = styled.div`
  border: 1px solid black;
  border-radius: 9px;
  padding: 0.5rem;
  background-color: #0000ff8a;
  color: #fff;
`;

function StyledDetails({ product, image, price, children }) {
  return (
    <Container>
      <Headers>
        <Title>{product.title}</Title>
        <div>
          <div>
            <Description>{product.description}</Description>
            {children}
          </div>

          <Image src={image} alt={product.title} />
        </div>
      </Headers>

      <Details>
        <div>
          <p>
            <strong>{product.caffeine ? "Caffeine:" : "Strength:"}</strong>{" "}
            {product.caffeine ?? product.strength}
          </p>
          <p>
            <strong>{product.country ? "Country:" : "flavor:"}</strong>{" "}
            {product.country ?? product.flavor}
          </p>
        </div>

        <Price>{price}</Price>
      </Details>
    </Container>
  );
}

export default StyledDetails;
