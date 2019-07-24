import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { StyledContainer, PlacesList, NoItemsView, NoItemsImage, NoItemsText } from './styles'
import GradientHeader from '../../components/GradientHeader/index'
import { Container, List, ListItem, Left, Thumbnail, Body, Text } from 'native-base'

import api from '../../config/api'

const Main = () => {

  const [places, setPlaces] = useState([])
  const { navigate } = useNavigation();

  useEffect(async () => {
    const { data } = await api.get('places')
    setPlaces(data)
  }, [])

  renderPlace = ({ item }) => (
    <ListItem thumbnail onPress={() => { navigate('Place', { place: item }) }}>
      <Left>
        <Thumbnail square source={{ uri: item.imageUrl }} />
      </Left>
      <Body>
        <Text>{item.title}</Text>
        <Text note numberOfLines={1}>{item.description}</Text>
      </Body>
    </ListItem>
  )

  renderNoItems = () => (
    <NoItemsView>
      <NoItemsImage source={{ uri: 'https://www.sixdegreerentals.com/images/no-results.png' }} />
      <NoItemsText>Sem lugares por enquanto</NoItemsText>
    </NoItemsView>
  )

  return (
    <Container>
      <StyledContainer>
        <GradientHeader
          startColor="#03a9f4"
          endColor="#ffffff"
          titleText="Explore novos lugares!"
        />
        <PlacesList>
          <List>
            <FlatList
              data={places}
              keyExtractor={(item) => item._id}
              renderItem={this.renderPlace}
              ListEmptyComponent={this.renderNoItems}
            />
          </List>
        </PlacesList>
      </StyledContainer>
    </Container>
  )
};

export default Main;
