import styled from 'styled-components/native'

import { ListItem } from 'native-base';

export const StyledContainer = styled.View`
  flex-direction: column
  flex: 1
  background-color: rgb(255,255,255)
`;

export const NoItemsView = styled.View`
  flex: 1
  align-items: center
  justify-content: center
`

export const NoItemsImage = styled.Image`
  width: 150
  height: 150
`

export const NoItemsText = styled.Text`
  font-size: 18px
  color: rgb(100,100,100)
`

export const PlacesList = styled.View`
  flex: 1
  margin-top: 20px
  padding: 10px
`



export const PlacesListItem = styled(ListItem)`

`
