import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  max-width: 486px;
  height: 100vh;
  padding: 40px 40px;
  background-color: var(--color-blue);

  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 375px) {
    width: 100%;
    max-width: 330px;
    padding: 17px 16px;
    display: flex;
    flex-direction: column;
    gap: 11px;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    color: var(--color-gray-100);
    font-size: 4rem;
    width: 225px;
  }

  button {
    width: 38px;
    height: 38px;
    border-radius: 90%;
    border: var(--color-gray-00);
    background-color: var(--color-gray-00);
    color: var(--color-gray-100);
  }

  @media (max-width: 375px) {
    h2 {
      color: var(--color-gray-100);
      font-size: 2.5rem;
      width: 178px;
    }
  }
`;

export const CartList = styled.ul`
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 375px) {
    flex-grow: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
`;

export const CartFooter = styled.footer`
  width: 100%;
  height: 200px;
  background-color: var(--color-blue);
  color: var(--color-gray-100);
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 90px;
    background-color: var(--color-blue);

    h3 {
      font-size: 36px;
    }

    span {
      font-size: 36px;
    }
  }

  button {
    width: 100%;
    height: 97px;
    background-color: var(--color-gray-00);
    color: var(--color-gray-100);
    border-radius: 8px;
    border: var(--color-gray-00);

    font-size: 2.3rem;
    font-weight: 300;
  }

  @media (max-width: 375px) {
    display: flex;
    background-color: var(--color-blue);
    height: 88px;
    justify-content: center;
    align-items: center;

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 90px;
      align-items: center;
      background-color: var(--color-blue);

      h3 {
        font-size: 19px;
      }

      span {
        font-size: 19px;
      }
    }

    button {
      width: 100%;
      height: 97px;
      background-color: var(--color-gray-00);
      color: var(--color-gray-100);
      border-radius: 8px;
      border: var(--color-gray-00);

      font-size: 3rem;
      font-weight: 500;
    }
  }
`;
