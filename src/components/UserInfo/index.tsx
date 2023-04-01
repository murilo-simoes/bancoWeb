import { Container, WrapperContent } from "./styled";

interface propsUser {
  name: any;
  saldo: any;
}

const UserInfo = ({ name, saldo }: propsUser) => {
  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: "3rem",
          }}
        >
          <h1>Olá, {name}</h1>
        </div>
        <WrapperContent>
          <h1 className="money">
            Saldo Disponível: <b className="bold">R${saldo}</b>
          </h1>
        </WrapperContent>
      </Container>
    </>
  );
};

export default UserInfo;
