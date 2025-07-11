import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Props } from "./type";
import { Sc } from "./style";


function Button({ title, onPress }: Props) {

  return (
  <TouchableOpacity onPress={onPress}>
    <Sc.Content>
      <Sc.Title>{title}</Sc.Title>
    </Sc.Content>
  </TouchableOpacity>
  )
}

export default Button;