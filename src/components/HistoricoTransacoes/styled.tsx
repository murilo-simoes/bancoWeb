import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 20rem;
  max-height: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 3rem;
  h1 {
    font-size: 2.2rem;
    padding-left: 3rem;
    color: #fff;
    font-weight: bold;
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  padding-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  overflow-x: auto;

  .filtragem {
    font-size: 1.7rem;
    margin-right: 1rem;
  }

  .filtro {
    width: 45%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  .filtroh1 {
    font-size: 1.2rem;
    cursor: pointer;
    font-weight: bold;
    margin-right: 2rem;
    padding: 0;
    white-space: nowrap;
    border-bottom: 2px solid #fff;
  }

  /*tabela*/

  .table-fill {
    margin-left: 3rem;
    background: white;
    border-radius: 5px;
    border-collapse: collapse;
    height: 10rem;
    max-width: 600px;
    padding: 5px;
    width: 100%;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    animation: float 5s infinite;
  }

  th {
    color: #d5dde5;
    background: #565656;
    border-bottom: 4px solid #9ea7af;
    border-right: 1px solid #343a45;
    font-size: 23px;
    font-weight: 100;
    padding: 12px;
    text-align: left;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    vertical-align: middle;
  }

  th:first-child {
    border-top-left-radius: 3px;
  }

  th:last-child {
    border-top-right-radius: 3px;
    border-right: none;
  }

  tr {
    border-top: 1px solid #222223;
    border-bottom: 1px solid #c1c3d1;
    color: #fff;
    font-size: 1rem;
    font-weight: normal;
    text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
  }

  tr:first-child {
    border-top: none;
  }

  tr:last-child {
    border-bottom: none;
  }

  tr:nth-child(odd) td {
    background: #202024;
  }

  tr:last-child td:first-child {
    border-bottom-left-radius: 3px;
  }

  tr:last-child td:last-child {
    border-bottom-right-radius: 3px;
  }

  td {
    background: #222223;
    padding: 20px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 18px;
    text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
    border-right: 1px solid #222223;
  }

  td:last-child {
    border-right: 0px;
  }

  th.text-left {
    text-align: left;
  }

  th.text-center {
    text-align: center;
  }

  th.text-right {
    text-align: right;
  }

  td.text-left {
    text-align: left;
  }

  td.text-center {
    text-align: center;
  }

  td.text-right {
    text-align: right;
  }
`;
