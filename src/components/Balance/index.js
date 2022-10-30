import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Balance({ balance, expenses }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{balance}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>-{expenses}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 22,
    paddingBottom: 22,
    borderRadius: 4,
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -25,
    marginStart: 14,
    marginEnd: 14,
    zIndex: 99,
  },

  itemTitle: {
    color: "#dadada",
    fontSize: 20,
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
  },

  currencySymbol: {
    color: "#dadada",
    marginRight: 3,
  },

  balance: {
    fontSize: 22,
    color: "#2ecc71",
  },

  expenses: {
    fontSize: 22,
    color: "#e74c3c",
  },
});
