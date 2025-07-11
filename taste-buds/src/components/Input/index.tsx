import { Sc } from "./style";

type Props = {
  text: string;
  user: string;
  setUser: (user: string) => void

}

function Input({ text, user, setUser }: Props) {
  return (
    <Sc.Container>
      <Sc.Input
        value={user}
        onChangeText={(user) => setUser(user)}
        placeholder={text}
      />
    </Sc.Container>
  )
}

export default Input;