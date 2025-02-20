import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import NavBar from "@/components/NavBar";
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.greeting}>🎵 Hello, Music Lover!</Text>
          <Ionicons name="notifications-outline" size={28} color="white" />
        </View>

        <ScrollView>
          {/* Featured Album */}
          <TouchableOpacity
            style={styles.featured}
            onPress={() => console.log("now playing")}
          >
            <Image
              source={{ uri: "https://i.imgur.com/yRCfXhu.jpeg" }}
              style={styles.featuredImage}
            />
            <Text style={styles.featuredText}>🔥 Hot Album of the Week</Text>
          </TouchableOpacity>

          {/* Trending Songs */}
          <Text style={styles.sectionTitle}>Trending Now</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {trendingSongs.map((song, index) => (
              <TouchableOpacity key={index} style={styles.songCard}>
                <Image source={{ uri: song.image }} style={styles.songImage} />
                <Text style={styles.songTitle}>{song.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Recommended Playlists */}
          <Text style={styles.sectionTitle}>Recommended for You</Text>
          {playlists.map((playlist, index) => (
            <TouchableOpacity key={index} style={styles.playlistCard}>
              <Image
                source={{ uri: playlist.image }}
                style={styles.playlistImage}
              />
              <View>
                <Text style={styles.playlistTitle}>{playlist.title}</Text>
                <Text style={styles.playlistSubtitle}>
                  {playlist.songs} songs
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <NavBar />
    </>
  );
};

const trendingSongs = [
  { title: "Song 1", image: "https://i.imgur.com/91Mamsi.jpeg" },
  { title: "Song 2", image: "https://i.imgur.com/fKPTugM.jpeg" },
  { title: "Song 3", image: "https://i.imgur.com/DHxnCvv.jpeg" },
];

const playlists = [
  {
    title: "Chill Vibes",
    songs: 15,
    image: "https://i.imgur.com/Ce7RSrp.jpeg",
  },
  {
    title: "Workout Mix",
    songs: 20,
    image: "https://i.imgur.com/Mnzjgpn.jpeg",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  greeting: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  featured: {
    margin: 20,
    alignItems: "center",
  },
  featuredImage: {
    width: "90%",
    height: 200,
    borderRadius: 10,
  },
  featuredText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  sectionTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
  },
  songCard: {
    margin: 10,
    alignItems: "center",
  },
  songImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  songTitle: {
    color: "white",
    marginTop: 5,
  },
  playlistCard: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  playlistImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  playlistTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  playlistSubtitle: {
    color: "gray",
    fontSize: 14,
  },
});

export default HomeScreen;
