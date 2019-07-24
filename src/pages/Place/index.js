import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Container, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Header } from './styles'
import { useNavigationParam, useNavigation } from 'react-navigation-hooks'

import MapView, { Marker } from 'react-native-maps';

const Place = () => {
  const place = useNavigationParam('place')
  const { goBack } = useNavigation();
  const [mapRegion, setMapRegion] = useState({
    latitude: place.latitude,
    longitude: place.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })

  return (
    <Container>
      <Header androidStatusBarColor="#03a9f4"  >
        <Left>
          <Button transparent onPress={() => { goBack() }}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>{place.title}</Title>
        </Body>
      </Header>
      <MapView
        style={{ flex: 1 }}
        region={mapRegion}
        onRegionChange={(region) => { setMapRegion(region) }}
      >
        <Marker
          style={{ height: 600 }}
          coordinate={{ latitude: place.latitude, longitude: place.longitude }}
          title={place.title}
          description={place.description}
        />

      </MapView>
    </Container >
  )
}

export default Place
