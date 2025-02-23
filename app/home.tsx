import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Text } from "react-native";
import { Bell, LogInIcon, Search, User2Icon } from "lucide-react-native";
import NavBar from "@/components/NavBar";
import { Link } from "expo-router";
const recentPlaylist = [
  {
    id: 1,
    name: "Mix Diário 1",
    imageUrl:
      "https://i.pinimg.com/736x/fe/7a/f9/fe7af9fbaeb523d789beeb91b4f20e50.jpg",
  },
  {
    id: 2,
    name: "Mix Diário 2",
    imageUrl:
      "https://i.pinimg.com/736x/11/4a/e3/114ae38f03341a6b68d0ef5e27023fa3.jpg",
  },
  {
    id: 3,
    name: "Mix Diário 3",
    imageUrl:
      "https://i.pinimg.com/736x/91/6b/26/916b26ad750fe04c935faf2b8e8d978f.jpg",
  },
  {
    id: 4,
    name: "Mix Diário 4",
    imageUrl:
      "https://i.pinimg.com/736x/10/03/43/10034366d5bbded5fa90bb5370a79e8d.jpg",
  },
];

const mostPlayedPlaylist = [
  {
    id: 1,
    name: "Mix Diário 1",
    imageUrl:
      "https://i.pinimg.com/736x/f9/32/7a/f9327a848e09ab5fb71cd2f86bce0212.jpg",
  },
  {
    id: 2,
    name: "Mix Diário 2",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSooqf2tA4uNLVllPOsmJsWRX6nZtm3mMWg&s",
  },
  {
    id: 3,
    name: "Mix Diário 3",
    imageUrl: "https://archive.org/download/TFaCdT/Capa.jpg",
  },
  {
    id: 4,
    name: "Mix Diário 4",
    imageUrl: "https://i1.sndcdn.com/artworks-000647124079-xk8dqk-t500x500.jpg",
  },
  {
    id: 5,
    name: "Mix Diário 5",
    imageUrl:
      "https://i.pinimg.com/736x/10/12/66/1012665a812686d32e28193fda4bd436.jpg",
  },
  {
    id: 6,
    name: "Mix Diário 6",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_EF85W9HxMNYpcS2vhG-sLoIHUs5bEwg6A&s",
  },
];

const favoriteArtists = [
  {
    id: 1,
    name: "Travis Scott",
    imageUrl:
      "https://i.pinimg.com/736x/90/12/aa/9012aa2ee3d39d8943572710695e93b7.jpg",
  },
  {
    id: 2,
    name: "Kendrick Lamar",
    imageUrl:
      "https://i.pinimg.com/736x/26/17/16/261716389a49e00a07cef33e27d3b263.jpg",
  },
  {
    id: 3,
    name: "A$AP Rocky",
    imageUrl:
      "https://i.pinimg.com/736x/1c/80/70/1c80701b001e6b8bb5b06d70024d1c9c.jpg",
  },
  {
    id: 4,
    name: "Tyler, the Creator",
    imageUrl:
      "https://i.pinimg.com/736x/1f/40/b1/1f40b1332ce12601d499bc467f4682e6.jpg",
  },
];

export default function HomeScreen() {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Boa tarde</Text>
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Bell color="white" size={24} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <User2Icon color="white" size={24} />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Tocadas recentemente</Text>
              <View style={styles.gridContainer}>
                {mostPlayedPlaylist.map((playlist) => (
                  <Link href="/player" asChild>
                    <TouchableOpacity
                      key={playlist.id}
                      style={styles.recentCard}
                    >
                      <Image
                        source={{ uri: playlist.imageUrl }}
                        style={styles.recentImage}
                      />

                      <Text style={styles.recentTitle}>{playlist.name}</Text>
                    </TouchableOpacity>
                  </Link>
                ))}
              </View>
            </View>
          </ScrollView>

          <ScrollView>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Volte a Escutar </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.recentRow}>
                  {recentPlaylist.map((playlist) => (
                    <Link href="/player" asChild>
                      <TouchableOpacity
                        key={playlist.id}
                        style={styles.recentCard}
                      >
                        <Image
                          source={{ uri: playlist.imageUrl }}
                          style={styles.recentImage}
                        />
                        <Text style={styles.recentTitle}>{playlist.name}</Text>
                        <Text style={styles.recentSubtitle}>
                          Suas músicas favoritas
                        </Text>
                      </TouchableOpacity>
                    </Link>
                  ))}
                </View>
              </ScrollView>
            </View>
          </ScrollView>

          <ScrollView>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Artistas Favoritos </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.recentRow}>
                  {favoriteArtists.map((artist) => (
                    <Link href="/player" asChild>
                      <TouchableOpacity
                        key={artist.id}
                        style={styles.recentCard}
                      >
                        <Image
                          source={{ uri: artist.imageUrl }}
                          style={styles.favoriteArtistsImage}
                        />
                        <Text style={styles.recentTitle}>{artist.name}</Text>
                      </TouchableOpacity>
                    </Link>
                  ))}
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

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
    width: 100,
  },
  recentImage: {
    width: 100,
    height: 100,
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
