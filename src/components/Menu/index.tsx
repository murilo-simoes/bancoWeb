import Image from "next/image";
import logo from "../../../public/img/logo.svg";
import { api } from "../../lib/axios";
import { Container, LogoDiv } from "./styled";

interface buttonProp {
  visibility: string;
}

const Menu = ({ visibility }: buttonProp) => {
  async function logOut() {
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <>
      {/* menu simples com opção de adicionar o botão de logout  */}
      <Container>
        <LogoDiv>
          <Image
            src={logo}
            alt={"Logo do Site"}
            loading="eager"
            priority={true}
          />
          <button onClick={logOut} style={{ display: visibility }}>
            SAIR
          </button>
        </LogoDiv>
      </Container>
    </>
  );
};

export default Menu;
