import React from "react";

import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  useColorScheme
} from "react-native"

const App = (): JSX.Element =>{
  const isDarkMode = useColorScheme() === "light"
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Text style={isDarkMode ? styles.blackText : styles.whiteText}>Hello World</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 
  container: {
    // flex: 1,
    // alignItems: "center"
    backgroundColor:"black",
    height:900
  },
 
  heading: {
    textAlign:"center",
    fontSize: 30,
    fontWeight:"900",
    marginTop: 20,
    // color:"red",
    backgroundColor:"yellow",
    marginHorizontal:50,
    padding:20,
    borderRadius: 20
  },

  whiteText: {
    color:"red",
    backgroundColor:"yellow"
  },
  
  blackText: {
    color: "blue",
    backgroundColor:"red"
  }

})

export default App;