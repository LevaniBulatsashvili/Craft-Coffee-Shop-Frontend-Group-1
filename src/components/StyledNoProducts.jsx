import styled from "styled-components";

const Container = styled.div`
  margin-top: 14dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60dvw;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #3d33be;
`;

function StyledNoProducts({ products }) {
  return (
    <Container>
      <Title>No {products} available.</Title>
    </Container>
  );
}

export default StyledNoProducts;
