import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function Profile() {
  return (
    <View style={styles.Profile}>
      <View style={styles.Group904}>
        <View style={styles.Component2}>
          <Text style={styles.Txt695}>8:55</Text>
          <Image
            style={styles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-I26%3A178%3B14%3A9?alt=media&token=88c48548-d260-498a-8f25-ef5ad7ac15b2",
            }}
          />
          <Image
            style={styles.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-I26%3A178%3B14%3A7?alt=media&token=c6e57c70-c9b6-4f0a-9624-ebd1bc0702a6",
            }}
          />
          <Image
            style={styles.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-I26%3A178%3B14%3A8?alt=media&token=04ab74fa-bd34-4d1c-823d-bd5a12919da9",
            }}
          />
        </View>
        <View style={styles.Group511}>
          <Text style={styles.Txt442}>Welcome Back, Michael!</Text>
        </View>
        <View style={styles.Group3310}>
          <View style={styles.Group452}>
            <Image
              style={styles.Ellipse1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A243?alt=media&token=14b68ceb-46ac-48d4-b9c2-22b561f10387",
              }}
            />
            <View style={styles.Group547}>
              <Text style={styles.Txt895}>Name : Michael Wang</Text>
              <Text style={styles.Txt895}>NRIC : SXXXX420W</Text>
              <Text style={styles.Txt712}>Unit : 55 Infantry Brigade</Text>
              <Text style={styles.Txt219}>ORNS Cycles : 3/3 LK 2/7 HK</Text>
            </View>
          </View>
          <Text style={styles.Txt162}>Edit Profile</Text>
        </View>
        <View style={styles.Group743}>
          <Text style={styles.Txt2810}>Your 2022 achievements</Text>
          <View style={styles.Group547}>
            <View style={styles.Group1058}>
              <Image
                style={styles.CheckCircle}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A253?alt=media&token=5e2fd488-7061-43a5-b854-1fa22cadbe34",
                }}
              />
              <Text style={styles.Txt2810}>IPPT</Text>
            </View>
            <View style={styles.Group034}>
              <Image
                style={styles.CheckCircle}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A259?alt=media&token=3b3aac0a-f503-4117-91b0-93027697b48f",
                }}
              />
              <Text style={styles.Txt2810}>ATP</Text>
            </View>
            <View style={styles.Group034}>
              <Image
                style={styles.Vector3}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A252?alt=media&token=085b7689-cade-4006-bf5c-30534d610da2",
                }}
              />
              <Text style={styles.Txt2810}>ICT</Text>
            </View>
            <View style={styles.Group452}>
              <Image
                style={styles.Vector3}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A262?alt=media&token=a6b07287-c86a-472e-a89c-0c228d05ba66",
                }}
              />
              <Text style={styles.Txt2810}>Make Up Pay</Text>
            </View>
          </View>
        </View>
        <View style={styles.Group309}>
          <Text style={styles.Txt2810}>Manage IPPT</Text>
        </View>
        <View style={styles.Group768}>
          <Text style={styles.Txt869}>Manage ICT</Text>
        </View>
        <View style={styles.Group541}>
          <Text style={styles.Txt2810}>Manage Make-Up Pay</Text>
        </View>
        <View style={styles.Group699}>
          <Text style={styles.Txt2810}>Manage Employees</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Profile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 64,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Group904: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt695: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 229,
  },
  Vector: {
    width: 23.13,
    height: 20,
    marginRight: 11,
  },
  Vector1: {
    width: 25,
    height: 17.5,
    marginRight: 11,
  },
  Vector2: {
    width: 25,
    height: 12.5,
  },

  Group511: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 64,
    paddingRight: 64,
    marginBottom: 11,
    backgroundColor: "rgba(29,129,20,1)",
    width: 428,
    height: 61,
  },
  Txt442: {
    fontSize: 25,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  Group3310: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 14,
  },
  Group452: {
    display: "flex",
    flexDirection: "row",
  },
  Ellipse1: {
    width: 150,
    height: 150,
    marginRight: 20,
  },
  Group547: {
    display: "flex",
    flexDirection: "column",
  },
  Txt895: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    marginBottom: 12,
  },
  Txt895: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    marginBottom: 12,
  },
  Txt712: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    marginBottom: 14,
  },
  Txt219: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
  },

  Txt162: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(0,0,0,0.6)",
  },

  Group743: {
    marginBottom: 24,
    borderRadius: 25,
    backgroundColor: "rgba(209,236,199,1)",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 4 },
    width: 380,
    height: 236,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
  Group547: {
    display: "flex",
    flexDirection: "column",
  },
  Group1058: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 1,
  },
  CheckCircle: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group034: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 3,
  },
  CheckCircle: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group034: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 3,
  },
  Vector3: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group452: {
    display: "flex",
    flexDirection: "row",
  },
  Vector3: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group309: {
    paddingTop: 13,
    paddingBottom: 12,
    paddingLeft: 119,
    paddingRight: 117,
    marginBottom: 23,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group768: {
    paddingTop: 13,
    paddingBottom: 12,
    paddingLeft: 115,
    paddingRight: 114,
    marginBottom: 21,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt869: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    width: 149,
    height: 28,
  },

  Group541: {
    paddingTop: 14,
    paddingBottom: 11,
    paddingLeft: 72,
    paddingRight: 70,
    marginBottom: 26,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group699: {
    paddingTop: 14,
    paddingBottom: 11,
    paddingLeft: 84,
    paddingRight: 83,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
});
