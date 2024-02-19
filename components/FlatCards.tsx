import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      
      <Text style={styles.headingText}>FlatCards</Text>
    <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Red</Text>
        </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal: 8
    },
    container: {
        flex:1,
        flexDirection:"row"
    },
    card:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        width:100,
        height:100,
        borderRadius: 6,
        margin: 8
    },
    cardOne: {
        backgroundColor: "red"
    },
    cardTwo: {
        backgroundColor: "green"
    },
    cardThree: {
        backgroundColor: "blue"
    },
})


export default FlatCards