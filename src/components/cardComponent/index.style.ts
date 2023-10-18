import styled from "styled-components";
import { COLORS } from "../../constant/colors";

export const CardContainer = styled.div`
  width: 80%;
  background-color: ${COLORS.WHITE};
  border-radius: 10px;
  overflow: hidden;
  margin: 10px auto;
  max-height: 400px;
  cursor: pointer;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CardTitle = styled.h2`
  color: ${COLORS.COLOR_TEXT};
  font-size: 1.2rem;
  padding: 10px;
  margin: 0;
`;

export const CardSubTitle = styled.h3`
  color: ${COLORS.COLOR_TEXT};
  font-size: 0.8rem;
  padding: 10px;
  margin: 0;
`;
