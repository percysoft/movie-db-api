import styled from "styled-components";
import { COLORS } from "../../constant/colors";

export const CardContainer = styled.div`
  width: 19rem;
  background-color: ${COLORS.WHITE};
  border-radius: 10px;
  overflow: hidden;
  margin: 10px auto;
  max-height: 460px;
  cursor: pointer;
  position: relative;
  box-shadow: ${COLORS.BOX_SHADOW};
`;

export const ContainerCardImage = styled.div`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CardImage = styled.img`
  object-fit: fill;
  border-radius: 20px;
`;

export const CardTitle = styled.h2`
  color: ${COLORS.BLACK};
  font-size: 1.2rem;
  padding: 10px;
  margin: 0;
  text-align: center;
`;

export const CardSubTitle = styled.h3`
  color: ${COLORS.BLACK};
  font-size: 0.8rem;
  padding: 10px;
  margin: 0;
  text-align: center;
`;

export const ContainerInfo = styled.div`
  position: absolute;
  bottom: 0;
  background: ${COLORS.WHITE};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContainerLoad = styled.div`
  position: absolute;
  background: white;
  height: 100%;
  width: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
`;
