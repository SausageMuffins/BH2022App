import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

import WelcomeScreen from "./main/WelcomeScreen";
import Profile from "./main/Profile";
import TwoFA from "./main/TwoFA";

import ManageMakeUpPay from "./employees/ManageMakeUpPay";
import ClaimsOptions from "./employees/ClaimsOptions";
import UploadPaySlip from "./employees/Payslip";
import EnterParticulars from "./employees/Particulars";
import EmployeesReviewSubmission from "./employees/Confirmation";
import MakeUpPayCompleted from "./employees/Submission";

import ManageEmployees from "./employers/ManageEmployees";
import UploadTimesheet from "./employers/Timesheet";
import EmployeeSDetails from "./employers/EmployeesParticulars";
import CertifyingOfficerSDetails from "./employers/EmployersParticulars";
import EmployersReviewSubmission from "./employers/Confirmation";
import EmployersMakeUpPayCompleted from "./employers/Submission";

import { useFonts } from "expo-font";

export default function App() {
  return <EmployersReviewSubmission />;
}
