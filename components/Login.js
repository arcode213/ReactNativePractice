import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View>
      <Text style={styles.loginHeading}>Login</Text>
      <TextInput  placeholder='abc@gmail.com' style={styles.inputBoxes}/>
      <TextInput  placeholder='.....' secureTextEntry={true} style={styles.inputBoxes}/>
      <View style={styles.logBtn}>
        <Button title='Login'  />
      </View>
      <View style={styles.logBtn}>
        <Button title='Signup' onPress={()=> navigation.navigate('Signup Page') }/>
      </View>
      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    loginHeading:{
        textAlign: 'center',
        fontSize: 24,
        paddingVertical: 5,
    },
    inputBoxes:{
        // width: '98%',
        borderColor: 'white',
        borderWidth: 2,
        marginVertical: 6,
        padding: 3,
        marginHorizontal: 6,
    },
    logBtn:{
            marginVertical: 4,
            marginHorizontal: 6
    }
})