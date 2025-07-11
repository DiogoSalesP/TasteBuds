import styled from "styled-components/native";
import { GeneralColors } from "../../styles/colors";

export const Sc = {
  Content: styled.View`
    background-color: ${GeneralColors.colors.button};
    align-items: center;
    justify-content: center;
    width: 280px;
    height: 40px;
    border-radius: 5px;
  `,
  Title: styled.Text`
  font-size: 14;
  color: ${GeneralColors.colors.secondary}
  `
}