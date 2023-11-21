import styled from "styled-components";
import { StyleButtons } from "../../../styles/GlobalStyles";

export const ProductItem = styled.li`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: var(--color-gray-100);

  border-radius: 10px;
  width: 218px;
  height: 290px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  button {
    ${StyleButtons}
    background-color: var(--color-blue);

    border-radius: 0px 0px 10px 10px;
    border: var(--color-blue);

    height: 31px;
    color: var(--color-gray-100);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;

export const StyleImage = styled.div`
  img {
    height: 126px;
    padding: 5px 0px 0px 0px;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;

  width: 100%;
  padding: 4px;

  h2 {
    font-size: 19px;
  }
  p {
    font-size: 15px;
    width: 147px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 30px;
    border-radius: 5px;
    padding: 4px;

    background-color: var(--color-gray-40);
    color: var(--color-gray-100);
  }
`;

export const Paragraph = styled.div`
  height: 25px;
  padding: 4px;

  p {
    font-size: 12px;
  }
`;
