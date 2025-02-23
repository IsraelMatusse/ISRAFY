import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Text } from "react-native";
import { Settings } from "lucide-react-native";
import NavBar from "@/components/NavBar";

export default function ProfileScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Perfil</Text>
          <TouchableOpacity>
            <Settings color="white" size={24} />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={styles.profileInfo}>
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/10/12/66/1012665a812686d32e28193fda4bd436.jpg",
              }}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>Israel Matusse</Text>
            <Text style={styles.profileUsername}>@isra</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Editar perfil</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.statsSection}>
            <Text style={styles.sectionTitle}>Suas estatísticas</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>247</Text>
                <Text style={styles.statLabel}>Playlists</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>4.2k</Text>
                <Text style={styles.statLabel}>Seguidores</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>1.8k</Text>
                <Text style={styles.statLabel}>Seguindo</Text>
              </View>
            </View>
          </View>

          <View style={styles.playlistsSection}>
            <Text style={styles.sectionTitle}>Playlists públicas</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.playlistsRow}>
                {[1, 2, 3, 4].map((item) => (
                  <TouchableOpacity key={item} style={styles.playlistCard}>
                    <Image
                      source={{ uri: `https://picsum.photos/160?${item}` }}
                      style={styles.playlistImage}
                    />
                    <Text style={styles.playlistTitle}>Playlist {item}</Text>
                    <Text style={styles.playlistSongs}>
                      {item * 10} músicas
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
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
  profileInfo: {
    alignItems: "center",
    padding: 16,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
    marginBottom: 16,
  },
  profileName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  profileUsername: {
    color: "#9ca3af",
    marginBottom: 16,
  },
  editButton: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  editButtonText: {
    color: "#fff",
  },
  statsSection: {
    padding: 16,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#9ca3af",
  },
  playlistsSection: {
    padding: 16,
  },
  playlistsRow: {
    flexDirection: "row",
    gap: 16,
  },
  playlistCard: {
    width: 160,
  },
  playlistImage: {
    width: 160,
    height: 160,
    borderRadius: 8,
    marginBottom: 8,
  },
  playlistTitle: {
    color: "#fff",
    fontWeight: "500",
  },
  playlistSongs: {
    color: "#9ca3af",
  },
});
