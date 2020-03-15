import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MyImage from './src/Component/MyImage';
import { Provider } from 'react-redux';

import store from './src/store/store';


export default function App() {


  return ( 
    <Provider store={store}>
      <View style = {styles.container}>
        <MyImage/>
        <Text > Open up App.js to start working on your app! </Text>
      </View>
     </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});