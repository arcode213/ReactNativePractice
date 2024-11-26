import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const SimpleCalculator = () => {
    const [firstNumber, setfirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)
    const [opr, setopr] = useState()
    const [result, setresult] = useState()






    const handleClear=()=>{
        setfirstNumber(0)
        setSecondNumber(0)
        setopr('')
        setresult(0)
    }

    const handleAns=()=>{

        try {
            
            switch (opr) {
                case '+':
                    setresult(Number(firstNumber)+Number(secondNumber))    
                    break;
                    
                case '-':
                    setresult((Number(firstNumber)-Number(secondNumber)))    
                break;
                        
                case '*':
                   setresult((Number(firstNumber)*Number(secondNumber)))    
                break;
                            
                case '/':
                    setresult(((firstNumber)/secondNumber))    
                break;
                                
                            }
                        } catch (error) {
                            Alert.alert('Error',error)
                        }

    }

  return (
    <View style={styles.conatiner}>
        <Text style={{textAlign: 'center', fontSize: 30, color: 'black'}}>Calculator</Text>
        <TextInput style={styles.inputField} placeholder='Value 1' keyboardType='number-pad' value={firstNumber} onChangeText={setfirstNumber} />
        <TextInput style={styles.inputField} placeholder='Value 2' keyboardType='number-pad' value={secondNumber} onChangeText={setSecondNumber}/>
        {/* <TextInput style={styles.inputField} placeholder='=' value={result}/> */}
        {result ? <Text style={{color: 'black'}}>{result}</Text>: <Text>Ans</Text>}
        <View style={styles.btnContainer}>
            <TouchableOpacity  style={styles.operationBtn} onPress={()=>{setopr('+')}}>
                <Text style={styles.oprTxt}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operationBtn} onPress={()=>{setopr('-')}}>
                <Text style={styles.oprTxt}>-</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.operationBtn} onPress={()=>{setopr('*')}}>
                <Text style={styles.oprTxt}>x</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operationBtn} onPress={()=>{setopr('/')}}>
                <Text style={styles.oprTxt}>/</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
            <Button title='Clear' onPress={handleClear}></Button>
            <Button title='Ans' onPress={handleAns}></Button>
        </View>
    </View>
  )
}

export default SimpleCalculator

const styles = StyleSheet.create({
    conatiner:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    inputField:{
        borderWidth: 3,
        borderColor: 'black',
        borderStyle: 'solid',
        width: '90%',
        marginTop: 10,
        padding: 4,
        paddingLeft: 5,
        color: 'black',
    },
    btnContainer:{
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        marginVertical: 10
        
    },
    operationBtn:{
        backgroundColor: 'gray',
        width: 120,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    oprTxt:{
        fontSize: 20,
        fontWeight: '500'
    }
})