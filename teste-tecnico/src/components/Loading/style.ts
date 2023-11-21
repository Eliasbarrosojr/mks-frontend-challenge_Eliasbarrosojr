import styled from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const LoadingIcon = styled(AiOutlineLoading3Quarters)`
  font-size: 2rem;
  margin: 200px auto 0;
  animation: spin 1s linear infinite;
  width: 100%;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
