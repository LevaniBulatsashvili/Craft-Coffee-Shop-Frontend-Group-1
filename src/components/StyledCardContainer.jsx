import styled from "styled-components";

const CardContainer = styled.div`
  min-width: 80dvw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 400px));
  gap: 20px;
`;

function StyledCardContainer({ children }) {
  return <CardContainer>{children}</CardContainer>;
}

export default StyledCardContainer;
