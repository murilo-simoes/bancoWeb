import { Container, Wrapper, WrapperInput, InputsDiv } from "./styled";
import CurrencyInput from "react-currency-input-field";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Transacoes = () => {
  const [number, setNumber] = useState("");
  const [username, setUsername] = useState("");
  // toasts de resposta para o usuário
  const notifySaldo = () => toast.warning("Saldo insuficiente!");
  const notifyType = () =>
    toast.warning("Por favor, informe um valor numérico!");
  const notifyUser = () =>
    toast.warning("Não é possível realizar uma transferência para si mesmo!");
  const notifyNotUser = () => toast.warning("A conta não existe!");
  const notifyEmpty = () =>
    toast.warning("Por favor, preencha os campos corretamente!");
  const notify = () => toast.success("Valor enviado com sucesso!");

  // função de transferência
  async function sendMoney() {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const userLogged = await api.post("/user", { token });
    const response = await api.post("/transfer", {
      origin: userLogged.data.username,
      destiny: username,
      val: parseInt(number),
    });
    try {
      if (username === "" || number === "") {
        return notifyEmpty();
      }
      if (response.data === "Usuário não existe!") {
        return notifyNotUser();
      }
      if (response.data === "Saldo insuficiente!") {
        return notifySaldo();
      }
      if (response.data === "Não é um número!") {
        return notifyType();
      }
      if (
        response.data ===
        "Não é possível realizar uma transferência para si mesmo!"
      ) {
        notifyUser();
      }

      notify();
      setUsername("");
      setNumber("");

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Container>
        <ToastContainer theme="dark" />
        <Wrapper>
          <h1>Realizar Transferência</h1>
          <WrapperInput>
            <InputsDiv>
              <label>Usuário para enviar</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Usuário"
              />
              <label>Valor</label>
              <input
                type={"number"}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="R$0,00"
              />
            </InputsDiv>
            <div>
              <button onClick={sendMoney} type="submit">
                ENVIAR
              </button>
            </div>
          </WrapperInput>
        </Wrapper>
      </Container>
    </>
  );
};

export default Transacoes;
