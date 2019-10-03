import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Colors from '../constants/Colors';

const MapScreen = props => {

const initialLocation = props.navigation.getParam('initialLocation');
const readonly = props.navigation.getParam('readonly');
const [selectedLocation, setSelectedLocation] = useState(initialLocation);
const tof = require("../assets/photo.png");

  const MapRegion ={
    latitude: initialLocation ? initialLocation.lat : 48.8534,
    longitude: initialLocation ? initialLocation.lng : 2.3488,
    latitudeDelta: 0.25,
    longitudeDelta: 0.25
  };

const selectLocationHandler = event => {
  if (readonly) {
    return;
  }
  console.log(event);
  setSelectedLocation({
    lat: event.nativeEvent.coordinate.latitude,
    lng: event.nativeEvent.coordinate.longitude
  });
};

const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
        // could show an alert!
      return;
    }
  props.navigation.navigate('NewPlace', {pickedLocation: selectedLocation});
}, [selectedLocation]);

useEffect (() => {
  props.navigation.setParams({saveLocation: savePickedLocationHandler})
}, [savePickedLocationHandler]);

  let markerCoordinates;

  if(selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng
    };
  }

  return (
    <MapView 
    style={styles.map} 
    region={MapRegion}
    onPress={selectLocationHandler} 
    >
      <MapView.Marker
            coordinate={{
            latitude: 48.858364,
            longitude: 2.343431}}
            title={"La pause Diplo - Lundi-vendredi 9h-17h"}
            description={"1 rue des Bourdonnais Paris 1er"}
            image={tof}
      />
      <MapView.Marker
            coordinate={{
            latitude: 48.882917,
            longitude: 2.390324}}
            title={"L'étalon noir - Mardi-Samedi 8h-19h"}
            description={"1 Rue Gaston Pinot Paris 19ème"}
            image={tof}
      />
      <MapView.Marker
            coordinate={{
            latitude: 48.882801,
            longitude: 2.299842}}
            title={"O'ZAMAN - Lundi-Dimanche 7h-19h"}
            description={"7 rue des kebabs Paris 17ème"}
            image={tof}
      />
      <MapView.Marker
            coordinate={{
            latitude: 48.835854,
            longitude: 2.237370}}
            title={"Le ben béquille - Mercredi-Dimanche 9h-21h"}
            description={"4 rue des majors Boulogne-Billancourt"}
            image={tof}
      />
      <MapView.Marker
            coordinate={{
            latitude: 48.837568,
            longitude: 2.285347}}
            title={"La 'cava toi ?' - Lundi-Dimanche 6h-16h"}
            description={"1 rue des kenny Paris 15ème"}
            image={tof}
      />
      <MapView.Marker
            coordinate={{
            latitude: 48.834253,
            longitude: 2.370324}}
            title={"O'KB - Samedi-Dimanche 6h-15h"}
            description={"8 avenue de Julien Paris 13ème"}
            image={tof}
      />
      <MapView.Marker
            coordinate={{
            latitude: 43.354581,
            longitude: 5.357583}}
            title={"Café parisien - Lundi-vendredi 9h-17h"}
            description={"1 rue des ritals - Marseille"}
            image={tof}
      />
      <MapView.Marker
            coordinate={{
            latitude: 43.283808,
            longitude: 5.521495}}
            title={"Le PSG - Mardi-Samedi 8h-19h"}
            description={"12 Rue du rugby - Marseille"}
            image={tof}
      />
      <MapView.Marker
            coordinate={{
            latitude: 43.255190,
            longitude: 5.400324}}
            title={"Le comptoir - Lundi-Dimanche 7h-19h"}
            description={"7 rue des tacos Marseille"}
            image={tof}
      />
      <MapView.Marker
            coordinate={{
            latitude: 43.309267,
            longitude: 5.460536}}
            title={"Le mère poulard - Mercredi-Dimanche 9h-21h"}
            description={"4 avenue de la Bretagne - Marseille"}
            image={tof}
      />
      <MapView.Marker
            coordinate={{
            latitude: 43.290225,
            longitude: 5.357326}}
            title={"Café du commerce - Lundi-Dimanche 6h-16h"}
            description={"1 rue de l'ours Walid - Marseille"}
            image={tof}
      />
      <MapView.Marker
            coordinate={{
            latitude: 43.346035,
            longitude: 5.597732}}
            title={"Le jonnn - Samedi-Dimanche 6h-15h"}
            description={"8 avenue des Pays-Bas - Marseille"}
            image={tof}
      />
    </MapView>
    
  

  );
};

MapScreen.navigationOptions = navData => {
  const saveFn = navData.navigation.getParam('saveLocation');
  const readonly = navData.navigation.getParam('readonly');
  if (readonly) {
    return {};
  }
  return {
    headerRight: (
    <TouchableOpacity style={styles.headerButton} onPress={saveFn}>
      <Text style={styles.headerButtonText}>Save</Text>
    </TouchableOpacity>
    )
  };
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  headerButton: {
    marginHorizontal: 20
  },
  headerButtonText: {
    fontSize: 16,
      color: Platform.OS === 'android' ? 'white' : Colors.primary
  }
});

export default MapScreen;