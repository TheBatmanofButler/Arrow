/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
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
      count: 0,
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

    if (this.state.count == 0) {
      return (
        <View style={styles.container}>

          <View style={styles.container}>

            <Text style={styles.title}>Arrow!</Text>
          
          </View>
          
          <View style={styles.container}>
          
            <TextInput
              style={styles.year}
              placeholder='Username'
            />
          
            <TextInput
              style={styles.year}
              secureTextEntry={true}
              placeholder='Password'
            />
          
            <TouchableNativeFeedback
                onPress={() => this.setState({count: 1})}
                background={TouchableNativeFeedback.Ripple()}>
              
              <View style={styles.button}>
                <Text>Button</Text>
                <Text>{this.state.count}</Text>
              </View>
            
            </TouchableNativeFeedback>
          
          </View>

        </View>
      );
    }

    else if (this.state.count == 1) {
      return (
        <View style={styles.container}>

          <View style={styles.container}>

            <Text>Arrow!</Text>
          
          </View>
          
          <View style={styles.container}>
          
            <TextInput placeholder='Friend Code'/>
          
            <TouchableNativeFeedback
                onPress={() => this.setState({count: 2})}
                background={TouchableNativeFeedback.Ripple()}>
              
              <View style={styles.button}>
                <Text>Button</Text>
                <Text>{this.state.count}</Text>
              </View>
            
            </TouchableNativeFeedback>
          
          </View>

        </View>
      );
    }

    else if (this.state.count == 2) {
      return (
        <View style={styles.container}>

          <View style={styles.container}>

            <Text>Arrow!</Text>
            {this.state.initialPosition}
          </View>
          
          <View style={styles.container}>
          </View>

        </View>
      );
    }
  },

  _onPressButton: function() {
    this.setState({
      count: true,
    });
    // ToastAndroid.show('This is a toast with short duration', ToastAndroid.SHORT);
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
    backgroundColor: '#F5FCFF',
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
