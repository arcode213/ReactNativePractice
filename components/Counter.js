import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Counter = (props) => {
  return (
    <View>
      <Text style={styles.count}>Counter : {props.count}</Text>
      <Button title='Increment' onPress={props.increment} style={styles.btn}/>
      <Button title='Decrement' onPress={props.decrement} style={styles.btn}/>
      <Button title='Reset' backgroundColor={"red"} onPress={props.reset}/>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    count:{
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 8
    },
    btn:{
        marginTop:2
    },
    resetButton:{
        backgroundColor: 'red'
    }
})