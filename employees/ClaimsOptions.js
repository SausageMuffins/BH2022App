import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function ClaimsOptions() {
  return (
    <View style={styles.ClaimsOptions}>
      <View style={styles.Group035}>
        <View style={styles.Component4}>
          <Text style={styles.Txt945}>8:55</Text>
          <Image
            style={styles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-I75%3A716%3B14%3A9?alt=media&token=1b5cf93e-d028-4f86-a968-4d4aaf9aa45a",
            }}
          />
          <Image
            style={styles.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-I75%3A716%3B14%3A7?alt=media&token=bfd4f10a-88df-49e1-9dd9-13e8970b2c4c",
            }}
          />
          <Image
            style={styles.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-I75%3A716%3B14%3A8?alt=media&token=fa7bc94e-f9d7-4f49-bb2e-c477e3bdf2cf",
            }}
          />
        </View>
        <View style={styles.Group823}>
          <Text style={styles.Txt533}>Claim Options</Text>
          <Image
            style={styles.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-71%3A537?alt=media&token=34f47283-7729-4659-90b8-8ab85ea18e1f",
            }}
          />
          <Image
            style={styles.Vector4}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-75%3A727?alt=media&token=8c5aea56-c617-4bd0-8766-9dacd250c53b",
            }}
          />
          <Image
            style={styles.Vector3}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-75%3A729?alt=media&token=297cd230-7833-4aff-af2a-437932375a20",
            }}
          />
          <Image
            style={styles.Vector5}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-75%3A730?alt=media&token=f8c19176-6f2c-4a02-be29-117c29487a01",
            }}
          />
        </View>
        <View style={styles.Group52}>
          <Text style={styles.Txt732}>Delete application</Text>
        </View>
        <Text style={styles.Txt165}>Please select your claim option</Text>
        <View style={styles.Group784}>
          <Text style={styles.Txt494}>Income Tax</Text>
        </View>
        <View style={styles.Group932}>
          <Text style={styles.Txt737}>✓</Text>
          <Text style={styles.Txt494}>Average Income</Text>
        </View>
        <View style={styles.Group901}>
          <Text style={styles.Txt494}>Replacement</Text>
        </View>
        <View style={styles.Group417}>
          <Text style={styles.Txt428}>Save and Continue</Text>
        </View>
        <View style={styles.Group792}>
          <Text style={styles.Txt428}>Save and Go Back</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ClaimsOptions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 24,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Group035: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component4: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt945: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
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

  Group823: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 25,
    paddingRight: 21,
    backgroundColor: "rgba(29,129,20,1)",
  },
  Txt533: {
    fontSize: 26,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 55,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 17,
  },
  Vector4: {
    width: 23,
    height: 23,
    marginRight: 18,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 17,
  },
  Vector5: {
    width: 23,
    height: 23,
  },

  Group52: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 40,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt732: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Txt165: {
    fontSize: 23,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.85)",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 39,
  },
  Group784: {
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 119,
    paddingRight: 93,
    marginBottom: 39,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 350,
    height: 60,
  },
  Txt494: {
    fontSize: 24,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group932: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 8,
    paddingLeft: 29,
    paddingRight: 40,
    marginBottom: 39,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 2 },
  },
  Txt737: {
    fontSize: 32,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    marginRight: 58,
  },
  Txt494: {
    fontSize: 24,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group901: {
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 119,
    paddingRight: 73,
    marginBottom: 274,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 350,
    height: 60,
  },
  Txt494: {
    fontSize: 24,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group417: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 68,
    paddingRight: 67,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt428: {
    fontSize: 22,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group792: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 75,
    paddingRight: 70,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt428: {
    fontSize: 22,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});
