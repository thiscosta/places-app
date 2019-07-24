import styled from 'styled-components/native'

import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex-direction: column
  flex: 1
  background-color: rgb(255,255,255)
`;

export const Header = styled(LinearGradient)`
  height: 250px
  align-items: center
  justify-content: center
`;

export const HeaderTitle = styled.Text`
  font-size: 24px
  color: rgb(255,255,255)
  font-weight: bold
`
