import { useRef } from "react";
import api from "../../services/api";

import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  Input,
  Button,
  InputLabel,
} from "./styles";

import UsersImage from "../../assets/users.png";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function registerNewUser() {
    await api.post("/usuarios", {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    });
  }

  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt="image-users" />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input
            type="email"
            placeholder="E-mail do usuário"
            ref={inputEmail}
          />
        </div>

        <Button type="button" onClick={registerNewUser}>
          Cadastrar Usuário
        </Button>
      </Form>
    </Container>
  );
}

export default Home;

// export default -> exporta só uma coisa;

// export -> exporta varias coisa, e para importar as propriedades ficam dentro do {App, App2,...};
