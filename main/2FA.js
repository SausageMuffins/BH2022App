import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.WelcomeScreen}>
      <View style={styles.Group652}>
        <View style={styles.Component2}>
          <Text style={styles.Txt599}>8:55</Text>
          <Image
            style={styles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/nfgw2p06bac-I30%3A31%3B14%3A9?alt=media&token=c9da52c2-cb62-4fae-939e-c1248ad894f5",
            }}
          />
          <Image
            style={styles.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/nfgw2p06bac-I30%3A31%3B14%3A7?alt=media&token=1380cac4-9185-45a7-aca3-ae1dfa3543d7",
            }}
          />
          <Image
            style={styles.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/nfgw2p06bac-I30%3A31%3B14%3A8?alt=media&token=756abd86-77c3-4a8e-828c-3aabd8234f67",
            }}
          />
        </View>
        <View style={styles.Group813}>
          <Text style={styles.Txt594}>Welcome to NS ONE</Text>
        </View>
        <Image
          style={styles.Undraw_checking_boxes_re_9h8m11}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/nfgw2p06bac-26%3A125?alt=media&token=24591a03-4597-4c02-a834-8963728d1437",
          }}
        />
        <Text style={styles.Txt481}>
          Your one-stop app for all of your yearly NSmen obligations
        </Text>
        <View style={styles.Group952}>
          <Text style={styles.Txt330}>Login</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  WelcomeScreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 209,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    width: 428,
    height: 926,
  },
  Group652: {
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
  Txt599: {
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

  Group813: {
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 86,
    paddingRight: 85,
    marginBottom: 63,
    backgroundColor: "rgba(29,129,20,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(252,252,252,1)",
    backdropFilter: "blur(4px)",
    width: 428,
    height: 61,
  },
  Txt594: {
    fontSize: 26,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  Undraw_checking_boxes_re_9h8m11: {
    width: 326,
    height: 261,
    marginBottom: 90,
  },
  Txt481: {
    fontSize: 24,
    fontFamily: "Inter, sans-serif",
    fontWeight: "300",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 358,
    height: 107,
    marginBottom: 34,
  },
  Group952: {
    paddingTop: 11,
    paddingBottom: 10,
    paddingLeft: 152,
    paddingRight: 154,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt330: {
    fontSize: 26,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
});
