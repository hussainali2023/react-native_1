import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
    <ScrollView horizontal= {true} style={styles.container}>
        <View style = {[styles.card, styles.cardElevatated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style = {[styles.card, styles.cardElevatated]}>
            <Text>
                me
            </Text>
        </View>
        <View style = {[styles.card, styles.cardElevatated]}>
            <Text>
                to
            </Text>
        </View>
        <View style = {[styles.card, styles.cardElevatated]}>
            <Text>
                Scroll
            </Text>
        </View>
        <View style = {[styles.card, styles.cardElevatated]}>
            <Text>
                and
            </Text>
        </View>
        <View style = {[styles.card, styles.cardElevatated]}>
            <Text>
            see 
            </Text>
        </View>
        <View style = {[styles.card, styles.cardElevatated]}>
            <Text>
                More ...
            </Text>
        </View>
    </ScrollView>
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
        flexDirection:"row",
        padding:8
    },
    card:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        width:100,
        height:100,
        borderRadius: 6,
        margin: 8,
        color:"green"
    },
    cardElevatated: {
        backgroundColor: "yellow"

    }

})

export default ElevatedCard