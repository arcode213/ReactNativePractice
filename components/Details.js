import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = ({route}) => {
    const {item} = route.params;

  return (
    <View>
      <Text style={styles.detailText}>{item.id}</Text>
      <Text style={styles.detailText}>{item.item}</Text>
      <Text style={styles.detailText}>{item.detail}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    detailText:{
        color: "blue",
        fontWeight: '800',
        fontSize: 18,
        margin: 10
    }

})