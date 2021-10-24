import styled from "styled-components";

export const StyledGalleryContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const StyledFilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

export const StyledFilter = styled.button`
  font-family: "Ephesis", cursive;
  font-size: 30px;
  padding: 5px;
  border: none;
  background-color: transparent;
  &:hover {
    color: ${({ theme }) => theme.mainRed};
  }
`;
