import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

export default function ButtonComp() {
  return (
    <TouchableOpacity style={styles.button}>
      <Button title="Go fuck yourself" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
  },
});
