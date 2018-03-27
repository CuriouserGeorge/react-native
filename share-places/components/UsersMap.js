import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps'

const UsersMap = props => {
    return(
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
         region={props.userLocation} 
        >
        </MapView>
    );
};
const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 200
    },
    map: {
        width: '100%',
        height: '100%'
    }
})

export default UsersMap;


