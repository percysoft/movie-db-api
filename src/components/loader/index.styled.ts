import styled from "styled-components";
import { COLORS } from "../../constant/colors";

export const Container = styled.div`
  position: absolute;
`;

export const LoadingOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${COLORS.WHITE};
  z-index: 9999;
`;

export const LoadingSpinner = styled.div`
  border: 3px solid ${COLORS.WHITE2};
  border-top: 3px solid ${COLORS.BLUE};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
