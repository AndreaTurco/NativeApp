/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Index from './app/Components/Index/Index';
import {
	AppRegistry,
} from 'react-native';

export default class NativeApp extends Component {

	render() {
		return (
			<Index/>
		);
	}
}

AppRegistry.registerComponent('NativeApp', () => NativeApp);
