import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Greeting = () => {
    const [name, setname] = useState()
    const [displayName, setdisplayName] = useState()
    
    const handleBtn=()=>{
        if(!name){
        return Alert.alert("Invalid","Please Enter valid input")
        }
        setdisplayName(name)
    }
    
    
    return (
    <View style={styles.container}>
      <Text style={styles.heading}>Greeting App</Text>
      <TextInput placeholder='Enter name' value={name} style={styles.inputField} onChangeText={setname}/>
        <Button title='Show Greeting' onPress={handleBtn} style={styles.btn}></Button>
        {displayName ? <Text style={styles.displayedName}>Hello {displayName}</Text>:<></>}
    </View>
  )
}

export default Greeting

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'

    },
    heading:{
        fontSize: 30,
        fontFamily: 'arial',
        color: 'white'
    },
    inputField:{
        borderColor: 'white',
        borderWidth: 4,
        borderStyle: 'solid',
        width: '90%',
        padding: 4,
        paddingLeft: 6,

    },
    displayedName: {
        fontSize: 20,
        textDecorationLine: 'underline'
    }

})