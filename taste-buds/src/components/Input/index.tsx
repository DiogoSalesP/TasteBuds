import { Text, TextInput, View } from "react-native";
import { Sc } from "./sytle";

type Props = {
  text: string;
}

function Input({ text }: Props) {
  return (
    <Sc.Container>
      <Sc.Input placeholder={text} />
    </Sc.Container>
  )
}

export default Input;