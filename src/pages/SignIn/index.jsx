import { FiLock, FiMail } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Background } from "./styles";

export function SignIn(){
	return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir</span>
        <h2>Faça seu login</h2>
        <Input icon={FiMail} placeholder="Email" type="email"  />
        <Input placeholder="Senha" type="password" icon={FiLock}/>
        <Button type="submit" title="Sign In"/>
        <a href="#">Criar conta</a>
      </Form>
      <Background/>
    </Container>
  );
}
