import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
`;

export const SearchInput = styled.input`
  border: none;
  margin-left: 5px;
  flex: 1;
  background: transparent;
  color: white;
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;
