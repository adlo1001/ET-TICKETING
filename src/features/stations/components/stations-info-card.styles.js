import styled from "styled-components/native";
import { Platform } from "react-native";
import { Card, Text } from 'react-native-paper';
import { SvgXml } from "react-native-svg";

export const StationCard = styled(Card)`
background-color:${(props) =>props.theme.colors.bg.primary};
margin-bottom: ${(props) => props.theme.space[3]};

`;

export const StationCardCover=styled(Card.Cover)`
padding:${(props) => props.theme.space[3]};
background-color:${(props) => props.theme.colors.bg.primary};
`;

export const StationCardTitle=styled(Card.Title)`
color:red;
`;

export const Address = styled(Text)`
font-family:${(props) => props.theme.fonts.body};
padding:${(props) => props.theme.space[4]};
color: ${(props) => props.theme.colors.ui.primary};
`;

export const TitleCustom = styled(Text)`
font-family:${(props) => props.theme.fonts.heading};
font-size: ${(props) =>props.theme.fontSizes.title}
padding:${(props) => props.theme.space[3]};
color: ${(props) => props.theme.colors.ui.primary};
`;

export const Info = styled.View`
padding: ${(props)=>props.theme.space[3]};
`;

export const Rating = styled.View`
flex-direction: row;
padding: ${(props)=>props.theme.space[2]};
`;

export const Section = styled.View`
flex-direction:row;
align-items:center;

`;

export const SectionEnd = styled.View`
flex:1;
flex-direction:row;
justify-content: flex-end;
`;
  export const Open  = styled((Platform.OS!="web")?SvgXml:Text)`
  flex-direction:row;
`;