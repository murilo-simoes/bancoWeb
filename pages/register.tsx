import { useState } from "react";
import Card from "../src/components/CardLoginAndRegister";
import Menu from "../src/components/Menu";
import { api } from "../src/lib/axios";

const Register = () => {
  return (
    <>
      {/* card passando as props */}
      <Menu visibility="none" />
      <Card
        title={"Crie sua conta!"}
        buttonText={"REGISTRAR"}
        linkFirstText={"Já tem uma conta?"}
        linkSecondText={"Faça Login!"}
        redirect={"/login"}
        type={"REGISTER"}
      />
    </>
  );
};

export default Register;
