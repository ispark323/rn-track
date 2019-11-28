import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.textStyle}> TrackListScreen </Text>
      <Button
        title="Go to TrackDetail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 48
  }
});

export default TrackListScreen;
