import { ActivityIndicator, Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore'

const UserForm = ({route}) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [cast, setCast] = useState('');
    const [loading, setloading] = useState(false)
    const {userid} = route.params
    const handleAddData = async () => {
      try {
        setloading(true)
        await firestore()
          .collection('Forms')
          .doc(userid)
          .set({
            name: name,
            age: parseInt(age),
            cast: cast,
            createdAt: firestore.FieldValue.serverTimestamp(),
          });
          setloading(false)
        Alert.alert('Success', 'User added successfully!');
        setName('');
        setAge('');
        setCast('');
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Failed to add user. Please try again.');
      }
    };

    return (
      <View style={{ padding: 20 }}>
        <Text>Name</Text>
        <TextInput
          placeholder="Enter name"
          value={name}
          onChangeText={setName}
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <Text>Cast</Text>
        <TextInput
          placeholder="Enter Cast"
          value={cast}
          onChangeText={setCast}
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <Text>Age</Text>
        <TextInput
          placeholder="Enter age"
          value={age}
          onChangeText={setAge}
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
          keyboardType="number-pad"
        />
        <Button title="Add User" onPress={handleAddData} />
      </View>
    );
}

export default UserForm

const styles = StyleSheet.create({

})
