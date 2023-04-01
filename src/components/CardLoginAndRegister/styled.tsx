import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 500px;
  background-color: #202024;
  @media screen and (max-width: 525px) {
    width: 320px;
  }
`;

export const WrapperElements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;

  h1 {
    margin-bottom: 3rem;
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
  }

  p {
    color: rgb(168, 168, 179);
    margin-top: 1rem;
  }

  input {
    margin-bottom: 1rem;
    height: 50px;
    background-color: rgb(18, 18, 20);
    color: #fff;
    width: 100%;
    border-radius: 5px;
    border-right: 1px solid #767676;
    border-bottom: 1px solid #767676;
    padding-left: 1rem;
    &:focus {
      border-top: none;
      border-left: none;
      border-bottom: 1px solid #fff;
      border-right: 1px solid #fff;
    }
  }
`;

export const Botao = styled.button`
  background-color: black;
  border: none;
  width: 105%;
  height: 50px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  transition: 0.2s all ease-in;

  &:hover {
    color: black;
    background-color: #fff;
    cursor: pointer;
  }
`;
