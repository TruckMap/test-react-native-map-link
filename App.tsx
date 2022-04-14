import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';

import {showLocation} from 'react-native-map-link';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.buttonWrap}>
        <Button
          title="Open TruckMap (place)"
          onPress={() =>
            showLocation({
              latitude: 38.8976763,
              longitude: -77.0387185,
              appsWhiteList: ['truckmap', 'google-maps'],
            })
          }
        />
        <Button
          title="Open TruckMap (route)"
          onPress={() =>
            showLocation({
              sourceLatitude: 38.8971833,
              sourceLongitude: -77.0388289,
              latitude: 38.8976763,
              longitude: -77.0387185,
              appsWhiteList: ['truckmap', 'google-maps'],
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonWrap: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
