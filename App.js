import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
       source={{uri: 'https://wallpaperbat.com/img/873547-useful-websites-every-front-end.png'}}
       style={{width: '100%', aspectRatio: 16 / 9}}
      />
      <Image
      source={require('./assets/me1.png')}
      style={{width: 150, height: 150, borderRadius: 75 , borderWidth: 5, borderColor: 'white' , marginTop: -75}}
      />
      <Text style={{fontSize: 20 , fontWeight: 'bold'}}>Somesh Srichandan Sahoo</Text>
      <Text>I am full stack developer</Text>
      <StatusBar style="auto" />
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
