import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 13rem;
  max-height: 100%;
  display: flex;
  justify-content: baseline;
  border-bottom: 1px solid #575757;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 3rem;

  display: flex;
  flex-direction: column;

  h1 {
    padding-left: 3rem;
    font-size: 2.2rem;
    color: #fff;
    font-weight: bold;
  }
`;

export const WrapperInput = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  width: 85%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  label {
    color: #fff;
    font-size: 1.2rem;
    margin-right: 10px;
    @media screen and (max-width: 1080px) {
      padding-left: 0;
    }
  }
  input {
    background-color: #121214;
    width: 10rem;
    height: 35px;
    border-radius: 5px;
    margin-right: 10px;
    border-right: 1px solid #767676;
    color: #fff;
    border-bottom: 1px solid #767676;
    padding-left: 1rem;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    &:focus {
      border-top: none;
      border-left: none;
      border-bottom: 1px solid #fff;
      border-right: 1px solid #fff;
    }
    @media screen and (max-width: 1080px) {
      margin-bottom: 2rem;
      margin-right: 0;
    }
    @media screen and (max-width: 1080px) {
      margin-top: 1rem;
    }
  }

  button {
    width: 11.1rem;
    height: 40px;
    font-weight: bold;
    background-color: #000;
    border: 1px solid #fff;
    color: #fff;
    font-size: 0.8rem;
    border-radius: 5px;
    transition: 0.2s all ease-in;

    &:hover {
      color: black;
      background-color: #fff;
      cursor: pointer;
    }
    @media screen and (max-width: 1080px) {
      margin-bottom: 2rem;
    }
  }
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 3rem;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    padding-left: 0;
  }
`;
