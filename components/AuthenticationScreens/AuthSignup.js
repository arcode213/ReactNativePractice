import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const AuthSignup = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [name, setName] = useState()

  const handleSignUp = async () => {
    try {
      const user=await auth().createUserWithEmailAndPassword(email, password);
      const userID= user.user.uid
      await firestore().collection('Users').doc(userID).set({
        name: name,
        email: email,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      Alert.alert('Success', 'User registered successfully!');
      setEmail('');
      setPassword('');
      setName('');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message);
    }
  };
  
  const navigation= useNavigation()
  return (
      <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: '100%'}}>
          <Text style={styles.loginText}>Signup Screen</Text>
          <TextInput style={styles.inputField} placeholder='Name' value={name}  onChangeText={(text)=>{
              setName(text)
          }} />
          <TextInput style={styles.inputField} placeholder='Email' value={email}  onChangeText={(text)=>{
              setEmail(text)
          }} />
          <TextInput style={styles.inputField} placeholder='Password' secureTextEntry={true} value={password} onChangeText={(text)=>{
              setPassword(text)
          }}/>
          <Button title='Signup' onPress={handleSignUp} ></Button>
        </View>
      </SafeAreaView>
  )
}

export default AuthSignup

const styles = StyleSheet.create({
  loginText:{
    textAlign: 'center',
    color: 'black',
    fontSize: 18
  },
  inputField:{
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    padding: 6,
    color: 'black',
    marginVertical: 4,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10 
  }

})