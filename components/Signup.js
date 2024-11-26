import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Signup = ({navigation}) => {
  return (
    <View>
      <Text style={styles.loginHeading}>Signup</Text>
      <TextInput  placeholder='abc@gmail.com' style={styles.inputBoxes}/>
      <TextInput  placeholder='.....' secureTextEntry={true} style={styles.inputBoxes}/>
      <View style={styles.logBtn}>
        <Button title='SignUp' onPress={()=>{navigation.navigate("Home Page")}} />
      </View>
    </View>
  )
}

export default Signup
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