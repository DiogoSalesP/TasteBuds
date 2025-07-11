import { TextInput } from "react-native";
import { Props } from "./type";


function Button({ placeholder }: Props) {
  return (
    <TextInput
      placeholder={placeholder}
    />
  )
}

export default Button;