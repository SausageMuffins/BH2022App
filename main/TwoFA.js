import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground, TouchableHighlight } from "react-native";

export default function TwoFA() {
  return (
    <View style={twoFAStyles._2faScreen}>
      <View style={twoFAStyles.Group092}>
        <View style={twoFAStyles.Component1}>
          <Text style={twoFAStyles.Txt885}>8:55</Text>
          <Image
            style={twoFAStyles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/87uxkuj51v7-14%3A9?alt=media&token=e121ce9c-44e9-4002-ab3f-00dc50aa0fb7",
            }}
          />
          <Image
            style={twoFAStyles.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/87uxkuj51v7-14%3A7?alt=media&token=d5811a25-4c74-4eca-9fbb-a01736854bbf",
            }}
          />
          <Image
            style={twoFAStyles.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/87uxkuj51v7-14%3A8?alt=media&token=01b4d0d3-5360-4c38-8c14-0d354a720cf8",
            }}
          />
        </View>
        <Image
          style={twoFAStyles.Image7}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/87uxkuj51v7-26%3A123?alt=media&token=6f0c3579-6050-4a37-b562-f20bb81b73bf",
          }}
        />
        <Image
          style={twoFAStyles.Image3}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/87uxkuj51v7-26%3A121?alt=media&token=5b572832-e84b-46c6-9070-0dc8e1d94caa",
          }}
        />
        <Image
          style={twoFAStyles.Image8}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/87uxkuj51v7-26%3A124?alt=media&token=63b37cd8-ce11-4283-ace6-90042af85199",
          }}
        />
      </View>
    </View>
  );
}

const twoFAStyles = StyleSheet.create({
  _2faScreen: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 75,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 926,
  },
  Group092: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Component1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 52,
  },
  Txt885: {
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

  Image7: {
    width: 428,
    height: 210,
    marginBottom: 78,
  },
  Image3: {
    width: 316,
    height: 327,
    marginBottom: 88,
  },
  Image8: {
    width: 428,
    height: 60,
  },
});
