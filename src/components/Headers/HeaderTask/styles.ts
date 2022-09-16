import styled from "styled-components";

export const Container = styled.header`
  background: var(--background);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    gap: 40px;

    li {
      text-transform: uppercase;
      list-style: none;

      a {
        text-decoration: none;

        &:hover {
          transition: filter 0.2s;
          filter: brightness(1.1);
        }
      }
    }
  }

  div {
    display: flex;
    gap: 30px;

    button {
      font-size: 1rem;
      color: #fff;
      background: var(--purple-light);
      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;
      transition: filter 0.2s;

      @media (max-width: 767px) {
        padding: 0 1.2rem;
      }

      &:hover {
        filter: brightness(1.1);
      }
    }
  }
`;
