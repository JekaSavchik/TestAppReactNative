import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import MyImage from './src/Component/MyImage';


export default function App() {


  return ( 
    <View style = {styles.container}>
      <MyImage/>
      <Text > Open up App.js to start working on your app! </Text>
     </View>
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