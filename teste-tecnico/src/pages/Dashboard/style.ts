import styled from "styled-components";

export const ShopPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  main {
    padding: 20px 0;
    background-color: var(--color-gray-100);
    height: 100vh;
    margin: 0px 0px 60px 0px;
  }

  footer {
    display: flex;
    background-color: var(--color-gray-90);
    height: 34px;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    main {
      padding: 20px 0;
      background-color: var(--color-gray-100);
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0px 0px 60px 0px;
    }

    footer {
      display: flex;
      background-color: var(--color-gray-90);
      height: 34px;
      justify-content: center;
      align-items: center;
    }
  }
`;
