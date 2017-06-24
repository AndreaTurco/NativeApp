/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Index from './app/Components/Index/Index';
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
