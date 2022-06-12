import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function MeFinal() {
  return (
    <View style={styles.MeFinal}>
      <View style={styles.Group778}>
        <View style={styles.Component2}>
          <Text style={styles.Txt523}>8:55</Text>
          <Image
            style={styles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zt4u4v7dhwq-I70%3A530%3B14%3A9?alt=media&token=95649e1e-38dc-41c1-8c8b-c22e5c55525e",
            }}
          />
          <Image
            style={styles.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zt4u4v7dhwq-I70%3A530%3B14%3A7?alt=media&token=2bc59377-fbad-4bad-b69b-a97875573382",
            }}
          />
          <Image
            style={styles.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zt4u4v7dhwq-I70%3A530%3B14%3A8?alt=media&token=a37aed25-f053-4d25-90ea-0a4d873021d5",
            }}
          />
        </View>
        <View style={styles.Group991}>
          <Text style={styles.Txt748}>Make Up Pay Submitted </Text>
        </View>
        <Image
          style={styles.Undraw_well_done_i2wr1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zt4u4v7dhwq-70%3A537?alt=media&token=9fbdebb6-8a3c-47c4-90a3-974183cf6661",
          }}
        />
        <Text style={styles.Txt386}>
          Congratulations on completing the Make Up Pay claims for employees.
          Please give up to 7 working days for submission to be processed.
        </Text>
        <View style={styles.Group6910}>
          <Text style={styles.Txt3107}>Back to Profile</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MeFinal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 105,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(225,237,255,1)",
    width: 428,
    height: 926,
  },
  Group778: {
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
  Txt523: {
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

  Group991: {
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 62,
    paddingRight: 61,
    marginBottom: 88,
    backgroundColor: "rgba(69,140,246,1)",
    width: 428,
    height: 61,
  },
  Txt748: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  Undraw_well_done_i2wr1: {
    width: 345,
    height: 311,
    marginBottom: 88,
  },
  Txt386: {
    fontSize: 20,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 372,
    height: 114,
    marginBottom: 62,
  },
  Group6910: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 90,
    paddingRight: 92,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 340,
    height: 50,
  },
  Txt3107: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
});
