import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 275px;
  background-color: #202024;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border-bottom: 1px solid #575757;
  color: #fff;

  h1 {
    font-weight: bold;
    font-size: 3rem;
    padding-top: 3rem;

    @media screen and (max-width: 525px) {
      font-size: 2rem;
    }
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  flex-wrap: wrap;

  h1 {
    font-size: 2rem;
    margin-top: 1rem;
    font-style: italic;
    &:first-child {
      margin-right: 1rem;
    }
    @media screen and (max-width: 525px) {
      font-size: 1.3rem;
    }
  }
  .bold {
    color: #870a30;
  }
  .money {
    padding-left: 3rem;
  }
`;
