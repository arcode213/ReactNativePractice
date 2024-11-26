import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const GetTextInput = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleNameChange=(input)=>{
        setName(input)
    }
    const handleEmailChange=(input)=>{
        setEmail(input)
    }
    const handlePasswordChange=(input)=>{
        setPassword(input)
    }
    const [printData, setprintData] = useState({
        Name: '',
        Email: '',
        Password: ''
    })

    const handlePrint=()=>{
        setprintData({
            Name: name,
            Email: email,
            Password: password
        })
    }

    const handleClearData=()=>{
        // handlePrint()
        setName('')
        setEmail('')
        setPassword('')
        setprintData({})
    }

    // const printValidation=()=>{
    //     if(name == '' | email ==''| password== ''){
    //         return false
    //     }
    //     return true
    // }

    return (
    <View>
      {/* <Text>Enter its value</Text> */}
      {/* <Text style={styles.txt}>Value is : {name}</Text> */}
      <TextInput style={styles.textField} value={name} placeholder='Enter your Name' onChangeText={handleNameChange}/>
      <TextInput style={styles.textField} value={email} placeholder='Enter your Email' onChangeText={handleEmailChange}/>
      <TextInput style={styles.textField} value={password} placeholder='Enter your Password' onChangeText={handlePasswordChange} secureTextEntry={true}/>
        <Button title='Print Data' onPress={handlePrint}/>
        <Button title='Clear Data' onPress={handleClearData}/>
        
        <Text style={styles.txt}>Name: {printData.Name}</Text>
        <Text style={styles.txt}>Email: {printData.Email}</Text>
        <Text style={styles.txt}>Password: {printData.Password}</Text>
        
    
    </View>
  )
}

export default GetTextInput

const styles = StyleSheet.create({
    txt: {
        fontSize: 17,
        marginHorizontal: 10
        // textAlign: 'center'
    },
    textField:{
        margin: 10,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 16,
        padding: 5
    }
})