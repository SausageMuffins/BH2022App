import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function MakeUpPayCompleted() {
  return (
    <View style={styles.MakeUpPayCompleted}>
      <View style={styles.Group899}>
        <View style={styles.Component2}>
          <Text style={styles.Txt417}>8:55</Text>
          <Image
            style={styles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/jne0ig51jdq-I26%3A941%3B14%3A9?alt=media&token=64f12993-69e9-4083-ac97-84054cb2246a",
            }}
          />
          <Image
            style={styles.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/jne0ig51jdq-I26%3A941%3B14%3A7?alt=media&token=a0a4ea39-d6eb-4fbf-89dd-6aeaea54dd7d",
            }}
          />
          <Image
            style={styles.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/jne0ig51jdq-I26%3A941%3B14%3A8?alt=media&token=4fc0d73e-d186-4c5a-a0ba-e3a96c929a29",
            }}
          />
        </View>
        <View style={styles.Group190}>
          <Text style={styles.Txt614}>Make Up Pay Submitted </Text>
        </View>
        <Image
          style={styles.Undraw_well_done_i2wr1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/jne0ig51jdq-26%3A1046?alt=media&token=492c1556-93ba-4765-959e-93b4367e150b",
          }}
        />
        <Text style={styles.Txt1078}>
          Congratulations on completing the Make Up Pay application Please give
          up to 7 working days for payment to be received.
        </Text>
        <View style={styles.Group366}>
          <Text style={styles.Txt712}>Back to Profile</Text>
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
  Group899: {
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
  Txt417: {
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

  Group190: {
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 63,
    paddingRight: 60,
    marginBottom: 84,
    backgroundColor: "rgba(29,129,20,1)",
    width: 428,
    height: 61,
  },
  Txt614: {
    fontSize: 26,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  Undraw_well_done_i2wr1: {
    width: 345,
    height: 311,
    marginBottom: 92,
  },
  Txt1078: {
    fontSize: 20,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 372,
    height: 114,
    marginBottom: 69,
  },
  Group366: {
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
  Txt712: {
    fontSize: 22,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
});
