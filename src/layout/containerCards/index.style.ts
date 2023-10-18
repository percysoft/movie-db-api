import styled from "styled-components";

export const CardGrid = styled.div`
  margin: 5% 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-content: center;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
