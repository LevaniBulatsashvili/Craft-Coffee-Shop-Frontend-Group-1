import styled from "styled-components";

const Container = styled.div`
  margin-top: 14dvh;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Error = styled.div`
  font-size: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #ed0000cc;
`;

function StyledError({ text }) {
  return (
    <Container>
      <Error>{text}</Error>
    </Container>
  );
}

export default StyledError;
