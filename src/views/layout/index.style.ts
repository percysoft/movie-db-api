import styled from "styled-components";
import { COLORS } from "../../constant/colors";

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`;
export const ContainerButonOption = styled.button`
  display: flex;
  gap: 30px;
`;

interface ButtonOptionProps {
  active: boolean;
}

export const ButtonOption = styled.button<ButtonOptionProps>`
  color: ${COLORS.BLACK};
  font-size: 1.2rem;
  padding: 10px;
  margin: 0;
  border-bottom: ${(props) =>
    props.active ? `3px solid ${COLORS.BLACK}` : "none"};
`;

export const LogoImg = styled.img`
  width: "200px";
`;
