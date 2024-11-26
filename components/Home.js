import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
    // const data=["Item 1", "Item 2","Item 3"];

    const arr=[
        {
            id: 1,
            item : "Item 1",
            detail: "This Is Item One"
        },
        {
            id: 2,
            item : "Item 2",
            detail: "This Is Item Two"
        },
        {
            id: 3,
            item : "Item 3",
            detail: "This Is Item Three"
        },
        {
            id: 4,
            item : "Item 4",
            detail: "This Is Item Four"
        },
]

    const randerComponent=({item})=>{
        return (
            <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.item}</Text>
            <Button title="View Details" onPress={()=>{navigation.navigate("Detail Page",{item})}}></Button>
        </View>
        )
    }
  return (
    <View>
        <Text>Home Screen</Text>
        <FlatList 
        data={arr}
        renderItem={randerComponent}
        keyExtractor={item=> item.id}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'green',
        marginVertical: 10,
        marginHorizontal: 5,
        height: 70
    },
    itemText: {
        color: 'white',
        fontSize: 18,
        margin: 5
    }
})