import React, { Component } from 'react';
import {Stack} from './app/Config/Route';
import {
  AppRegistry,
} from 'react-native';

export default class NativeApp extends Component {
  render() {
    return (
	    <Stack/>
    );
  }
}

AppRegistry.registerComponent('NativeApp', () => NativeApp);
