import styled from 'styled-components/native';
import {Responsive, Colors} from '../../../Theme';

export const ContainerView = styled.View`
  flex: 1;
`;

export const BackgroundImage = styled.ImageBackground`
  height: ${Responsive.heightPercentageToDP('100%')};
  width: ${Responsive.widthPercentageToDP('100%')};
`;

export const MiddleView = styled.View`
  background-color: ${Colors.whiteFF};
  margin-bottom: ${Responsive.heightPercentageToDP('21.45%')};
  border-radius: ${Responsive.widthPercentageToDP('5.9%')};
  margin-horizontal: ${Responsive.widthPercentageToDP('4.8%')};
`;
