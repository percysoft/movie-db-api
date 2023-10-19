import React, { useState } from "react";
import { SearchContainer, SearchInput, SearchButton } from "./index.styled";

interface ISearchComponent {
  type?: string;
  placeholder?: string;
  textButton?: string;
  handleButton: () => void;
  getValue: (value: string) => void;
  showButton?: boolean;
}
export const SearchComponent = ({
  type = "text",
  placeholder = "Buscar...",
  textButton = "Buscar",
  handleButton = () => {},
  getValue,
  showButton = false,
}: ISearchComponent) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <SearchContainer>
      <SearchInput
        type={type}
        placeholder={placeholder}
        value={searchInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchInput(e.target.value);
          getValue(e.target.value);
        }}
      />
      {showButton && (
        <SearchButton onClick={handleButton}>{textButton}</SearchButton>
      )}
    </SearchContainer>
  );
};
