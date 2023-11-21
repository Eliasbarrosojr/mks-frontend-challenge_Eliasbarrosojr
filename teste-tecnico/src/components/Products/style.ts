import styled from "styled-components";

export const ProductList = styled.ul`
  border-radius: 5px;
  display: flex;
  margin: auto;
  width: 100vw;
  max-width: 1000px;
  gap: 40px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const Paragraph = styled.p`
  font-size: 400;
  width: 200px;
  height: 80px;
  color: var(--color-gray-00);
`;

export const ContentLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;
