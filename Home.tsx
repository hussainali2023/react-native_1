import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native"
import FlatCards from "./components/FlatCards";
import ElevatedCard from "./components/ElevatedCard";

const Home = () => {
 return (
    <SafeAreaView>
        <ScrollView>
            <FlatCards/>
            <ElevatedCard/>
        </ScrollView>
    </SafeAreaView>
 )
}

export default Home;