import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { Text } from "react-native";
import { Search, X } from "lucide-react-native";
import NavBar from "@/components/NavBar";

export default function SearchScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Buscar</Text>
          <View style={styles.searchBar}>
            <Search size={20} color="#000" />
            <TextInput
              placeholder="O que você quer ouvir?"
              style={styles.searchInput}
              placeholderTextColor="#666"
            />
            <TouchableOpacity>
              <X size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.content}>
          <Text style={styles.sectionTitle}>Navegar por todas as seções</Text>
          <View style={styles.genreGrid}>
            {[
              "Pop",
              "Rock",
              "Hip Hop",
              "Eletrônica",
              "Jazz",
              "Clássica",
              "Samba",
              "MPB",
            ].map((genre, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.genreCard,
                  { backgroundColor: `hsl(${index * 45}, 70%, 50%)` },
                ]}
              >
                <Text style={styles.genreText}>{genre}</Text>
              </TouchableOpacity>
            ))}
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
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  genreGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  genreCard: {
    width: "48%",
    height: 96,
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  genreText: {
    color: "#fff",
    fontWeight: "bold",
    padding: 16,
  },
});
