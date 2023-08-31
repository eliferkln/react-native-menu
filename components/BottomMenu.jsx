import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class BottomMenu extends Component {
  state = {
    activeIndex: 0,
  };

  handleMenuItemPress = (index) => {
    this.setState({ activeIndex: index });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <View style={styles.navigation}>
        <TouchableOpacity
          style={[styles.list, activeIndex === 0 && styles.active]}
          onPress={() => this.handleMenuItemPress(0)}
        >
          <Ionicons
            name="home-outline"
            style={[styles.icon, activeIndex === 0 && styles.activeIcon]}
          />
          <Text style={[styles.text, activeIndex === 0 && styles.activeText]}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.list, activeIndex === 1 && styles.active]}
          onPress={() => this.handleMenuItemPress(1)}
        >
          <Ionicons
            name="person-outline"
            style={[styles.icon, activeIndex === 1 && styles.activeIcon]}
          />
          <Text style={[styles.text, activeIndex === 1 && styles.activeText]}>
            Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.list, activeIndex === 2 && styles.active]}
          onPress={() => this.handleMenuItemPress(2)}
        >
          <Ionicons
            name="chatbubble-outline"
            style={[styles.icon, activeIndex === 2 && styles.activeIcon]}
          />
          <Text style={[styles.text, activeIndex === 2 && styles.activeText]}>
            Message
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.list, activeIndex === 3 && styles.active]}
          onPress={() => this.handleMenuItemPress(3)}
        >
          <Ionicons
            name="image-outline"
            style={[styles.icon, activeIndex === 3 && styles.activeIcon]}
          />
          <Text style={[styles.text, activeIndex === 3 && styles.activeText]}>
            Photos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.list, activeIndex === 4 && styles.active]}
          onPress={() => this.handleMenuItemPress(4)}
        >
          <Ionicons
            name="settings-outline"
            style={[styles.icon, activeIndex === 4 && styles.activeIcon]}
          />
          <Text style={[styles.text, activeIndex === 4 && styles.activeText]}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default BottomMenu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    width: "100%",
    height: 100,
    backgroundColor: "#222327",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    position: "absolute",
    bottom: 0,
  },
  list: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 25,
  },
  active: {
    transform: [{ translateY: -22 }],
  },
  icon: {
    fontSize: 25,
    marginRight: 5,
    color: "white",
  },
  activeIcon: {
    color: "#29fd53",
  },
  text: {
    color: "#29fd53", // Change the text color to green
    fontSize: 12,
    letterSpacing: 0.05,
    opacity: 0,
    transform: [{ translateY: 20 }],
    transition: "0.5s",
  },
  activeText: {
    transform: [{ translateY: 10 }],
    opacity: 1,
  },
});
