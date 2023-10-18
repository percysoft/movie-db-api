import styled from "styled-components";
import { COLORS } from "../../constant/colors";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLORS.WHITE};
  border-radius: 5px;
  padding: 5px;
`;

export const SearchInput = styled.input`
  border: none;
  margin-left: 5px;
  flex: 1;
  background: transparent;
  color: ${COLORS.WHITE};
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  background-color: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;
