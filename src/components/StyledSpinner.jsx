import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  margin-top: 4dvh;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #4f4f4f;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: ${spin} 1.5s linear infinite;
`;

function StyledSpinner() {
  return (
    <Container>
      <Spinner></Spinner>
    </Container>
  );
}

export default StyledSpinner;
