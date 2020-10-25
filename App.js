import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import ScheduleScreen from './screens/ScheduleScreen'

import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBH49JIiKw4BDcDIK1jJWQNs7EC7fr2_v4",
    authDomain: "hacktx-ad651.firebaseapp.com",
    databaseURL: "https://hacktx-ad651.firebaseio.com",
    projectId: "hacktx-ad651",
    storageBucket: "hacktx-ad651.appspot.com",
    messagingSenderId: "63781200494",
    appId: "1:63781200494:web:bc065a2c02b2fb3715fc7f",
    measurementId: "G-M5G173GZZY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const AppStack = createStackNavigator({
      Home: HomeScreen,
      Schedule: ScheduleScreen
  })

  const AuthStack = createStackNavigator({
      Login: LoginScreen,
      Register: RegisterScreen
  })

  export default createAppContainer(
      createSwitchNavigator(
          {
              Loading: LoadingScreen,
              App: AppStack,
              Auth: AuthStack
          },
          {
              initialRouteName: "Loading"
          }
      )
  )