import {
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from "react-native";
import { Text } from "react-native";
import {
  Bell,
  ChevronRight,
  Download,
  HardDrive,
  Lock,
  LogOut,
  Music2,
  User,
  Volume2,
} from "lucide-react-native";
import NavBar from "@/components/NavBar";

export default function SettingsScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Configurações</Text>
        </View>

        <ScrollView>
          <View style={styles.content}>
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Conta</Text>
              <TouchableOpacity style={styles.menuItem}>
                <User color="white" size={24} />
                <View style={styles.menuItemContent}>
                  <Text style={styles.menuItemText}>Perfil</Text>
                </View>
                <ChevronRight color="#9ca3af" size={20} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Lock color="white" size={24} />
                <View style={styles.menuItemContent}>
                  <Text style={styles.menuItemText}>Privacidade</Text>
                </View>
                <ChevronRight color="#9ca3af" size={20} />
              </TouchableOpacity>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionHeader}>App</Text>
              <TouchableOpacity style={styles.menuItem}>
                <Music2 color="white" size={24} />
                <View style={styles.menuItemContent}>
                  <Text style={styles.menuItemText}>Qualidade do áudio</Text>
                  <Text style={styles.menuItemSubtext}>Alta</Text>
                </View>
                <ChevronRight color="#9ca3af" size={20} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Download color="white" size={24} />
                <View style={styles.menuItemContent}>
                  <Text style={styles.menuItemText}>Downloads</Text>
                  <Text style={styles.menuItemSubtext}>
                    12 músicas • 284 MB
                  </Text>
                </View>
                <ChevronRight color="#9ca3af" size={20} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <HardDrive color="white" size={24} />
                <View style={styles.menuItemContent}>
                  <Text style={styles.menuItemText}>Armazenamento</Text>
                  <Text style={styles.menuItemSubtext}>2.4 GB disponível</Text>
                </View>
                <ChevronRight color="#9ca3af" size={20} />
              </TouchableOpacity>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionHeader}>Notificações</Text>
              <View style={styles.menuItem}>
                <Bell color="white" size={24} />
                <View style={styles.menuItemContent}>
                  <Text style={styles.menuItemText}>Notificações push</Text>
                </View>
                <Switch />
              </View>
              <View style={styles.menuItem}>
                <Volume2 color="white" size={24} />
                <View style={styles.menuItemContent}>
                  <Text style={styles.menuItemText}>Sons do app</Text>
                </View>
                <Switch />
              </View>
            </View>

            <TouchableOpacity style={styles.logoutButton}>
              <LogOut color="#ef4444" size={24} />
              <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <NavBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    padding: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  content: {
    padding: 16,
  },
  section: {
    backgroundColor: "#18181b",
    borderRadius: 12,
    marginBottom: 24,
  },
  sectionHeader: {
    color: "#fff",
    fontWeight: "600",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#27272a",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemText: {
    color: "#fff",
  },
  menuItemSubtext: {
    color: "#9ca3af",
  },
  logoutButton: {
    backgroundColor: "#18181b",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logoutText: {
    color: "#ef4444",
    fontWeight: "500",
  },
});
