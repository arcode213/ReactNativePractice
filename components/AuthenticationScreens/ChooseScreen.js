import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ChooseScreen = () => {
    const navigation = useNavigation()


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Awesome App</Text>
      <Text style={styles.subtitle}>Please choose your role</Text>

      {/* User Button */}
      <TouchableOpacity style={styles.buttonUser} onPress={()=>{navigation.navigate('AuthLogin')}}>
        <Text style={styles.buttonText}>User</Text>
      </TouchableOpacity>

      {/* Admin Button */}
      <TouchableOpacity style={styles.buttonAdmin} onPress={()=>{navigation.navigate('AdminLogin')}}>
        <Text style={styles.buttonText}>Admin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282C34',  // Dark background color
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#B0B0B0',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonUser: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#4CAF50',  // Green for User
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAdmin: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#F44336',  // Red for Admin
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default ChooseScreen;
