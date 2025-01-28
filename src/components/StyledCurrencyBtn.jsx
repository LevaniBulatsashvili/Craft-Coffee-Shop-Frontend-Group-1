import styled from "styled-components";

const CurrencyBtn = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkgoldenrod;
  }
`;

function StyledCurrencyBtn({ currency, onCurrencyBtnClick }) {
  return (
    <CurrencyBtn onClick={onCurrencyBtnClick}>
      Switch to {currency === "USD" ? "GEL" : "USD"}
    </CurrencyBtn>
  );
}

export default StyledCurrencyBtn;
