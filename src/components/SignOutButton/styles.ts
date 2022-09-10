import styled from "styled-components";

export const Button = styled.button`
  font-size: 1rem;
  background: transparent!important;
  border: 0;
  padding: 0 1rem;

  img {
    width: 30px;
  }

  @media (max-width: 767px) {
    padding: 0 1.2rem;
  }
`;
