import { Sc } from "./style";
import Logo from "../../components/Logo";
import Input from "../../components/Input";

function Login() {
  return (
    <Sc.Container>
      <Logo />
      <Sc.Content>
        <Sc.Title>Login</Sc.Title>
        <Input text="E-mail"/>
        <Input text="Password" />
      </Sc.Content>
    </Sc.Container>
  )
}

export default Login;