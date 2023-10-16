import React, { Component } from 'react';
import { View, Button, ToastAndroid, Platform, StyleSheet } from 'react-native';

class AndroidApp extends Component {
  
  // This function shows a short message on the screen
  showAndroidMessage = () => {
    ToastAndroid.show('Hello from Android!', ToastAndroid.SHORT);
  }

  render() {
    // If this isn't an Android device, we won't show anything
    if (Platform.OS !== 'android') return null;

    return (
      <View style={styles.container}>
        <Button title="Press me" onPress={this.showAndroidMessage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default AndroidApp;
