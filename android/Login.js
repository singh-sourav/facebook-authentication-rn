import React, { Component } from 'react';
import { View,Text } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
 
export default class Login extends Component {
  state={
    token:null
  }
  render() {
    return (
      <View>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                 console.log(data);
                 this.setState({
                   token:data.accessToken.toString(),
                 });
                  }
                )
              }
            }
          }
          onLogoutFinished={() => {console.log("logout.");
          this.setState({token:null});
          }}/>
    {this.state.token&& <Text>Hey You are logged in. Your Access Token is : {this.state.token}</Text>}
      </View>
    );
  }
};