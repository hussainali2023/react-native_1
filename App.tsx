import React from "react";

import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  useColorScheme,
  ScrollView
} from "react-native"
import FlatCards from "./components/FlatCards";

const App = (): JSX.Element =>{
  // const isDarkMode = useColorScheme() === "dark"
  return (
    <SafeAreaView>
      <ScrollView>
      <View >
        {/* <Text>Hello World!</Text> */}
        <Text>Hello World</Text>
      </View>
      <FlatCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 
  

})

export default App;