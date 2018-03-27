import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class App extends React.Component {
  state = {
    userLocation:null
  }
  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position =>{
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121          
        }
      });
    }, err => console.log(err));

  }

  

  render() {
    return (
      <View style={styles.container}>
        
        
        <UsersMap userLocation={this.state.userLocation}/>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
      </View>
    );
  }
}
