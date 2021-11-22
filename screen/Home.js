import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Album from "../components/Album";
import Header from "../components/Header";
import SearchOption from "../components/SearchOption";

export default function Home({navigation}) {
  const [enteredValue ,setEnteredValue] =useState("")
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
      .then((res) => res.json())
      .then((result) => setAlbum(result.feed.entry));
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <Header title="Albums" />
      <SearchOption enteredValue={enteredValue} setEnteredValue={setEnteredValue} />
      <ScrollView >
        <Album enteredValue={enteredValue} navigation={navigation} album={album} /> 
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#eee",
  },
});
