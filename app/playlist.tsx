import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Text } from "react-native";
import { Heart, MoreVertical, Play, Share2 } from "lucide-react-native";

export default function PlaylistScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{ uri: "https://picsum.photos/400" }}
            style={styles.coverImage}
          />
          <View style={styles.headerOverlay}>
            <Text style={styles.playlistTitle}>Minha Playlist</Text>
            <Text style={styles.playlistInfo}>
              por Usuário • 23 músicas • 1h 45min
            </Text>
          </View>
        </View>

        <View style={styles.actions}>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Heart color="#22c55e" size={28} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Share2 color="white" size={28} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <MoreVertical color="white" size={28} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.playButton}>
            <Play color="black" size={28} />
          </TouchableOpacity>
        </View>

        <View style={styles.songsList}>
          {[1, 2, 3, 4, 5].map((item) => (
            <TouchableOpacity key={item} style={styles.songItem}>
              <Image
                source={{ uri: `https://picsum.photos/50?${item}` }}
                style={styles.songImage}
              />
              <View style={styles.songInfo}>
                <Text style={styles.songTitle}>Nome da Música {item}</Text>
                <Text style={styles.songArtist}>Artista</Text>
              </View>
              <TouchableOpacity>
                <MoreVertical color="#9ca3af" size={20} />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    position: "relative",
  },
  coverImage: {
    width: "100%",
    height: 320,
  },
  headerOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  playlistTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  playlistInfo: {
    color: "#d1d5db",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  actionButtons: {
    flexDirection: "row",
    gap: 16,
  },
  actionButton: {
    padding: 4,
  },
  playButton: {
    backgroundColor: "#22c55e",
    borderRadius: 25,
    padding: 12,
  },
  songsList: {
    padding: 16,
  },
  songItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    gap: 12,
  },
  songImage: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    color: "#fff",
    fontWeight: "500",
  },
  songArtist: {
    color: "#9ca3af",
  },
});
