import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  min-height: 70dvh;
`;

function PageContainer({ children }) {
  return <Container>{children}</Container>;
}

export default PageContainer;
