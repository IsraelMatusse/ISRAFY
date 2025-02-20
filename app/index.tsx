import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import NavBar from "@/components/NavBar";

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Home screen</Text>
      </View>
      <NavBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
