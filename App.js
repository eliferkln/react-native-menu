import React from "react";
import BottomMenu from "./components/BottomMenu";
import { View, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <BottomMenu />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
