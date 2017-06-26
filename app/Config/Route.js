import React from 'react';
import {StackNavigator} from 'react-navigation';
// import { Icon } from 'react-native-elements';

import HomeScreen from '../Components/Index/Index';
import LoginScreen from '../Components/Login/Login';
import EventScreen from '../Components/Event/Event';

/*export const Tabs = TabNavigator({
 Feed: {
 screen: Feed,
 },
 Me: {
 screen: Me,
 },
 });*/

export const Stack = StackNavigator({
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				header: null
			}
		},
		Login: {
			screen: LoginScreen,
			navigationOptions: {
				title: 'Join Your Friends',
			},
		},
		Event: {
			screen: EventScreen,
			navigationOptions: {
				title: 'WeLoveIt',
			},
		},
	}
	, {headerMode: 'screen'}
);

