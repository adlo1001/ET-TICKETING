
import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";


export const SafeArea = styled(SafeAreaView)`
flex: 1;
font-size:${(props)=>props.theme.fontSizes.h5};
font-family:${(props)=>props.theme.fonts.heading};
${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
