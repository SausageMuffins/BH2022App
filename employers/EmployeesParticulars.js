import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";

export default function EmployeeSDetails() {
  return (
    <View style={EmployeesParticulars.EmployeeSDetails}>
      <View style={EmployeesParticulars.Group352}>
        <View style={EmployeesParticulars.Component4}>
          <Text style={EmployeesParticulars.Txt294}>8:55</Text>
          <Image
            style={EmployeesParticulars.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-I71%3A910%3B14%3A9?alt=media&token=e11acb73-030e-4cc1-853a-1b4cce289d01",
            }}
          />
          <Image
            style={EmployeesParticulars.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-I71%3A910%3B14%3A7?alt=media&token=75b3e64a-e0b6-4624-8ef9-25b27da51267",
            }}
          />
          <Image
            style={EmployeesParticulars.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-I71%3A910%3B14%3A8?alt=media&token=4527323e-f635-4d46-9736-dee0cbdfa9ed",
            }}
          />
        </View>
        <View style={EmployeesParticulars.Group524}>
          <Text style={EmployeesParticulars.Txt384}>Particulars</Text>
          <View style={EmployeesParticulars.Group311}>
            <Text style={EmployeesParticulars.Txt502}>Employee Particulars</Text>
            <Image
              style={EmployeesParticulars.Vector3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-71%3A1020?alt=media&token=e98aed13-bec4-4dff-ac20-8552c8d8bd10",
              }}
            />
            <Image
              style={EmployeesParticulars.Vector3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-71%3A1021?alt=media&token=03ba0baf-a6b0-4680-bb86-ce373682bae6",
              }}
            />
            <Image
              style={EmployeesParticulars.Vector3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-71%3A1022?alt=media&token=3773130a-550d-44db-baf2-c32e21543ac6",
              }}
            />
            <Image
              style={EmployeesParticulars.Vector4}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/b8u274czw5r-71%3A1023?alt=media&token=90c1f1d6-1a15-4a64-9175-ed45bf942ee2",
              }}
            />
          </View>
        </View>
        <View style={EmployeesParticulars.Group55}>
          <Text style={EmployeesParticulars.Txt209}>Delete application</Text>
        </View>
        <Text style={EmployeesParticulars.Txt729}>Please enter your employee’s details.</Text>
        <View style={EmployeesParticulars.Group62}>
          <Text style={EmployeesParticulars.Txt394}>CPF Submission Number (CSN)</Text>
          <View style={EmployeesParticulars.Rectangle145} />
          <Text style={EmployeesParticulars.Txt466}>Employee’s Company Particulars</Text>
          <Text style={EmployeesParticulars.Txt894}>Name</Text>
          <View style={EmployeesParticulars.Rectangle134} />
          <Text style={EmployeesParticulars.Txt894}>Address</Text>
          <View style={EmployeesParticulars.Rectangle135} />
          <Text style={EmployeesParticulars.Txt396}>Phone</Text>
          <View style={EmployeesParticulars.Rectangle132} />
          <Text style={EmployeesParticulars.Txt748}>Employee Particulars</Text>
          <Text style={EmployeesParticulars.Txt894}>Occupation/Designation</Text>
          <View style={EmployeesParticulars.Rectangle133} />
          <Text style={EmployeesParticulars.Txt894}>Date of Employment</Text>
          <View style={EmployeesParticulars.Group323}>
            <Text style={EmployeesParticulars.Txt236}>DD/MM/YYYY</Text>
          </View>
        </View>
        <View style={EmployeesParticulars.Group683}>
          <Text style={EmployeesParticulars.Txt770}>Save and Continue</Text>
        </View>
        <View style={EmployeesParticulars.Group764}>
          <Text style={EmployeesParticulars.Txt770}>Save and Go Back</Text>
        </View>
      </View>
    </View>
  );
}

const EmployeesParticulars = StyleSheet.create({
  EmployeeSDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 37,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(225,237,255,1)",
    width: 428,
    height: 926,
  },
  Group352: {
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
  Txt294: {
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

  Group524: {
    marginBottom: 1,
    backgroundColor: "rgba(69,140,246,1)",
    width: 428,
    height: 61,
  },
  Txt384: {
    fontSize: 26,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },
  Group311: {
    display: "flex",
    flexDirection: "row",
  },
  Txt502: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 46,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 16,
  },
  Vector4: {
    width: 23,
    height: 23,
  },

  Group55: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 25,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 428,
    height: 39,
  },
  Txt209: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(249,0,0,0.9)",
    textAlign: "center",
    justifyContent: "center",
    width: 248,
    height: 22,
  },

  Txt729: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 404,
    marginBottom: 27,
  },
  Group62: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 32,
  },
  Txt394: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle145: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 30,
  },
  Txt466: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,0.8)",
    marginBottom: 7,
  },
  Txt894: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle134: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 17,
  },
  Txt894: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle135: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 18,
  },
  Txt396: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 1,
  },
  Rectangle132: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 159,
    height: 30,
    borderRadius: 10,
    marginBottom: 39,
  },
  Txt748: {
    fontSize: 20,
    fontWeight: "700",
    color: "rgba(0,0,0,0.8)",
    marginBottom: 9,
  },
  Txt894: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Rectangle133: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 21,
  },
  Txt894: {
    fontSize: 16,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    marginBottom: 4,
  },
  Group323: {
    paddingTop: 5,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 41,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: 159,
    height: 30,
  },
  Txt236: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,0.65)",
  },

  Group683: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 68,
    paddingRight: 67,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 340,
    height: 50,
  },
  Txt770: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },

  Group764: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 75,
    paddingRight: 70,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(217,217,217,1)",
    width: 340,
    height: 50,
  },
  Txt770: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(29,129,20,1)",
  },
});
