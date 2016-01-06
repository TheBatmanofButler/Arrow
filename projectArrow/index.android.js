/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var FBLogin = require('react-native-facebook-login');
var FBLoginManager = React.FBLoginManager; // if needed

var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableNativeFeedback,
  View,
} = React;

var projectArrow = React.createClass({

  getInitialState: function() {
    return {
      page: 'login',
      initialPosition: 'unknown',
      eee: '',
    };
  },

  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  },

  render: function() {

    // login page
    if (this.state.page == 'login') {
      return (
        <View style={styles.container}>

          <View style={styles.container}>

            <Text style={styles.arrow}>Arrow!</Text>
          
          </View>
          
          <View style={styles.container}>
          
            <FBLogin
              onLogin={() => {this.setState({page: 'addFriends'})}}

              loginBehavior={FBLoginManager.LoginBehaviors.React}

              onLogout={
                (e) => {
                  this.setState({eee: e});
                }
              }

              onCancel={
                (e) => {
                  this.setState({eee: e});
                }
              }

              onPermissionsMissing={
                (e) => {
                  this.setState({eee: e});
                }
              }
            />


          
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple()}>
              
              <View
                style={styles.button}
              >
                <Text
                  onPress={() => this._onLogout() }
                >
                  {this.state.page}
                </Text>
              </View>
            
            </TouchableNativeFeedback>
          
          </View>

        </View>
      );
    }

    // addFriends page
    else if (this.state.page == 'addFriends') {
      return (
        <View style={styles.container}>

          <View style={styles.container}>

            <Text style={styles.arrow}>Arrow!</Text>
          
          </View>
          
          <View style={styles.container}>
          
            <TextInput placeholder='Friend Code'/>
          
            <TouchableNativeFeedback
                onPress={() => this.setState({page: 2})}
                background={TouchableNativeFeedback.Ripple()}>
              
              <View style={styles.button}>
                <Text>Button</Text>
                <Text>{this.state.page}</Text>
              </View>
            
            </TouchableNativeFeedback>
          
          </View>

        </View>
      );
    }

    // arrow page
    else if (this.state.page == 'arrow') {
      return (
        <View style={styles.container}>

          <View style={styles.container}>

            <Text>Arrow?</Text>
            <Text>q{this.state.initialPosition}q</Text>
          </View>
          
          <View style={styles.container}>
          </View>

        </View>
      );
    }
  },

  _onPressButton: function() {
    this.setState({
      page: true,
    });
    // ToastAndroid.show('This is a toast with short duration', ToastAndroid.SHORT);
  },

  _onLogout: function() {
    // FBLoginManager.logOut();
    this.setState({
      page: 'logged out'
    });
  },

});

var projectArrow2 = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>

        <View style={styles.container}>

          <Text style={styles.title}>Arrow!</Text>
        
        </View>

      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFF0D1',
  },
  arrow: {
    color: '#D33741',
    fontFamily: 'Cochin',
    fontSize: 80,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('projectArrow', () => projectArrow);