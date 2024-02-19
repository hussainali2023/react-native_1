import React from "react";

import {
  View,
  SafeAreaView,
  Text,
  StyleSheet
} from "react-native"

const App = () =>{
  return (
    <SafeAreaView>
      <View >
        <Text style={styles.heading}>Hello World</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  heading: {
    textAlign:"center",
    fontSize: 30,
    fontWeight:"900",
    marginTop: 20,
    color:"red",
    backgroundColor:"yellow",
    marginHorizontal:50,
    padding:20,
    borderRadius: 20
  }
})

export default App;