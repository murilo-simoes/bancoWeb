import Card from "../src/components/CardLoginAndRegister";
import Menu from "../src/components/Menu";

const Login = () => {
  return (
    <>
      <Menu visibility="none" />
      <Card
        title={"Login"}
        buttonText={"ENTRAR"}
        linkFirstText={"Não tem uma conta?"}
        linkSecondText={"Registre-se!"}
        redirect={"/register"}
        type={"LOGIN"}
      />
    </>
  );
};

export default Login;
