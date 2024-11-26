import { Alert, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const AdminSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = async () => {
    try {
      const user = await auth().createUserWithEmailAndPassword(email, password);
      const userID = user.user.uid;
      await firestore().collection('Admin').doc(userID).set({
        name: name,
        email: email,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      Alert.alert('Success', 'User registered successfully!');
      setEmail('');
      setPassword('');
      setName('');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.headingText}>Admin Signup</Text>

        {/* Name Input */}
        <TextInput
          style={styles.inputField}
          placeholder='Name'
          value={name}
          onChangeText={(text) => setName(text)}
        />

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

        {/* Signup Button */}
        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AdminSignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6', // Light gray background
    padding: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#ffffff', // White background for form
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputField: {
    borderColor: '#d1d1d1',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginVertical: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9', // Light background for inputs
    color: 'black'
  },
  signupButton: {
    backgroundColor: '#4CAF50', // Green color for signup button
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
