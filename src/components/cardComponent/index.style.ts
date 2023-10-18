import styled from "styled-components";

export const CardContainer = styled.div`
  width: 80%;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 10px auto;
  max-height: 400px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CardTitle = styled.h2`
  color: #143f86;
  font-size: 1.2rem;
  padding: 10px;
  margin: 0;
`;
