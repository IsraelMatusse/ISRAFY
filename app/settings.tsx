import { Link } from "expo-router";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { List, Switch, Button, Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import NavBar from "@/components/NavBar";

export default function ConfigurationScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        {/* Account Section */}
        <List.Section title="Conta">
          <List.Item
            title="Perfil"
            description="Gerencie seu perfil"
            left={() => <Icon name="account-circle" size={24} color="#555" />}
            onPress={() => navigation.navigate("profile")}
          />

          <List.Item
            title="Alterar senha"
            description="Atualize sua senha"
            left={() => <Icon name="lock-reset" size={24} color="#555" />}
            onPress={() => console.log("Alterar senha")}
          />
        </List.Section>

        <Divider />

        {/* Preferences Section */}
        <List.Section title="Preferências">
          <List.Item
            title="Modo escuro"
            description={isDarkMode ? "Ativado" : "Desativado"}
            left={() => <Icon name="theme-light-dark" size={24} color="#555" />}
            right={() => (
              <Switch
                value={isDarkMode}
                onValueChange={() => setIsDarkMode(!isDarkMode)}
              />
            )}
          />
          <List.Item
            title="Notificações"
            description={isNotificationsEnabled ? "Ativadas" : "Desativadas"}
            left={() => <Icon name="bell" size={24} color="#555" />}
            right={() => (
              <Switch
                value={isNotificationsEnabled}
                onValueChange={() =>
                  setIsNotificationsEnabled(!isNotificationsEnabled)
                }
              />
            )}
          />
        </List.Section>

        <Divider />

        {/* Logout Button */}
        <View style={styles.logoutContainer}>
          <Button
            mode="contained"
            icon="logout"
            onPress={() => console.log("Logout")}
            style={styles.logoutButton}
          >
            Sair da conta
          </Button>
        </View>
      </View>
      <NavBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 20,
  },
  logoutContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  logoutButton: {
    width: "100%",
    backgroundColor: "#D32F2F",
  },
});
