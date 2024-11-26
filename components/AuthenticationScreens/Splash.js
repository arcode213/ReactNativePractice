import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';

const Splash = () => {


    const navigation= useNavigation()

    useEffect(() => {
      setTimeout(() => {
            navigation.navigate('ChooseScreen')
      }, 2000);
    }, [])
    

  return (
    <View style={styles.container}>
      <View style={styles.splashContent}>
        <Text style={styles.appName}>My Store</Text>
        <Text style={styles.subTitle}>Welcome to the best experience</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282C34',  
  },
  splashContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  appName: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: '#B0B0B0',
  },
});

export default Splash;
