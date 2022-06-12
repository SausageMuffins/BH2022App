import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function UploadPaySlip() {
  return (
    <View style={PayslipStyle.UploadPaySlip}>
      <View style={PayslipStyle.Group579}>
        <View style={PayslipStyle.Component2}>
          <Text style={PayslipStyle.Txt9810}>8:55</Text>
          <Image
            style={PayslipStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bvl5gr1bx5d-I26%3A488%3B14%3A9?alt=media&token=b7fc2977-7401-4604-ab80-f55af2e6daf7",
            }}
          />
          <Image
            style={PayslipStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bvl5gr1bx5d-I26%3A488%3B14%3A7?alt=media&token=52a84b8b-68bf-4925-853e-f388a9f63550",
            }}
          />
          <Image
            style={PayslipStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bvl5gr1bx5d-I26%3A488%3B14%3A8?alt=media&token=19f7e352-0aee-4dd8-8fa3-99482d8ca33b",
            }}
          />
        </View>
        <Text style={PayslipStyle.Txt8210}>
          Please upload your past 6 month’s net income as one PDF
        </Text>
        <View style={PayslipStyle.Group680}>
          <Text style={PayslipStyle.Txt267}>Michael Wang_Compiled Pay....pdf</Text>
        </View>
        <Image
          style={PayslipStyle.Group57}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bvl5gr1bx5d-71%3A672?alt=media&token=511ca2c5-b35c-4753-8567-976c2d0ab62a",
          }}
        />
        <View style={PayslipStyle.Group329}>
          <Text style={PayslipStyle.Txt748}>Save and Continue</Text>
        </View>
        <View style={PayslipStyle.Group451}>
          <Text style={PayslipStyle.Txt748}>Save and Go Back</Text>
        </View>
      </View>
      <View style={PayslipStyle.Group961}>
        <Text style={PayslipStyle.Txt257}>Upload</Text>
      </View>
      <View style={PayslipStyle.Group50}>
        <Text style={PayslipStyle.Txt978}>Delete application</Text>
      </View>
      <View style={PayslipStyle.Group51}>
        <Text style={PayslipStyle.Txt978}>Delete application</Text>
      </View>
      <View style={PayslipStyle.Group016}>
        <Text style={PayslipStyle.Txt575}>Upload Payslip</Text>
        <Image
          style={PayslipStyle.Vector3}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bvl5gr1bx5d-71%3A544?alt=media&token=69fcd88a-7328-4038-9939-c2638cb493f2",
          }}
        />
        <Image
          style={PayslipStyle.Vector4}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bvl5gr1bx5d-71%3A543?alt=media&token=231149f7-8116-444f-a691-0dea5f692bdb",
          }}
        />
        <Image
          style={PayslipStyle.Vector3}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bvl5gr1bx5d-71%3A545?alt=media&token=2699689b-8fb0-411d-8e0f-a12da7bc83cc",
          }}
        />
        <Image
          style={PayslipStyle.Vector5}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bvl5gr1bx5d-71%3A546?alt=media&token=76f10528-82aa-4730-a8d0-3f1c04e42c52",
          }}
        />
      </View>
    </View>
  );
}

const PayslipStyle = StyleSheet.create({
  UploadPaySlip: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    paddingTop: 13,
    paddingBottom: 26,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Group579: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  Component2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 154,
  },
  Txt9810: {
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

  Txt8210: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,0.85)",
    textAlign: "center",
    justifyContent: "center",
    width: 404,
    marginBottom: 27,
  },
  Group680: {
    paddingTop: 9,
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 108,
    marginBottom: 28,
    borderRadius: 50,
    backgroundColor: "rgba(213,217,212,1)",
    width: 364,
    height: 36,
  },
  Txt267: {
    fontSize: 15,
    fontWeight: "400",
    color: "rgba(47,46,65,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group57: {
    width: 373,
    height: 241,
    marginBottom: 213,
  },
  Group329: {
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
  Txt748: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group451: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 73,
    paddingRight: 72,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt748: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group961: {
    position: "absolute",
    top: 265,
    none: "0px",
    paddingTop: 8,
    paddingBottom: 6,
    paddingLeft: 22,
    paddingRight: 25,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(213,217,212,1)",
    width: 106,
    height: 36,
  },
  Txt257: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
  },

  Group50: {
    position: "absolute",
    top: 107,
    left: 0,
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt978: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Group51: {
    position: "absolute",
    top: 106,
    left: 0,
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt978: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Group016: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    top: 46,
    none: "0px",
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 21,
    paddingRight: 21,
    backgroundColor: "rgba(29,129,20,1)",
    width: 428,
    height: 61,
  },
  Txt575: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 51,
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
});
