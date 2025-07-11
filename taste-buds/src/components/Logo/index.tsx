import { Sc } from "./style";

function Logo() {
  return (
    <Sc.Header>
      <Sc.Logo source={require('../../../assets/logo.png')} resizeMode="contain" />
      <Sc.TomateImagem source={require('../../../assets/tomate.png')} resizeMode="contain" />
    </Sc.Header>
  )
}

export default Logo;