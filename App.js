import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import MapBox from '@mapbox/react-native-mapbox-gl'

MapboxGL.setAccessToken('pk.eyJ1IjoiZGlvbmVzYW50b3MiLCJhIjoiY2w4OWR0Y2d4MDV4djN4dGUxZHFydGdhbSJ9.pPaXJk1tTJKUrnvSNSD-PA');

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapBox.MapView
          styleURL={MapBox.StyleURL.Street}
          zoomLevel={15}
          centerCoordinate={[11.256, 43.77]}
          style={styles.container}
        />
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})