import NavBar from "@/components/NavBar";
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Button, Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileScreen = () => {
  return (
    <>
      <View style={styles.container}>
        {/* Profile Card */}
        <Card style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
              style={styles.avatar}
            />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>johndoe@example.com</Text>
          </View>

          {/* Details */}
          <View style={styles.infoSection}>
            <View style={styles.infoRow}>
              <Icon name="map-marker" size={20} color="#555" />
              <Text style={styles.infoText}>New York, USA</Text>
            </View>
            <View style={styles.infoRow}>
              <Icon name="phone" size={20} color="#555" />
              <Text style={styles.infoText}>+1 234 567 890</Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <Button mode="contained" style={styles.button} icon="account-edit">
              Edit Profile
            </Button>
            <Button mode="outlined" style={styles.button} icon="logout">
              Logout
            </Button>
          </View>
        </Card>
      </View>
      <NavBar />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    justifyContent: "center",
    padding: 20,
  },
  profileCard: {
    borderRadius: 15,
    padding: 20,
    backgroundColor: "#fff",
    elevation: 5,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 14,
    color: "#777",
  },
  infoSection: {
    marginVertical: 15,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#555",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
  },
});

export default ProfileScreen;
