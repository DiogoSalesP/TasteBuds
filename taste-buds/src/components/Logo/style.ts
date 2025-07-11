import styled from "styled-components/native";
import { GeneralColors } from "../../styles/colors";

export const Sc = {
    Header: styled.View`
    background-color: ${GeneralColors.colors.primary};
    padding-top: 80px;
    padding-bottom: 200px;
    align-items: center;
    position: relative;
  `,
  Logo: styled.Image`
    width: 198%;
    height: 160px;
  `,
  TomateImagem: styled.Image`
  width: 450px;
  height: 400px;
  position: absolute;
  bottom: -150px;
  left: -75px
  `,
}