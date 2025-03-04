import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function NavBar() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Link href={"/"} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="home" size={24} color="#fff" />
            <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
        </Link>

        <Link href={"/search"} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="search" size={24} color="#fff" />
            <Text style={styles.text}>Buscar</Text>
          </TouchableOpacity>
        </Link>

        {/* Envolver todo o botão com <Link> */}
        <Link href="/profile" asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="person" size={24} color="#fff" />
            <Text style={styles.text}>Perfil</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/settings" asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="settings" size={24} color="#fff" />
            <Text style={styles.text}>Configurações</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
  },
});
