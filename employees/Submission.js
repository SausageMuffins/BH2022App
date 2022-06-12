import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function MakeUpPayCompleted() {
  return (
    <View style={styles.MakeUpPayCompleted}>
      <View style={styles.Group543}>
        <View style={styles.Component2}>
          <Text style={styles.Txt090}>8:55</Text>
          <Image
            style={styles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lpgyl8587ym-I26%3A941%3B14%3A9?alt=media&token=0ef6bc5d-2541-439d-acff-2635f7f2a54f",
            }}
          />
          <Image
            style={styles.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lpgyl8587ym-I26%3A941%3B14%3A7?alt=media&token=3d6e9ff5-f623-4ff3-8f26-d4253f7dde25",
            }}
          />
          <Image
            style={styles.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lpgyl8587ym-I26%3A941%3B14%3A8?alt=media&token=929386b7-1845-41f6-bac7-96bc3ddfd9d9",
            }}
          />
        </View>
        <View style={styles.Group191}>
          <Text style={styles.Txt755}>Make Up Pay Submitted </Text>
        </View>
        <Image
          style={styles.Undraw_well_done_i2wr1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lpgyl8587ym-26%3A1046?alt=media&token=2c7c0a3b-ea5d-471a-a5ef-e6f18fc26b20",
          }}
        />
        <Text style={styles.Txt526}>
          Congratulations on completing the Make Up Pay application Please give
          up to 7 working days for payment to be received.
        </Text>
        <View style={styles.Group459}>
          <Text style={styles.Txt413}>Back to Profile</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MakeUpPayCompleted: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 98,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Group543: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 11,
  },
  Txt090: {
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

  Group191: {
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 63,
    paddingRight: 60,
    marginBottom: 84,
    backgroundColor: "rgba(29,129,20,1)",
    width: 428,
    height: 61,
  },
  Txt755: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  Undraw_well_done_i2wr1: {
    width: 345,
    height: 311,
    marginBottom: 92,
  },
  Txt526: {
    fontSize: 20,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 372,
    height: 114,
    marginBottom: 69,
  },
  Group459: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 90,
    paddingRight: 92,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(213,217,212,1)",
    width: 340,
    height: 50,
  },
  Txt413: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
});
