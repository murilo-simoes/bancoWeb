import { useEffect, useState } from "react";
import HistoricoTransacoes from "../src/components/HistoricoTransacoes";
import Menu from "../src/components/Menu";
import Transacoes from "../src/components/Transacoes";
import UserInfo from "../src/components/UserInfo";
import { api, setAuthToken } from "../src/lib/axios";

interface prop {
  user: {
    idUser: number;
    username: string;
  };
  account: {
    idAccount: number;
    balance: number;
    userId: number;
  };
  transactionsDebited: {
    idTransaction: number;
    value: number;
    debitedAccountId: number;
    creditedAccountId: number;
    createdAt: string;
  };
  transactionsCredited: {
    idTransaction: number;
    value: number;
    debitedAccountId: number;
    creditedAccountId: number;
    createdAt: string;
  };
}

export default function Home() {
  const [user, setUser] = useState<prop>({} as prop);

  function hasJWT() {
    let flag = false;
    //checa se o usuário tem o JWT ativo
    localStorage.getItem("token") ? (flag = true) : (flag = false);
    return flag;
  }

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  if (token) {
    setAuthToken(token);
  }
  useEffect(() => {
    if (hasJWT()) {
      return console.log("logado");
    } else {
      window.location.href = "/login";
    }
  });

  useEffect(() => {
    async function getInfoUser() {
      const response = await api.post("/user", { token: token });
      const infos = await api.post("/me", { username: response.data.username });
      setUser(infos.data);
    }
    getInfoUser();
  }, []);

  return (
    <>
      {/* componentes da página principal */}
      <Menu visibility="block" />
      <UserInfo saldo={user?.account?.balance} name={user?.user?.username} />
      <Transacoes />
      <HistoricoTransacoes />
    </>
  );
}
