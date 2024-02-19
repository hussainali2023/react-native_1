import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native"
import FlatCards from "./components/FlatCards";

const Home = () => {
 return (
    <SafeAreaView>
        <ScrollView>
            <FlatCards/>
        </ScrollView>
    </SafeAreaView>
 )
}

export default Home;