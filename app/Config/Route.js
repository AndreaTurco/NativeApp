
import React from 'react';
import { StackNavigator } from 'react-navigation';
// import { Icon } from 'react-native-elements';

import HomeScreen from '../Components/Index/Index';
import LoginScreen from '../Components/Login/Login';

/*export const Tabs = TabNavigator({
	Feed: {
		screen: Feed,
	},
	Me: {
		screen: Me,
	},
});*/

export const Stack = StackNavigator({
	Home : {
		screen : HomeScreen
	},
	Login : {
		screen : LoginScreen,
		navigationOptions: {
			title: 'Join Your Friends',
		},
	}
},{ headerMode: 'none' });
