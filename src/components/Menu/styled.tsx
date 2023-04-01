import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 6rem;
  max-height: 6rem;
  display: flex;
  justify-content: center;
  background-color: #000;
  align-items: center;
`;

export const LogoDiv = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  align-items: center;

  button {
    height: 2.3rem;
    width: 7rem;
    font-weight: bold;
    font-size: 0.9rem;
    background: none;
    color: #fff;
    border: 1px solid #fff;
    transition: 0.2s all ease-in;
    border-radius: 7px;

    &:hover {
      cursor: pointer;
      background-color: #fff;
      color: black;
    }
  }
`;
