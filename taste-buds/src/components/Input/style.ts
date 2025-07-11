import styled from "styled-components/native";
import { GeneralColors } from "../../styles/colors";

export const Sc = {
  Container: styled.View`
    align-items: center;
    justify-content: center;
    padding: 5px;
  `,
  Input: styled.TextInput`
    width: 280px;
    height: 40px;
    border-width: 1;
    border-radius: 5px;
    padding: 5px;
    border-color: ${GeneralColors.colors.primary};
    color: ${GeneralColors.colors.primary};
`,
}