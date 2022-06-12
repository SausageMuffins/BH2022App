import React from "react";
import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity, TouchableHighlight } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import WelcomeScreen from './WelcomeScreen'
import TwoFA from './TwoFA'
import Profile from './Profile'
import EmployeesStack from '../employees/Employees'
import Employers from '../employers/Employers'

const Stack = createStackNavigator();

//Functions 
function WelcomeScreenLoad() {
  const navigation = useNavigation();
  return (
    <View style={welcomeScreenStyles.WelcomeScreen}>
      <View style={welcomeScreenStyles.Group652}>
        <View style={welcomeScreenStyles.Component2}>    
        </View>
        <View style={welcomeScreenStyles.Group813}>
          <Text style={welcomeScreenStyles.Txt594}>Welcome to NS ONE</Text>
        </View>
        <Image
          style={welcomeScreenStyles.Undraw_checking_boxes_re_9h8m11}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/nfgw2p06bac-26%3A125?alt=media&token=24591a03-4597-4c02-a834-8963728d1437",
          }}
        />
        <Text style={welcomeScreenStyles.Txt481}>
          Your one-stop app for all of your yearly NSmen obligations
        </Text>
        <View style={welcomeScreenStyles.Group952}>
        <TouchableOpacity onPress={() => navigation.navigate('TwoFAScreen')}>
          <Text style={welcomeScreenStyles.Txt330}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function TwoFALoad() {
  const navigation = useNavigation();
  return (
    <View style={twoFAStyles._2faScreen}>
      <View style={twoFAStyles.Group092}>
        <Image
          style={twoFAStyles.Image7}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/87uxkuj51v7-26%3A123?alt=media&token=6f0c3579-6050-4a37-b562-f20bb81b73bf",
          }}
        />
        <TouchableHighlight onPress={() => navigation.navigate('ProfileScreen')}>
        <Image
          style={twoFAStyles.Image3}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/87uxkuj51v7-26%3A121?alt=media&token=5b572832-e84b-46c6-9070-0dc8e1d94caa",
          }}
        />
      </TouchableHighlight>
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

function ProfileLoad() {
  const navigation = useNavigation();
  return (
    <View style={profileStyles.Profile}>
      <View style={profileStyles.Group904}>
        <View style={profileStyles.Component2}>
        </View>
        <View style={profileStyles.Group511}>
          <Text style={profileStyles.Txt442}>Welcome Back, Michael!</Text>
        </View>
        <View style={profileStyles.Group3310}>
          <View style={profileStyles.Group452}>
            <Image
              style={profileStyles.Ellipse1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A243?alt=media&token=14b68ceb-46ac-48d4-b9c2-22b561f10387",
              }}
            />
            <View style={profileStyles.Group547}>
              <Text style={profileStyles.Txt895}>Name : Michael Wang</Text>
              <Text style={profileStyles.Txt895}>NRIC : SXXXX420W</Text>
              <Text style={profileStyles.Txt712}>Unit : 55 Infantry Brigade</Text>
              <Text style={profileStyles.Txt219}>ORNS Cycles : 3/3 LK 2/7 HK</Text>
            </View>
          </View>
          <Text style={profileStyles.Txt162}>Edit Profile</Text>
        </View>
        <View style={profileStyles.Group743}>
          <Text style={profileStyles.Txt2810}>Your 2022 achievements</Text>
          <View style={profileStyles.Group547}>
            <View style={profileStyles.Group1058}>
              <Image
                style={profileStyles.CheckCircle}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A253?alt=media&token=5e2fd488-7061-43a5-b854-1fa22cadbe34",
                }}
              />
              <Text style={profileStyles.Txt2810}>IPPT</Text>
            </View>
            <View style={profileStyles.Group034}>
              <Image
                style={profileStyles.CheckCircle}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A259?alt=media&token=3b3aac0a-f503-4117-91b0-93027697b48f",
                }}
              />
              <Text style={profileStyles.Txt2810}>ATP</Text>
            </View>
            <View style={profileStyles.Group034}>
              <Image
                style={profileStyles.Vector3}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A252?alt=media&token=085b7689-cade-4006-bf5c-30534d610da2",
                }}
              />
              <Text style={profileStyles.Txt2810}>ICT</Text>
            </View>
            <View style={profileStyles.Group452}>
              <Image
                style={profileStyles.Vector3}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-26%3A262?alt=media&token=a6b07287-c86a-472e-a89c-0c228d05ba66",
                }}
              />
              <Text style={profileStyles.Txt2810}>Make Up Pay</Text>
            </View>
          </View>
        </View>
        <View style={profileStyles.Group309}>
          <Text style={profileStyles.Txt2810}>Manage IPPT</Text>
        </View>
        <View style={profileStyles.Group768}>
          <Text style={profileStyles.Txt869}>Manage ICT</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Employees')}>
        <View style={profileStyles.Group541}>
          <Text style={profileStyles.Txt2810}>Manage Make-Up Pay</Text>
        </View>
        </TouchableOpacity>
        <View style={profileStyles.Group699}>
          <Text style={profileStyles.Txt2810}>Manage Employees</Text>
        </View>
      </View>
    </View>
  );
}

//Export default stack
export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreenLoad} options={{ headerShown: false }}/>
      <Stack.Screen name="TwoFAScreen" component={TwoFALoad} options={{ headerShown: false }}/>
      <Stack.Screen name="ProfileScreen" component={ProfileLoad} options={{ headerShown: false }}/>
      <Stack.Screen name="Employees" component={EmployeesStack} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}


// WeclcomeScreen styles
const welcomeScreenStyles = StyleSheet.create({
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
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
});





// 2FA Styles
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



// Profile Styles
const profileStyles = StyleSheet.create({
  Profile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 13,
    paddingBottom: 64,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "rgba(229,245,223,1)",
    width: 428,
    height: 926,
  },
  Group904: {
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
  Txt695: {
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

  Group511: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 64,
    paddingRight: 64,
    marginBottom: 11,
    backgroundColor: "rgba(29,129,20,1)",
    width: 428,
    height: 61,
  },
  Txt442: {
    fontSize: 25,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },

  Group3310: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 14,
  },
  Group452: {
    display: "flex",
    flexDirection: "row",
  },
  Ellipse1: {
    width: 150,
    height: 150,
    marginRight: 20,
  },
  Group547: {
    display: "flex",
    flexDirection: "column",
  },
  Txt895: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    marginBottom: 12,
  },
  Txt895: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    marginBottom: 12,
  },
  Txt712: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    marginBottom: 14,
  },
  Txt219: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
  },

  Txt162: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(0,0,0,0.6)",
  },

  Group743: {
    marginBottom: 24,
    borderRadius: 25,
    backgroundColor: "rgba(209,236,199,1)",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 4 },
    width: 380,
    height: 236,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
  Group547: {
    display: "flex",
    flexDirection: "column",
  },
  Group1058: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 1,
  },
  CheckCircle: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group034: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 3,
  },
  CheckCircle: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group034: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 3,
  },
  Vector3: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group452: {
    display: "flex",
    flexDirection: "row",
  },
  Vector3: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group309: {
    paddingTop: 13,
    paddingBottom: 12,
    paddingLeft: 119,
    paddingRight: 117,
    marginBottom: 23,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group768: {
    paddingTop: 13,
    paddingBottom: 12,
    paddingLeft: 115,
    paddingRight: 114,
    marginBottom: 21,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt869: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
    width: 149,
    height: 28,
  },

  Group541: {
    paddingTop: 14,
    paddingBottom: 11,
    paddingLeft: 72,
    paddingRight: 70,
    marginBottom: 26,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },

  Group699: {
    paddingTop: 14,
    paddingBottom: 11,
    paddingLeft: 84,
    paddingRight: 83,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(202,202,202,1)",
    width: 380,
    height: 55,
  },
  Txt2810: {
    fontSize: 22,
    fontWeight: "700",
    color: "rgba(0,0,0,0.65)",
  },
});


