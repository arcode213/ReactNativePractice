import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const APIFetching = () => {
    const [data, setData] = useState([]);

    const API = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const res = await fetch(url);
        const jsonData = await res.json();
        setData(jsonData);
    };

    useEffect(() => {
        API();
    }, []);
    
    return (
        <View style={styles.container}>
            
            {/* <FlatList 
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text>ID: {item.id}</Text>
                        <Text>Title: {item.title}</Text>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            /> */}
        <ScrollView>

        {
            data.map((item,index)=>{
                return (
                    <>
                    <View style={styles.itemContainer}>
                        <Text>ID: {item.id}</Text>
                        <Text>Title: {item.title}</Text>
                    </View>
                    </>
                )
            })
        }
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    itemContainer: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
});

export default APIFetching;
