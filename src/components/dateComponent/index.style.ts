import styled from "styled-components";
import { COLORS } from "../../constant/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    border: 1px solid ${COLORS.BLACK};
    padding: 10px;
    border-radius: 20px;
  }
`;

export const Title = styled.h2`
  color: ${COLORS.BLACK};
  font-size: 1.2rem;
  padding: 10px;
  margin: 0;
`;
