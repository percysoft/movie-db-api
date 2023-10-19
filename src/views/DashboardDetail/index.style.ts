import styled from "styled-components";
import { COLORS } from "../../constant/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
  @media (min-width: 768px) {
    width: 100%;
    padding: 70px;
    display: flex;
    flex-direction: row;
    gap: 60px;
  }
  @media (min-width: 1024px) {
    width: 100%;
    padding: 70px;
    display: flex;
    flex-direction: row;
    gap: 60px;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: ${COLORS.BOX_SHADOW};
  @media (min-width: 768px) {
    width: 40%;
    display: flex;
    border-radius: 20px;
    box-shadow: ${COLORS.BOX_SHADOW};
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      border-radius: 20px;
    }
  }
  @media (min-width: 1024px) {
    width: 40%;
    display: flex;
    border-radius: 20px;
    box-shadow: ${COLORS.BOX_SHADOW};
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media (min-width: 1024px) {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const ContainerGender = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  div {
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
`;

export const SpanDetail = styled.h3`
  color: ${COLORS.BLACK};
  font-size: 1.2rem;
  padding: 10px;
  margin: 0;
  font-weight: bold;
`;
