import styled from "styled-components";
import { StyleButtons } from "../../styles/GlobalStyles";

export const HeaderDiv = styled.header`
  display: flex;
  width: 100%;
  height: 101px;
  padding: 40px 100px;
  box-shadow: 0px 0px 6px 0px;
  justify-content: space-between;
  align-items: center;

  background-color: var(--color-blue);
  color: var(--color-gray-100);

  button {
    ${StyleButtons}
    width: 90px;
    height: 45px;
    padding: 0px 12px;

    background-color: var(--color-gray-100);
    color: var(--grey-0);
    border: solid 1px var(--grey-1);

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 25px;
      height: 100%;
    }

    p {
      color: var(--color-gray-00);
      font-weight: 600;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;

  height: 40px;

  span {
    font-weight: 200;
    padding: 6px 0px;
  }
`;
