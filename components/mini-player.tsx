import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Text } from "react-native";
import { Heart, Pause, SkipBack, SkipForward } from "lucide-react-native";
import NavBar from "./NavBar";

export default function MiniPlayer() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={{ uri: "https://picsum.photos/50" }}
            style={styles.albumCover}
          />
          <View style={styles.songInfo}>
            <Text style={styles.songTitle}>Nome da Música</Text>
            <Text style={styles.artistName}>Artista</Text>
          </View>
          <View style={styles.controls}>
            <TouchableOpacity style={styles.controlButton}>
              <Heart color="#9ca3af" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton}>
              <SkipBack color="white" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.playButton}>
              <Pause color="black" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton}>
              <SkipForward color="white" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#18181b",
    borderTopWidth: 1,
    borderTopColor: "#27272a",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  albumCover: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 12,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    color: "#fff",
    fontWeight: "500",
  },
  artistName: {
    color: "#9ca3af",
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  controlButton: {
    padding: 4,
  },
  playButton: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 4,
  },
});
