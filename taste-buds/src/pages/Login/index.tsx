import { Sc } from "./style";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Alert } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Recipes: undefined;
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();


  function handlePress() {
    Alert.alert(`${email} - ${password}`)
    navigation.navigate("Recipes");
  }

  return (
    <Sc.Container>
      <Logo />
      <Sc.Content>
        <Sc.Title>Login</Sc.Title>
        <Input
          user={email}
          setUser={setEmail}
          text="Email"
          
        />
        <Input 
          user={password}
          setUser={setPassword}
          text="Password"
        />
        <Button title="Enter" onPress={handlePress}/>
      </Sc.Content>
    </Sc.Container>
  )
}

export default Login;