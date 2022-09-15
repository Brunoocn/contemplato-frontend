import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: #29292e;
    margin-top: 20px;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #737380;
    margin-top: 5px;
  }
  div {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    button {
      padding: 14px 24px 15px;
      background: #dbdcdd;
      border-radius: 8px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #737380;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(1.1);
      }
    }
    button.delete-button {
      background: #e73f5d;
      border-radius: 8px;
      padding: 14px 32px 15px;
      text-align: center;
      color: #fefefe;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      transition: filter 0.2s;
      &:hover {
        filter: brightness(1.1);
      }
    }
  }
`;
