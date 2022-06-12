import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function ManageEmployees() {
  return (
    <View style={ManageEmployeesStyle.ManageEmployees}>
      <View style={ManageEmployeesStyle.Group183}>
        <View style={ManageEmployeesStyle.Component4}>
          <Text style={ManageEmployeesStyle.Txt667}>8:55</Text>
          <Image
            style={ManageEmployeesStyle.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/78bjvtppqt-I71%3A124%3B14%3A9?alt=media&token=be93ecb7-20b9-4653-8672-f5a5eb5638e8",
            }}
          />
          <Image
            style={ManageEmployeesStyle.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/78bjvtppqt-I71%3A124%3B14%3A7?alt=media&token=e9704e4c-06de-4f6c-81d0-9c63de15a8a7",
            }}
          />
          <Image
            style={ManageEmployeesStyle.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/78bjvtppqt-I71%3A124%3B14%3A8?alt=media&token=8297e653-4529-4541-83dd-78218dac5dd8",
            }}
          />
        </View>
        <View style={ManageEmployeesStyle.Group858}>
          <Text style={ManageEmployeesStyle.Txt814}>Application for Employers</Text>
          <Text style={ManageEmployeesStyle.Txt814}>Application for Employers</Text>
        </View>
        <View style={ManageEmployeesStyle.Group451}>
          <Image
            style={ManageEmployeesStyle.Undraw_fill_form_re_cwyf11}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/78bjvtppqt-70%3A284?alt=media&token=8278a94f-658d-4db3-bb25-533f08aea479",
            }}
          />
        </View>
        <Text style={ManageEmployeesStyle.multiple1}>
          Start New Application to begin your Make Up Pay claim. Resume
          Application to continue from where you previously left off.
        </Text>
        <View style={ManageEmployeesStyle.Group57}>
          <Text style={ManageEmployeesStyle.Txt10102}>Start New Application</Text>
        </View>
        <View style={ManageEmployeesStyle.Group56}>
          <Text style={ManageEmployeesStyle.Txt10102}>Resume Application</Text>
        </View>
      </View>
    </View>
  );
}

const ManageEmployeesStyle = StyleSheet.create({
  ManageEmployees: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 97,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(225,237,255,1)",
    width: 428,
    height: 926,
  },
  Group183: {
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
  Txt667: {
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

  Group858: {
    marginBottom: 40,
    backgroundColor: "rgba(69,140,246,1)",
    width: 428,
    height: 61,
  },
  Txt814: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },
  Txt814: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  Group451: {
    paddingTop: 41,
    paddingBottom: 17,
    paddingLeft: 27,
    paddingRight: 27,
    marginBottom: 79,
    borderRadius: 169,
    backgroundColor: "rgba(255, 255, 255, 0.76)",
    width: 338,
    height: 254,
  },
  Undraw_fill_form_re_cwyf11: {
    width: 282,
    height: 194,
  },

  multiple1: {
    main: "Txt337",
    seg1: "[object Object]",
    seg2: "[object Object]",
    seg3: "[object Object]",
    seg4: "[object Object]",
  },
  Group57: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 51,
    paddingRight: 50,
    marginBottom: 32,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 340,
    height: 50,
  },
  Txt10102: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group56: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 61,
    paddingRight: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 340,
    height: 50,
  },
  Txt10102: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});
