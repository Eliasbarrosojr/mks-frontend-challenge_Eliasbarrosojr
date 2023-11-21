import styled from "styled-components";

export const CartIItem = styled.li`
  width: 385px;
  height: 101px;
  background-color: var(--color-gray-100);
  border-radius: 10px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 50px;
  }

  button {
    width: 17px;
    height: 17px;
    border-radius: 90%;
    border: var(--color-gray-00);
    background-color: var(--color-gray-00);
    color: var(--color-gray-100);
    position: relative;
    top: -39px;
    right: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    color: var(--color-gray-00);
    width: 84px;
  }

  span {
    font-weight: 600;
  }

  @media (max-width: 375px) {
    width: 250px;
    height: 220px;
  }
`;

export const Quantity = styled.div`
  width: 64px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  border: 1px solid var(--color-gray-90);
  background-color: var(--color-gray-100);

  button {
    position: static;
    background-color: var(--color-gray-100);
    color: var(--color-gray-60);
  }

  span {
    font-weight: 400;
  }
`;
