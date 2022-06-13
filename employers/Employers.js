import React from 'react';
import {StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity, TouchableHighlight}from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

// importing functions from other files.
import EmployeesDetails from './EmployeesParticulars';
import CertifyingOfficerSDetails from './EmployeesParticulars';
import ManageEmployees from './ManageEmployees';
import Submission from './Submission'; // submission page for the employers
import Confirmation from './Confirmation'; // confirmation page for the employers
import UploadTimesheet from './Timesheet'; 

const Employer_Stack = createStackNavigator();

// following Lucas's naming convention lul.
function EmployeesDetailsLoad() {
    const navigation = useNavigation();
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

function CertifyingOfficerSDetails() {
    const navigation = useNavigation();

}