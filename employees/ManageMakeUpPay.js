import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function ManageMakeUpPay() {
  return (
    <View style={ManageMakeUpPayStyle.ManageMakeUpPay}>
      <Text style={ManageMakeUpPayStyle.Txt758}>Application for Employees</Text>
      <View style={ManageMakeUpPayStyle.Group321}>
        <View style={ManageMakeUpPayStyle.Component2}>
          <Text style={ManageMakeUpPayStyle.Txt687}>8:55</Text>
          <Image
            style={ManageMakeUpPayStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/upjbvx8bps-I26%3A286%3B14%3A9?alt=media&token=f48ed22b-52c6-4148-8a5d-e4fa7c398a7c",
            }}
          />
          <Image
            style={ManageMakeUpPayStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/upjbvx8bps-I26%3A286%3B14%3A7?alt=media&token=fdd6d690-aa53-4611-b4de-330ad8904e11",
            }}
          />
          <Image
            style={ManageMakeUpPayStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/upjbvx8bps-I26%3A286%3B14%3A8?alt=media&token=8a53c73d-60e6-4c23-ad21-131195f0d741",
            }}
          />
        </View>
        <View style={ManageMakeUpPayStyle.Rectangle9} />
        <Image
          style={ManageMakeUpPayStyle.Undraw_printing_invoices_5R4r1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/upjbvx8bps-26%3A377?alt=media&token=707299b4-ebed-4b09-9599-33d6b4ec7d51",
          }}
        />
        <Text style={ManageMakeUpPayStyle.multiple1}>
          Start New Application to begin your Make Up Pay claim. Resume
          Application to continue from where you previously left off.
        </Text>
        <View style={ManageMakeUpPayStyle.Group54}>
          <Text style={ManageMakeUpPayStyle.Txt9109}>Start New Application</Text>
        </View>
        <View style={ManageMakeUpPayStyle.Group55}>
          <Text style={ManageMakeUpPayStyle.Txt9109}>Resume Application</Text>
        </View>
      </View>
    </View>
  );
}

const ManageMakeUpPayStyle = StyleSheet.create({
  ManageMakeUpPay: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Txt758: {
    position: "absolute",
    top: 60,
    left: 53,
    fontSize: 25,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    width: 321,
    height: 60,
  },
  Group321: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    top: 14,
    none: "0px",
    width: 428,
    height: 820,
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  Txt687: {
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

  Rectangle9: {
    backgroundColor: "rgba(29,129,20,1)",
    width: 428,
    height: 61,
    marginBottom: 66,
  },
  Undraw_printing_invoices_5R4r1: {
    width: 353,
    height: 218,
    marginBottom: 112,
  },
  multiple1: {
    main: "Txt080",
    seg1: "[object Object]",
    seg2: "[object Object]",
    seg3: "[object Object]",
    seg4: "[object Object]",
  },
  Group54: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 51,
    paddingRight: 50,
    marginBottom: 32,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt9109: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group55: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 61,
    paddingRight: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt9109: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});
