import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Container, Wrapper } from "./styled";

const HistoricoTransacoes = () => {
  const [list, setList] = useState([]);
  const [user, setUser] = useState();
  const [filtered, setFiltered] = useState([]);

  // pegar infos do usuário
  useEffect(() => {
    async function handleTransactions() {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
      const userLogged = await api.post("/user", { token: token });
      const response = await api.post("/all", {
        idConta: userLogged.data.idAccount,
      });
      setUser(userLogged.data.idAccount);
      setList(response.data);
    }
    handleTransactions();
  }, []);

  // filtragens

  function filterTableCashOut(value: any) {
    function retornaArrFiltered(value: any) {
      if (value.debitedAccountId == user) return value;
    }
    let filter = list.filter(retornaArrFiltered);
    setFiltered(filter);
  }
  function filterTableCashIn(value: any) {
    function retornaArrFiltered(value: any) {
      if (value.creditedAccountId == user) return value;
    }
    let filter = list.filter(retornaArrFiltered);
    setFiltered(filter);
  }

  function filterData() {
    const customSort = (a: any, b: any) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      if (dateA > dateB) return 1;
      else if (dateA < dateB) return -1;
      return 0;
    };
    let filter = list.sort(customSort);
    setFiltered(filter);
  }
  return (
    <>
      <Container>
        <h1>Historico de Transferências</h1>

        {list.length === 0 ? (
          <Wrapper style={{ overflow: "hidden" }}>
            <h1 style={{ fontSize: "1rem" }}>
              Não foi feita nenhuma transfêrencia!
            </h1>
          </Wrapper>
        ) : (
          <Wrapper>
            <div className="filtro">
              <h1 className="filtragem">Filtragem:</h1>
              <h1 className="filtroh1" onClick={filterData}>
                Data da Transação
              </h1>
              <h1 className="filtroh1" onClick={filterTableCashIn}>
                Cash-in
              </h1>
              <h1 className="filtroh1" onClick={filterTableCashOut}>
                Cash-out
              </h1>
            </div>
            {filtered.length !== 0 ? (
              <div>
                <h1
                  onClick={() => setFiltered([])}
                  style={{
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    marginBottom: "2rem",
                  }}
                >
                  REMOVER FILTROS X
                </h1>
              </div>
            ) : (
              ""
            )}
            <table className="table-fill">
              <thead>
                <tr>
                  <th className="text-left">Tipo de Transação</th>
                  <th className="text-left">Valor</th>
                  <th className="text-left">Data</th>
                </tr>
              </thead>
              <tbody className="table-hover">
                {filtered.length !== 0
                  ? filtered?.map((item: any) => {
                      return (
                        <tr key={item.idTransaction}>
                          <td className="text-left">
                            {item.debitedAccountId === user
                              ? "Cash-out"
                              : "Cash-in"}
                          </td>
                          <td className="text-left">R${item.value},00</td>
                          <td
                            style={{ whiteSpace: "nowrap" }}
                            className="text-left"
                          >
                            {item.createdAt.substring(10, 0)}
                          </td>
                        </tr>
                      );
                    })
                  : list?.map((item: any) => {
                      return (
                        <tr key={item.idTransaction}>
                          <td className="text-left">
                            {item.debitedAccountId === user
                              ? "Cash-out"
                              : "Cash-in"}
                          </td>
                          <td className="text-left">R${item.value},00</td>
                          <td
                            style={{ whiteSpace: "nowrap" }}
                            className="text-left"
                          >
                            {item.createdAt.substring(10, 0)}
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </Wrapper>
        )}
      </Container>
    </>
  );
};

export default HistoricoTransacoes;
