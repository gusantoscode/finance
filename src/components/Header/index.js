import React from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;
export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.textHeader}>{name}</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.buttonUser}>
          <Ionicons name="person" size={27} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
    backgroundColor: "#ff5c00",
    paddingTop: statusBarHeight,
  },

  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textHeader: {
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 24,
  },

  buttonUser: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 44 / 2,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});
