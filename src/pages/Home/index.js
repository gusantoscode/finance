import { StyleSheet, View, Text, FlatList } from "react-native";
import Actions from "../../components/Actions";
import Balance from "../../components/Balance";
import Header from "../../components/Header";
import Moviments from "../../components/Moviments";

const data = [
  {
    id: 1,
    label: "Boleto conta de luz",
    value: "134,20",
    date: "17/07/2022",
    type: 0,
  },
  {
    id: 2,
    label: "Pix - Maria Luiza",
    value: "826,87",
    date: "22/09/2022",
    type: 1,
  },
  {
    id: 3,
    label: "Salário",
    value: "6.730,27",
    date: "01/10/2022",
    type: 0,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Gustavo Santos" />

      <Balance balance="9.250,90" expenses="731,88" />

      <Actions />

      <Text style={styles.title}>Transações Recentes</Text>

      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
