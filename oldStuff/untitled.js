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
              onPress={this._onPressButton}
              background={TouchableNativeFeedback.Ripple()}>
            
            <View style={styles.button}>
              <Text>Button</Text>
            </View>
          
          </TouchableNativeFeedback>
        
        </View>
      </View>

      

  _onPressButton: function() {
      ToastAndroid.show('This is a toast with short duration', ToastAndroid.SHORT);
  },