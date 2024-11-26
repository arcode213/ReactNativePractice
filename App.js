import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import GetTextInput from './components/GetTextInput'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Details from './components/Details'
import APIFetching from './components/APIFetching'
import AuthLogin from './components/AuthenticationScreens/AuthLogin'
import AuthSignup from './components/AuthenticationScreens/AuthSignup'
import UserForm from './components/AuthenticationScreens/UserForm'
import Greeting from './components/Greeting Card App/Greeting'
import SimpleCalculator from './components/Calculator/SimpleCalculator'
import Splash from './components/AuthenticationScreens/Splash'
import ChooseScreen from './components/AuthenticationScreens/ChooseScreen'
import AdminLogin from './components/AuthenticationScreens/AdminLogin'
import AdminSignup from './components/AuthenticationScreens/AdminSignup'
import CategoryCreate from './components/AuthenticationScreens/CategoryCreate'
import CategoryDetails from './components/AuthenticationScreens/CategoryDetail'
import ProductDetails from './components/AuthenticationScreens/ProductDetails'
import CategoryList from './components/AuthenticationScreens/CategoryList'
// import Counter from './components/Counter'


const App = () => {
  // const [count, setCount] = useState(0)
  // const increment=()=>{
  //   setCount(count+1)
  // }
  // const decrement=()=>{
  //   if(count==0){

  //   }else{

  //     setCount(count-1)
  //   }
  // }
  // const reset=()=>{
  //   setCount(0)
  // }
  {/* <Text style={styles.text}>Abdul Rehman Qureshi React Native App</Text> */}
  {/* <Counter count={count} increment={increment} decrement={decrement} reset={reset}/> */}
  {/* <GetTextInput /> */}
  const Stack= createNativeStackNavigator()  
  return (
  //   <NavigationContainer>
  //   <Stack.Navigator initialRouteName='Login Page' >
  //     <Stack.Screen name='Login Page' component={Login} options={{title: "Login"}}/>
  //     <Stack.Screen name='Signup Page' component={Signup} />
  //     <Stack.Screen name='Home Page' component={Home} />
  //     <Stack.Screen name='Detail Page' component={Details} />
  //   </Stack.Navigator>
  // </NavigationContainer>
  // <>
  // {/* <APIFetching /> */}
  // </>
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash' >
      <Stack.Screen name='Splash' component={Splash} options={{headerShown: false}}/>
      <Stack.Screen name='ChooseScreen' component={ChooseScreen} options={{headerShown: false}}/>
      <Stack.Screen name='AuthLogin' component={AuthLogin} options={{headerShown: false}}/>
      <Stack.Screen name='AdminLogin' component={AdminLogin} options={{headerShown: false}}/>
      <Stack.Screen name='AuthSignup' component={AuthSignup} options={{headerShown: false}}/>
      <Stack.Screen name='AdminSignup' component={AdminSignup} options={{headerShown: false}}/>
      <Stack.Screen name='userform' component={UserForm} options={{headerShown: false}}/>
      <Stack.Screen name='CategoryCreate' component={CategoryCreate} options={{headerShown: false}}/>
      <Stack.Screen name='CategoryList' component={CategoryList} options={{headerShown: false}}/>
      <Stack.Screen name='CategoryDetails' component={CategoryDetails} options={{headerShown: false}}/>
      <Stack.Screen name='ProductDetails ' component={ProductDetails} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
    // <>
    //   <Greeting />
    //   <SimpleCalculator />
    // </>
  )
}

export default App

const styles = StyleSheet.create({
  text:{
    color: 'white',
    paddingVertical: 18,
    fontSize: 13,
    textAlign: 'center',
    // backgroundColor: 'green'
  }
})