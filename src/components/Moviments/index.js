import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Moviments({ data }) {
  const [showValue, setShowValue] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={() => setShowValue(!showValue)}
    >
      <Text style={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        {showValue ? (
          <Text style={data.type === 0 ? styles.expenses : styles.balance}>
            {data.type === 0 ? `- R$ ${data.value}` : `R$ ${data.value}`}
          </Text>
        ) : (
          <View style={styles.skeleton}></View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dadada",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },

  date: {
    fontSize: 12,
    color: "#dadada",
    fontWeight: "bold",
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
  },

  balance: {
    color: "#2ecc71",
    fontSize: 16,
    fontWeight: "bold",
  },

  expenses: {
    color: "#e74c3c",
    fontSize: 16,
    fontWeight: "bold",
  },

  skeleton: {
    backgroundColor: "#dadada",
    marginTop: 6,
    width: 80,
    height: 10,
    borderRadius: 10 / 2,
  },
});
