import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async () => {
    
    try {
      const user = await auth().signInWithEmailAndPassword(email, password);
      const userid = user.user.uid;
      Alert.alert('Success', 'Logged In Successfully');
      navigation.navigate('CategoryCreate', { userid });
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.loginText}>Admin Login</Text>

        {/* Email Input */}
        <TextInput
          style={styles.inputField}
          placeholder='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType='email-address'
        />

        {/* Password Input */}
        <TextInput
          style={styles.inputField}
          placeholder='Password'
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.btnLogin} onPress={onLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        {/* Signup Button */}
        <TouchableOpacity
          style={styles.btnSignup}
          onPress={() => {
            navigation.navigate('AdminSignup');
          }}
        >
          <Text style={styles.btnText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AdminLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    padding: 20,
  },
  formContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputField: {
    borderColor: '#ccc',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    color: 'black'
  },
  btnLogin: {
    backgroundColor: '#4CAF50', // Green for Login button
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSignup: {
    backgroundColor: '#007BFF', // Blue for Signup button
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
