import styled from "styled-components/native";
import { GeneralColors } from "../../styles/colors";

export const Sc = {
  Container: styled.View`
  flex: 1;
  background-color: ${GeneralColors.colors.secondary}
  `,
  Content: styled.View`
    align-items: center;
    margin-top: 75px;
    padding: 10px;
  `,
  Title: styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${GeneralColors.colors.primary};
    margin: 15px;
`,
}