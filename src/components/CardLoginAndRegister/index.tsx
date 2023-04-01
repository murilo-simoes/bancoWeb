import Link from "next/link";
import { useEffect, useState } from "react";
import { api, setAuthToken } from "../../lib/axios";
import { Container, Wrapper, Botao, WrapperElements } from "./styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// props para reutilizar o card
interface ElementsProps {
  title: string;
  buttonText: string;
  linkFirstText: string;
  linkSecondText: string;
  redirect: string;
  type: "LOGIN" | "REGISTER";
}

const Card = ({
  title,
  buttonText,
  linkFirstText,
  linkSecondText,
  redirect,
  type,
}: ElementsProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function hasJWT() {
    let flag = false;
    //checa se o usuário tem o JWT ativo
    localStorage.getItem("token") ? (flag = true) : (flag = false);
    return flag;
  }

  useEffect(() => {
    if (hasJWT()) {
      window.location.href = "/";
    }
  });
  // toasts de resposta do usuário login
  const notifyInvalidUser = () =>
    toast.warning("O Nome de usuário não existe!");
  const notifyInvalidPassword = () => toast.warning("Senha invalida!");

  //toasts de resposta do usuário registro
  const notify = () => toast.success("Usuário cadastrado com sucesso!");
  const notifyUserLenght = () =>
    toast.warning("O nome de usuário deve conter pelo menos 3 caracteres!");
  const notifyUser = () => toast.warning("Esse usuário ja existe!");
  const notifyEmpty = () =>
    toast.warning("Por favor, preencha os campos corretamente!");
  const notifyPassLetters = () =>
    toast.warning(
      "A senha deve conter pelo menos 8 caracteres, uma letra maiuscula e um número!"
    );

  //registro
  async function registerUser() {
    try {
      const response = await api.post("/register", {
        username: username,
        pass: password,
      });
      if (response.data === "Por favor, preencha os campos corretamente!") {
        return notifyEmpty();
      }
      if (response.data === "Esse usuário ja existe!") {
        return notifyUser();
      }
      if (response.data === "Requisitos nao preenchidos!") {
        return notifyPassLetters();
      }
      if (
        response.data ===
        "O nome de usuário deve conter pelo menos 3 caracteres!"
      ) {
        return notifyUserLenght();
      }
      notify();
      setPassword("");
      setUsername("");
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  /////////

  //login

  async function loginUser() {
    try {
      const response = await api.post("/login", {
        username: username,
        pass: password,
      });
      if (username === "" || password === "") {
        return notifyEmpty();
      }
      if (response.data === "Nome de usuário não existe!") {
        return notifyInvalidUser();
      }
      if (response.data === "Senha inválida!") {
        return notifyInvalidPassword();
      }

      const token = response.data.response.data.token;
      localStorage.setItem("token", token);
      setAuthToken(token);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {/* Card para utilizar no login e no registro */}
      <Container>
        <ToastContainer theme="dark" />
        <Wrapper>
          <WrapperElements>
            <h1>{title}</h1>

            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Nome de Usuário"
              required
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Senha"
              required
            />

            <Botao onClick={type === "REGISTER" ? registerUser : loginUser}>
              {buttonText}
            </Botao>
            <p>
              {linkFirstText}{" "}
              <Link
                style={{ textDecoration: "none", color: "#870A30" }}
                href={redirect}
              >
                {linkSecondText}
              </Link>
            </p>
          </WrapperElements>
        </Wrapper>
      </Container>
    </>
  );
};

export default Card;
