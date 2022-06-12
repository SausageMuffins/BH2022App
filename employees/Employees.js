import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

import ManageMakeUpPay from './ManageMakeUpPay';
import ClaimsOptions from './ClaimsOptions';
import Payslip from './Payslip';
import Particulars from './Particulars';
import Submission from './Submission';
import Confirmation from './Confirmation';

const Stack = createStackNavigator();

// Functions
function Profile() {
  return (
    <View style={profileStyles.Profile}>
      <View style={profileStyles.Group904}>
        <View style={profileStyles.Component2}>
          <Text style={profileStyles.Txt695}>8:55</Text>
          <Image
            style={profileStyles.Vector}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-I26%3A178%3B14%3A9?alt=media&token=88c48548-d260-498a-8f25-ef5ad7ac15b2",
            }}
          />
          <Image
            style={profileStyles.Vector1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-I26%3A178%3B14%3A7?alt=media&token=c6e57c70-c9b6-4f0a-9624-ebd1bc0702a6",
            }}
          />
          <Image
            style={profileStyles.Vector2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/e83ofj9t60n-I26%3A178%3B14%3A8?alt=media&token=04ab74fa-bd34-4d1c-823d-bd5a12919da9",
            }}
          />
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
        <View style={profileStyles.Group541}>
          <Text style={profileStyles.Txt2810}>Manage Make-Up Pay</Text>
        </View>
        <View style={profileStyles.Group699}>
          <Text style={profileStyles.Txt2810}>Manage Employees</Text>
        </View>
      </View>
    </View>
  )
  
}
function ManageMakeUpPayLoad() {
  const navigation = useNavigation();
  return (
    <View style={ManageMakeUpPayStyle.ManageMakeUpPay}>
      <Text style={ManageMakeUpPayStyle.Txt758}>Application for Employees</Text>
      <View style={ManageMakeUpPayStyle.Group321}>
        <View style={ManageMakeUpPayStyle.Component2}>
          <Text style={ManageMakeUpPayStyle.Txt687}>8:55</Text>
          <Image
            style={ManageMakeUpPayStyle.Vector}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/upjbvx8bps-I26%3A286%3B14%3A9?alt=media&token=f48ed22b-52c6-4148-8a5d-e4fa7c398a7c',
            }}
          />
          <Image
            style={ManageMakeUpPayStyle.Vector1}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/upjbvx8bps-I26%3A286%3B14%3A7?alt=media&token=fdd6d690-aa53-4611-b4de-330ad8904e11',
            }}
          />
          <Image
            style={ManageMakeUpPayStyle.Vector2}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/upjbvx8bps-I26%3A286%3B14%3A8?alt=media&token=8a53c73d-60e6-4c23-ad21-131195f0d741',
            }}
          />
        </View>
        <View style={ManageMakeUpPayStyle.Rectangle9} />
        <Image
          style={ManageMakeUpPayStyle.Undraw_printing_invoices_5R4r1}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/upjbvx8bps-26%3A377?alt=media&token=707299b4-ebed-4b09-9599-33d6b4ec7d51',
          }}
        />
        <Text style={ManageMakeUpPayStyle.multiple1}>
          Start New Application to begin your Make Up Pay claim. Resume
          Application to continue from where you previously left off.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('ClaimsOptions')}>
          <View style={ManageMakeUpPayStyle.Group54}>
            <Text style={ManageMakeUpPayStyle.Txt9109}>
              Start New Application
            </Text>
          </View>
        </TouchableOpacity>
        <View style={ManageMakeUpPayStyle.Group55}>
          <Text style={ManageMakeUpPayStyle.Txt9109}>Resume Application</Text>
        </View>
      </View>
    </View>
  );
}

function ClaimsOptionsLoad() {
  const navigation = useNavigation();
  return (
    <View style={ClaimsOptionsStyle.ClaimsOptions}>
      <View style={ClaimsOptionsStyle.Group035}>
        <View style={ClaimsOptionsStyle.Component4}>
          <Text style={ClaimsOptionsStyle.Txt945}>8:55</Text>
          <Image
            style={ClaimsOptionsStyle.Vector}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-I75%3A716%3B14%3A9?alt=media&token=1b5cf93e-d028-4f86-a968-4d4aaf9aa45a',
            }}
          />
          <Image
            style={ClaimsOptionsStyle.Vector1}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-I75%3A716%3B14%3A7?alt=media&token=bfd4f10a-88df-49e1-9dd9-13e8970b2c4c',
            }}
          />
          <Image
            style={ClaimsOptionsStyle.Vector2}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-I75%3A716%3B14%3A8?alt=media&token=fa7bc94e-f9d7-4f49-bb2e-c477e3bdf2cf',
            }}
          />
        </View>
        <View style={ClaimsOptionsStyle.Group823}>
          <Text style={ClaimsOptionsStyle.Txt533}>Claim Options</Text>
          <Image
            style={ClaimsOptionsStyle.Vector3}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-71%3A537?alt=media&token=34f47283-7729-4659-90b8-8ab85ea18e1f',
            }}
          />
          <Image
            style={ClaimsOptionsStyle.Vector4}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-75%3A727?alt=media&token=8c5aea56-c617-4bd0-8766-9dacd250c53b',
            }}
          />
          <Image
            style={ClaimsOptionsStyle.Vector3}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-75%3A729?alt=media&token=297cd230-7833-4aff-af2a-437932375a20',
            }}
          />
          <Image
            style={ClaimsOptionsStyle.Vector5}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/4332bjuct29-75%3A730?alt=media&token=f8c19176-6f2c-4a02-be29-117c29487a01',
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(StackActions.popToTop())}>
          <View style={ClaimsOptionsStyle.Group52}>
            <Text style={ClaimsOptionsStyle.Txt732}>Delete application</Text>
          </View>
        </TouchableOpacity>
        <Text style={ClaimsOptionsStyle.Txt165}>
          Please select your claim option
        </Text>
        <View style={ClaimsOptionsStyle.Group784}>
          <Text style={ClaimsOptionsStyle.Txt494}>Income Tax</Text>
        </View>
        <View style={ClaimsOptionsStyle.Group932}>
          <Text style={ClaimsOptionsStyle.Txt737}>✓</Text>
          <Text style={ClaimsOptionsStyle.Txt494}>Average Income</Text>
        </View>
        <View style={ClaimsOptionsStyle.Group901}>
          <Text style={ClaimsOptionsStyle.Txt494}>Replacement</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Payslip')}>
          <View style={ClaimsOptionsStyle.Group417}>
            <Text style={ClaimsOptionsStyle.Txt428}>Save and Continue</Text>
          </View>
        </TouchableOpacity>
        <View style={ClaimsOptionsStyle.Group792}>
          <Text style={ClaimsOptionsStyle.Txt428}>Save and Go Back</Text>
        </View>
      </View>
    </View>
  );
}

function PaySlipLoad() {
  const navigation = useNavigation();
  return (
    <View style={PayslipStyle.UploadPaySlip}>
      <View style={PayslipStyle.Group579}>
        <View style={PayslipStyle.Component2}>
          <Text style={PayslipStyle.Txt9810}>8:55</Text>
          <Image
            style={PayslipStyle.Vector}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bvl5gr1bx5d-I26%3A488%3B14%3A9?alt=media&token=b7fc2977-7401-4604-ab80-f55af2e6daf7',
            }}
          />
          <Image
            style={PayslipStyle.Vector1}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bvl5gr1bx5d-I26%3A488%3B14%3A7?alt=media&token=52a84b8b-68bf-4925-853e-f388a9f63550',
            }}
          />
          <Image
            style={PayslipStyle.Vector2}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bvl5gr1bx5d-I26%3A488%3B14%3A8?alt=media&token=19f7e352-0aee-4dd8-8fa3-99482d8ca33b',
            }}
          />
        </View>
        <Text style={PayslipStyle.Txt8210}>
          Please upload your past 6 month’s net income as one PDF
        </Text>
        <View style={PayslipStyle.Group680}>
          <Text style={PayslipStyle.Txt267}>
            Michael Wang_Compiled Pay....pdf
          </Text>
        </View>
        <Image
          style={PayslipStyle.Group57}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bvl5gr1bx5d-71%3A672?alt=media&token=511ca2c5-b35c-4753-8567-976c2d0ab62a',
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Particulars')}>
          <View style={PayslipStyle.Group329}>
            <Text style={PayslipStyle.Txt748}>Save and Continue</Text>
          </View>
        </TouchableOpacity>
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
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bvl5gr1bx5d-71%3A544?alt=media&token=69fcd88a-7328-4038-9939-c2638cb493f2',
          }}
        />
        <Image
          style={PayslipStyle.Vector4}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bvl5gr1bx5d-71%3A543?alt=media&token=231149f7-8116-444f-a691-0dea5f692bdb',
          }}
        />
        <Image
          style={PayslipStyle.Vector3}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bvl5gr1bx5d-71%3A545?alt=media&token=2699689b-8fb0-411d-8e0f-a12da7bc83cc',
          }}
        />
        <Image
          style={PayslipStyle.Vector5}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bvl5gr1bx5d-71%3A546?alt=media&token=76f10528-82aa-4730-a8d0-3f1c04e42c52',
          }}
        />
      </View>
    </View>
  );
}

function ParticularsLoad() {
  const navigation = useNavigation();
  return (
    <View style={ParticularsStyle.EnterParticulars}>
      <View style={ParticularsStyle.Group835}>
        <View style={ParticularsStyle.Group835}>
          <Text style={ParticularsStyle.Txt699}>NS/SV Training</Text>
          <View style={ParticularsStyle.Group247}>
            <Text style={ParticularsStyle.Txt275}>Start Date</Text>
            <Text style={ParticularsStyle.Txt892}>End Date</Text>
          </View>
          <View style={ParticularsStyle.Group4104}>
            <Text style={ParticularsStyle.Txt087}>DD/MM/YYYY</Text>
          </View>
          <Text style={ParticularsStyle.Txt7106}>Occupation/Designation</Text>
          <View style={ParticularsStyle.Group399}>
            <Text style={ParticularsStyle.Txt9210}>Save and Go Back</Text>
          </View>
          <View style={ParticularsStyle.Rectangle126} />
          <Text style={ParticularsStyle.Txt114}>Company Particulars</Text>
          <View style={ParticularsStyle.Rectangle124} />
          <Text style={ParticularsStyle.Txt250}>Name</Text>
          <Text style={ParticularsStyle.Txt460}>Address</Text>
          <View style={ParticularsStyle.Rectangle125} />
          <Text style={ParticularsStyle.Txt892}>Phone</Text>
          <View style={ParticularsStyle.Group71010}>
            <View style={ParticularsStyle.Group896}>
              <Text style={ParticularsStyle.Txt087}>DD/MM/YYYY</Text>
            </View>
            <View style={ParticularsStyle.Group520}>
              <Text style={ParticularsStyle.Txt087}>DD/MM/YYYY</Text>
            </View>
          </View>
          <Text style={ParticularsStyle.Txt289}>Date of Employment</Text>
          <View style={ParticularsStyle.Rectangle123} />
          <View style={ParticularsStyle.Group51}>
            <Text style={ParticularsStyle.Txt6310}>Delete application</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Confirmation')}>
            <View style={ParticularsStyle.Group362}>
              <Text style={ParticularsStyle.Txt9210}>Save and Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={ParticularsStyle.Group002}>
          <Image
            style={ParticularsStyle.Vector}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A338?alt=media&token=57410986-7571-402f-972f-84be201039fa',
            }}
          />
          <View style={ParticularsStyle.Group433}>
            <Text style={ParticularsStyle.Txt835}>Particulars</Text>
            <Image
              style={ParticularsStyle.Vector1}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A339?alt=media&token=faeb1b0d-a964-43cf-883f-ca75d8ecba65',
              }}
            />
            <Image
              style={ParticularsStyle.Vector2}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A360?alt=media&token=a952b947-e55a-4471-8388-678917f49a64',
              }}
            />
            <Image
              style={ParticularsStyle.Vector2}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A359?alt=media&token=006a1626-aa51-46e5-91ca-fe1b80630215',
              }}
            />
            <Image
              style={ParticularsStyle.Vector3}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A361?alt=media&token=3a04c37a-d5fe-4ce9-aeca-85a27113378c',
              }}
            />
            <Image
              style={ParticularsStyle.Vector}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A362?alt=media&token=ae5d7a73-caee-4be3-bff9-bf410bfb64e8',
              }}
            />
          </View>
          <Image
            style={ParticularsStyle.Vector}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A340?alt=media&token=998c5e5d-2f1b-4b53-96c7-8a2e0aa40665',
            }}
          />
          <Image
            style={ParticularsStyle.Vector}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A341?alt=media&token=cf0c4c29-4e97-4bc3-8978-87382f9c159d',
            }}
          />
          <Image
            style={ParticularsStyle.Vector}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/6zib5b3q9cf-71%3A342?alt=media&token=abee835c-dfed-4f30-8625-a01d573eac32',
            }}
          />
          <Text style={ParticularsStyle.Txt192}>Make Up Pay </Text>
        </View>
        <View style={ParticularsStyle.Group511}>
          <Text style={ParticularsStyle.Txt6310}>Delete application</Text>
        </View>
      </View>
    </View>
  );
}

function ConfirmationLoad() {
  const navigation = useNavigation();
  return (
    <View style={ConfirmationStyle.ReviewSubmission}>
      <View style={ConfirmationStyle.Group728}>
        <View style={ConfirmationStyle.Component2}>
          <Text style={ConfirmationStyle.Txt281}>8:55</Text>
          <Image
            style={ConfirmationStyle.Vector}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-I71%3A382%3B14%3A9?alt=media&token=d9e8d49b-1a57-48ff-a097-a97094fb9999',
            }}
          />
          <Image
            style={ConfirmationStyle.Vector1}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-I71%3A382%3B14%3A7?alt=media&token=d1e2bde6-c211-4faf-8853-40315c0deb15',
            }}
          />
          <Image
            style={ConfirmationStyle.Vector2}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-I71%3A382%3B14%3A8?alt=media&token=6e3fd394-d3a7-4e8e-9a5a-4c91f1432a04',
            }}
          />
        </View>
        <View style={ConfirmationStyle.Group742}>
          <View style={ConfirmationStyle.Group819}>
            <Text style={ConfirmationStyle.Txt163}>Review</Text>
            <Image
              style={ConfirmationStyle.Vector3}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-71%3A400?alt=media&token=87aaf535-325f-4beb-add7-62da938f3bff',
              }}
            />
            <Image
              style={ConfirmationStyle.Vector3}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-71%3A660?alt=media&token=75de3b39-13f9-4b2a-a958-36eb1d8d8e75',
              }}
            />
            <Image
              style={ConfirmationStyle.Vector4}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-71%3A401?alt=media&token=a5b7bd41-6200-4053-a20c-b1706f2077b3',
              }}
            />
            <Image
              style={ConfirmationStyle.Vector5}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-71%3A398?alt=media&token=7a7d6cfd-81db-43dd-9026-bafbf43f8dc2',
              }}
            />
          </View>
          <Text style={ConfirmationStyle.Txt897}>Make Up Pay </Text>
        </View>
        <View style={ConfirmationStyle.Group309}>
          <View style={ConfirmationStyle.Group213}>
            <Text style={ConfirmationStyle.Txt795}>Review your submission</Text>
            <Text style={ConfirmationStyle.Txt609}>
              CAIFAN Engineering Pte. Ltd.
            </Text>
          </View>
          <View style={ConfirmationStyle.Group133}>
            <View style={ConfirmationStyle.Line1} />
            <Text style={ConfirmationStyle.Txt128}>Claim Option</Text>
            <View style={ConfirmationStyle.Frame2}>
              <Text style={ConfirmationStyle.Txt918}>Average Income</Text>
            </View>
            <Image
              style={ConfirmationStyle.Vector6}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-71%3A581?alt=media&token=3e67fff0-db8c-4618-962b-af4d70fa5605',
              }}
            />
          </View>
          <View style={ConfirmationStyle.Group7210}>
            <Text style={ConfirmationStyle.Txt944}>Payslip Upload</Text>
            <Text style={ConfirmationStyle.Txt747}>Michael Wang_Co....pdf</Text>
            <Image
              style={ConfirmationStyle.Vector6}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-71%3A582?alt=media&token=4e8ea218-74aa-4397-a0b0-d3e7168f56e6',
              }}
            />
          </View>
          <View style={ConfirmationStyle.Line2} />
          <View style={ConfirmationStyle.Group7210}>
            <Text style={ConfirmationStyle.Txt143}>NS/SV Training</Text>
            <Image
              style={ConfirmationStyle.Vector6}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/96vxv0w9kc8-71%3A583?alt=media&token=6e787179-db9c-4be2-ae9d-3ee45d2cad62',
              }}
            />
          </View>
          <View style={ConfirmationStyle.Group1019}>
            <Text style={ConfirmationStyle.Txt684}>Start Date</Text>
            <Text style={ConfirmationStyle.Txt609}>15/03/2022</Text>
          </View>
          <View style={ConfirmationStyle.Group1019}>
            <Text style={ConfirmationStyle.Txt284}>End Date</Text>
            <Text style={ConfirmationStyle.Txt609}>31/03/2022</Text>
          </View>
          <View style={ConfirmationStyle.Group929}>
            <Text style={ConfirmationStyle.Txt774}>
              Occupation/ Designation
            </Text>
            <Text style={ConfirmationStyle.Txt609}>Principle Engineer</Text>
          </View>
          <View style={ConfirmationStyle.Group316}>
            <Text style={ConfirmationStyle.Txt8210}>Address</Text>
            <Text style={ConfirmationStyle.Txt609}>
              5 Cai Fan Lane, Singapore 324533
            </Text>
          </View>
          <Text style={ConfirmationStyle.Txt941}>Company Particulars</Text>
          <View style={ConfirmationStyle.Group316}>
            <Text style={ConfirmationStyle.Txt361}>Phone</Text>
            <Text style={ConfirmationStyle.Txt609}>6570 3498</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Submission')}>
        <View style={ConfirmationStyle.Group767}>
          <Text style={ConfirmationStyle.Txt399}>Submit</Text>
        </View>
        </TouchableOpacity>
        <View style={ConfirmationStyle.Group9810}>
          <Text style={ConfirmationStyle.Txt399}>Save and Go Back</Text>
        </View>
      </View>
      <View style={ConfirmationStyle.Group52}>
        <Text style={ConfirmationStyle.Txt156}>Delete application</Text>
      </View>
    </View>
  );
}

function SubmissionLoad() {
  return (
    <View style={SubmissionStyle.MakeUpPayCompleted}>
      <View style={SubmissionStyle.Group543}>
        <View style={SubmissionStyle.Component2}>
          <Text style={SubmissionStyle.Txt090}>8:55</Text>
          <Image
            style={SubmissionStyle.Vector}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lpgyl8587ym-I26%3A941%3B14%3A9?alt=media&token=0ef6bc5d-2541-439d-acff-2635f7f2a54f',
            }}
          />
          <Image
            style={SubmissionStyle.Vector1}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lpgyl8587ym-I26%3A941%3B14%3A7?alt=media&token=3d6e9ff5-f623-4ff3-8f26-d4253f7dde25',
            }}
          />
          <Image
            style={SubmissionStyle.Vector2}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lpgyl8587ym-I26%3A941%3B14%3A8?alt=media&token=929386b7-1845-41f6-bac7-96bc3ddfd9d9',
            }}
          />
        </View>
        <View style={SubmissionStyle.Group191}>
          <Text style={SubmissionStyle.Txt755}>Make Up Pay Submitted </Text>
        </View>
        <Image
          style={SubmissionStyle.Undraw_well_done_i2wr1}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/lpgyl8587ym-26%3A1046?alt=media&token=2c7c0a3b-ea5d-471a-a5ef-e6f18fc26b20',
          }}
        />
        <Text style={SubmissionStyle.Txt526}>
          Congratulations on completing the Make Up Pay application Please give
          up to 7 working days for payment to be received.
        </Text>
        <View style={SubmissionStyle.Group459}>
          <Text style={SubmissionStyle.Txt413}>Back to Profile</Text>
        </View>
      </View>
    </View>
  );
}

//Export default stack
export default function EmployeesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ManageMakeUpPay"
        component={ManageMakeUpPayLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ClaimsOptions"
        component={ClaimsOptionsLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payslip"
        component={PaySlipLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Particulars"
        component={ParticularsLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Confirmation"
        component={ConfirmationLoad}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Submission"
        component={SubmissionLoad}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
    
  );
}

// Manage Make Up Pay Styles
const ManageMakeUpPayStyle = StyleSheet.create({
  ManageMakeUpPay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    backgroundColor: 'rgba(229,245,223,1)',
    width: 428,
    height: 926,
  },
  Txt758: {
    position: 'absolute',
    top: 60,
    left: 53,
    fontSize: 25,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
    width: 321,
    height: 60,
  },
  Group321: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: 14,
    none: '0px',
    width: 428,
    height: 820,
  },
  Component2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  Txt687: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(0,0,0,1)',
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
    backgroundColor: 'rgba(29,129,20,1)',
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
    main: 'Txt080',
    seg1: '[object Object]',
    seg2: '[object Object]',
    seg3: '[object Object]',
    seg4: '[object Object]',
  },
  Group54: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 51,
    paddingRight: 50,
    marginBottom: 32,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 340,
    height: 50,
  },
  Txt9109: {
    fontSize: 22,
    fontWeight: '700',
    color: 'rgba(29,129,20,1)',
  },

  Group55: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 61,
    paddingRight: 60,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 340,
    height: 50,
  },
  Txt9109: {
    fontSize: 22,
    fontWeight: '700',
    color: 'rgba(29,129,20,1)',
  },
});

// Claims Options Styles
const ClaimsOptionsStyle = StyleSheet.create({
  ClaimsOptions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 13,
    paddingBottom: 24,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: 'rgba(229,245,223,1)',
    width: 428,
    height: 926,
  },
  Group035: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Component4: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  Txt945: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(0,0,0,1)',
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

  Group823: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 25,
    paddingRight: 21,
    backgroundColor: 'rgba(29,129,20,1)',
  },
  Txt533: {
    fontSize: 26,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
    marginRight: 55,
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

  Group52: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 40,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 428,
    height: 39,
  },
  Txt732: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(249,0,0,0.9)',
    textAlign: 'center',
    justifyContent: 'center',
    width: 248,
    height: 22,
  },

  Txt165: {
    fontSize: 23,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.85)',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 39,
  },
  Group784: {
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 119,
    paddingRight: 93,
    marginBottom: 39,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(217,217,217,1)',
    width: 350,
    height: 60,
  },
  Txt494: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
  },

  Group932: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 8,
    paddingLeft: 29,
    paddingRight: 40,
    marginBottom: 39,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(217,217,217,1)',
    shadowColor: 'rgba(0,0,0,0.25)',
    elevation: 0,
    shadowOffset: { width: 0, height: 2 },
  },
  Txt737: {
    fontSize: 32,
    fontWeight: '700',
    color: 'rgba(0,0,0,1)',
    marginRight: 58,
  },
  Txt494: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
  },

  Group901: {
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 119,
    paddingRight: 73,
    marginBottom: 274,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(217,217,217,1)',
    width: 350,
    height: 60,
  },
  Txt494: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
  },

  Group417: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 68,
    paddingRight: 67,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 340,
    height: 50,
  },
  Txt428: {
    fontSize: 22,
    fontWeight: '700',
    color: 'rgba(29,129,20,1)',
  },

  Group792: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 75,
    paddingRight: 70,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 340,
    height: 50,
  },
  Txt428: {
    fontSize: 22,
    fontWeight: '700',
    color: 'rgba(29,129,20,1)',
  },
});

// Payslip Styles
const PayslipStyle = StyleSheet.create({
  UploadPaySlip: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    paddingTop: 13,
    paddingBottom: 26,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: 'rgba(229,245,223,1)',
    width: 428,
    height: 926,
  },
  Group579: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  Component2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 154,
  },
  Txt9810: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(0,0,0,1)',
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
    fontWeight: '700',
    color: 'rgba(0,0,0,0.85)',
    textAlign: 'center',
    justifyContent: 'center',
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
    backgroundColor: 'rgba(213,217,212,1)',
    width: 364,
    height: 36,
  },
  Txt267: {
    fontSize: 15,
    fontWeight: '400',
    color: 'rgba(47,46,65,1)',
    textAlign: 'center',
    justifyContent: 'center',
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
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 340,
    height: 50,
  },
  Txt748: {
    fontSize: 22,
    fontWeight: '700',
    color: 'rgba(29,129,20,1)',
  },

  Group451: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 73,
    paddingRight: 72,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 340,
    height: 50,
  },
  Txt748: {
    fontSize: 22,
    fontWeight: '700',
    color: 'rgba(29,129,20,1)',
  },

  Group961: {
    position: 'absolute',
    top: 265,
    none: '0px',
    paddingTop: 8,
    paddingBottom: 6,
    paddingLeft: 22,
    paddingRight: 25,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(213,217,212,1)',
    width: 106,
    height: 36,
  },
  Txt257: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(0,0,0,1)',
    textAlign: 'center',
    justifyContent: 'center',
  },

  Group50: {
    position: 'absolute',
    top: 107,
    left: 0,
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 428,
    height: 39,
  },
  Txt978: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(249,0,0,0.9)',
    textAlign: 'center',
    justifyContent: 'center',
    width: 248,
    height: 22,
  },

  Group51: {
    position: 'absolute',
    top: 106,
    left: 0,
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 428,
    height: 39,
  },
  Txt978: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(249,0,0,0.9)',
    textAlign: 'center',
    justifyContent: 'center',
    width: 248,
    height: 22,
  },

  Group016: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 46,
    none: '0px',
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 21,
    paddingRight: 21,
    backgroundColor: 'rgba(29,129,20,1)',
    width: 428,
    height: 61,
  },
  Txt575: {
    fontSize: 26,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
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

// Particulars Styles
const ParticularsStyle = StyleSheet.create({
  EnterParticulars: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 13,
    paddingBottom: 31,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: 'rgba(229,245,223,1)',
    width: 428,
    height: 926,
  },
  Group835: {
    display: 'flex',
    flexDirection: 'column',
  },
  Group835: {
    display: 'flex',
    flexDirection: 'column',
  },
  Txt699: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
    marginBottom: 15,
  },
  Group247: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 83,
  },
  Txt275: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
    marginRight: 141,
  },
  Txt892: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
  },

  Group4104: {
    paddingTop: 5,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 41,
    marginBottom: 25,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: 159,
    height: 30,
  },
  Txt087: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.65)',
  },

  Txt7106: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
    marginBottom: 455,
  },
  Group399: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 73,
    paddingRight: 72,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(202,202,202,1)',
    width: 340,
    height: 50,
  },
  Txt9210: {
    fontSize: 22,
    fontWeight: '700',
    color: 'rgba(29,129,20,1)',
  },

  Rectangle126: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: 159,
    height: 30,
    borderRadius: 10,
  },
  Txt114: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
    marginBottom: 43,
  },
  Rectangle124: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: 378,
    height: 30,
    borderRadius: 10,
  },
  Txt250: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
    marginBottom: 60,
  },
  Txt460: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
    marginBottom: 6,
  },
  Rectangle125: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: 378,
    height: 30,
    borderRadius: 10,
    marginBottom: 25,
  },
  Txt892: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
  },
  Group71010: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 25,
  },
  Group896: {
    paddingTop: 5,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 41,
    marginRight: 60,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: 159,
    height: 30,
  },
  Txt087: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.65)',
  },

  Group520: {
    paddingTop: 5,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 41,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: 159,
    height: 30,
  },
  Txt087: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(0,0,0,0.65)',
  },

  Txt289: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
    marginBottom: 89,
  },
  Rectangle123: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: 378,
    height: 30,
    borderRadius: 10,
  },
  Group51: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    marginBottom: 632,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 428,
    height: 39,
  },
  Txt6310: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(249,0,0,0.9)',
    textAlign: 'center',
    justifyContent: 'center',
    width: 248,
    height: 22,
  },

  Group362: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 68,
    paddingRight: 67,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(202,202,202,1)',
    width: 340,
    height: 50,
  },
  Txt9210: {
    fontSize: 22,
    fontWeight: '700',
    color: 'rgba(29,129,20,1)',
  },

  Group002: {
    marginBottom: 1,
    backgroundColor: 'rgba(29,129,20,1)',
    width: 428,
    height: 61,
  },
  Vector: {
    width: 23,
    height: 23,
  },
  Group433: {
    display: 'flex',
    flexDirection: 'row',
  },
  Txt835: {
    fontSize: 26,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
    marginRight: 50,
  },
  Vector1: {
    width: 23,
    height: 23,
    marginRight: 24,
  },
  Vector2: {
    width: 23,
    height: 23,
    marginRight: 18,
  },
  Vector2: {
    width: 23,
    height: 23,
    marginRight: 18,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 17,
  },
  Vector: {
    width: 23,
    height: 23,
  },

  Vector: {
    width: 23,
    height: 23,
  },
  Vector: {
    width: 23,
    height: 23,
  },
  Vector: {
    width: 23,
    height: 23,
  },
  Txt192: {
    fontSize: 26,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },

  Group511: {
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 428,
    height: 39,
  },
  Txt6310: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(249,0,0,0.9)',
    textAlign: 'center',
    justifyContent: 'center',
    width: 248,
    height: 22,
  },
});

// Submission Styles
const SubmissionStyle = StyleSheet.create({
  MakeUpPayCompleted: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 13,
    paddingBottom: 98,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: 'rgba(229,245,223,1)',
    width: 428,
    height: 926,
  },
  Group543: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Component2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 11,
  },
  Txt090: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(0,0,0,1)',
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

  Group191: {
    paddingTop: 14,
    paddingBottom: 13,
    paddingLeft: 63,
    paddingRight: 60,
    marginBottom: 84,
    backgroundColor: 'rgba(29,129,20,1)',
    width: 428,
    height: 61,
  },
  Txt755: {
    fontSize: 26,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },

  Undraw_well_done_i2wr1: {
    width: 345,
    height: 311,
    marginBottom: 92,
  },
  Txt526: {
    fontSize: 20,
    fontWeight: '400',
    color: 'rgba(0,0,0,1)',
    width: 372,
    height: 114,
    marginBottom: 69,
  },
  Group459: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 90,
    paddingRight: 92,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(213,217,212,1)',
    width: 340,
    height: 50,
  },
  Txt413: {
    fontSize: 22,
    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
  },
});

//Confirmation Styles
const ConfirmationStyle = StyleSheet.create({
  ReviewSubmission: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    paddingTop: 13,
    paddingBottom: 32,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: 'rgba(229,245,223,1)',
    width: 428,
    height: 926,
  },
  Group728: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Component2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 11,
  },
  Txt281: {
    fontSize: 16,

    fontWeight: '700',
    color: 'rgba(0,0,0,1)',
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

  Group742: {
    position: 'relative',
    marginBottom: 51,
    backgroundColor: 'rgba(29,129,20,1)',
    width: 428,
    height: 61,
  },
  Group819: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 15,
    none: '0px',
    width: 376,
    height: 32,
  },
  Txt163: {
    fontSize: 26,

    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
    marginRight: 138,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 18,
  },
  Vector3: {
    width: 23,
    height: 23,
    marginRight: 18,
  },
  Vector4: {
    width: 23,
    height: 23,
    marginRight: 17,
  },
  Vector5: {
    width: 23,
    height: 23,
  },

  Txt897: {
    position: 'absolute',
    top: 15,
    left: 36,
    fontSize: 26,

    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
    width: 163,
    height: 31,
  },

  Group309: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 13,
    paddingBottom: 29,
    paddingLeft: 6,
    paddingRight: 10,
    marginBottom: 46,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowColor: 'rgba(0,0,0,0.25)',
    elevation: 0,
    shadowOffset: { width: 0, height: 4 },
  },
  Group213: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  Txt795: {
    fontSize: 20,

    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
    marginBottom: 19,
  },
  Txt609: {
    fontSize: 16,

    fontWeight: '400',
    color: 'rgba(0,0,0,0.65)',
  },

  Group133: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  Line1: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(202,202,202,1)',
    width: 379,
    height: 1,
  },
  Txt128: {
    fontSize: 18,

    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
    marginRight: 28,
  },
  Frame2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    marginRight: 49,
  },
  Txt918: {
    fontSize: 18,

    fontWeight: '400',
    color: 'rgba(0,0,0,0.65)',
  },

  Vector6: {
    width: 21,
    height: 18.66,
  },

  Group7210: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 19,
  },
  Txt944: {
    fontSize: 18,

    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
    marginRight: 22,
  },
  Txt747: {
    fontSize: 15,

    fontWeight: '400',
    color: 'rgba(47,46,65,1)',
    textAlign: 'center',
    justifyContent: 'center',
    marginRight: 29,
  },
  Vector6: {
    width: 21,
    height: 18.66,
  },

  Line2: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(202,202,202,1)',
    transform: 'rotate(-0.02deg);',
    width: 379,
    height: 1,
    marginBottom: 16,
  },
  Group7210: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 19,
  },
  Txt143: {
    fontSize: 18,

    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
    marginRight: 214,
  },
  Vector6: {
    width: 21,
    height: 18.66,
  },

  Group1019: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  Txt684: {
    fontSize: 16,

    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
    marginRight: 72,
  },
  Txt609: {
    fontSize: 16,

    fontWeight: '400',
    color: 'rgba(0,0,0,0.65)',
  },

  Group1019: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  Txt284: {
    fontSize: 16,

    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
    marginRight: 81,
  },
  Txt609: {
    fontSize: 16,

    fontWeight: '400',
    color: 'rgba(0,0,0,0.65)',
  },

  Group929: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 128,
  },
  Txt774: {
    fontSize: 16,

    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
    marginRight: 54,
  },
  Txt609: {
    fontSize: 16,

    fontWeight: '400',
    color: 'rgba(0,0,0,0.65)',
  },

  Group316: {
    display: 'flex',
    flexDirection: 'row',
  },
  Txt8210: {
    fontSize: 16,

    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
    marginRight: 86,
  },
  Txt609: {
    fontSize: 16,

    fontWeight: '400',
    color: 'rgba(0,0,0,0.65)',
  },

  Txt941: {
    fontSize: 18,

    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
    marginBottom: 119,
  },
  Group316: {
    display: 'flex',
    flexDirection: 'row',
  },
  Txt361: {
    fontSize: 16,

    fontWeight: '700',
    color: 'rgba(0,0,0,0.65)',
    marginRight: 103,
  },
  Txt609: {
    fontSize: 16,

    fontWeight: '400',
    color: 'rgba(0,0,0,0.65)',
  },

  Group767: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 131,
    paddingRight: 129,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(202,202,202,1)',
    width: 340,
    height: 50,
  },
  Txt399: {
    fontSize: 22,

    fontWeight: '700',
    color: 'rgba(29,129,20,1)',
  },

  Group9810: {
    paddingTop: 11,
    paddingBottom: 9,
    paddingLeft: 73,
    paddingRight: 72,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(202,202,202,1)',
    width: 340,
    height: 50,
  },
  Txt399: {
    fontSize: 22,

    fontWeight: '700',
    color: 'rgba(29,129,20,1)',
  },

  Group52: {
    position: 'absolute',
    top: 105,
    left: 0,
    paddingTop: 8,
    paddingBottom: 7,
    paddingLeft: 89,
    paddingRight: 89,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 428,
    height: 39,
  },
  Txt156: {
    fontSize: 16,

    fontWeight: '700',
    color: 'rgba(249,0,0,0.9)',
    textAlign: 'center',
    justifyContent: 'center',
    width: 248,
    height: 22,
  },
});

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
