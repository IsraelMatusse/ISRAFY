import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Text } from "react-native";
import { Bell, LogInIcon, Search } from "lucide-react-native";
import NavBar from "@/components/NavBar";
import HomeScreen from "./home";

export default function Index() {
  return (
    <>
      <HomeScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 16,
  },
  iconButton: {
    padding: 4,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  recentRow: {
    flexDirection: "row",
    gap: 16,
  },
  recentCard: {
    width: 160,
  },
  recentImage: {
    width: 160,
    height: 160,
    borderRadius: 8,
    marginBottom: 8,
  },
  recentTitle: {
    color: "#fff",
    fontWeight: "500",
  },
  recentSubtitle: {
    color: "#9ca3af",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridCard: {
    width: "48%",
    marginBottom: 16,
  },
  gridImage: {
    width: "100%",
    height: 176,
    borderRadius: 8,
    marginBottom: 8,
  },
  gridTitle: {
    color: "#fff",
    fontWeight: "500",
  },
  gridSubtitle: {
    color: "#9ca3af",
  },
  favoriteArtistsImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
    marginBottom: 16,
  },
});
