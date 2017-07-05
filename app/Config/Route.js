import React from 'react';
import {StackNavigator,TabNavigator} from 'react-navigation';
import {Button} from 'react-native';
// import { Icon } from 'react-native-elements';

import HomeScreen         from '../Components/Index/Index';
import LoginScreen        from '../Components/Login/Login';
import EventScreen        from '../Components/Event/Event';
import HandleEventScreen  from '../Components/HandleEvent/HandleEvent';
import MainGroupScreen    from '../Components/SocialGroup/MainPage';
import CreateGroupScreen  from '../Components/SocialGroup/CreateGroup';
/*
export const TabNav = TabNavigator({
	Event: {
		screen: EventScreen,
		navigationOptions: {
			title: 'WeLoveIt',
			headerTintColor: '#ccff90',
			headerStyle: {
				backgroundColor : '#424242'
			},
			// headerRight: <Button title="Info" />,
		},
	},
});*/
export const Stack = StackNavigator({
		CreateGroup: {
			screen: CreateGroupScreen,
			navigationOptions: {
				title: 'WeLoveIt - Begin to Be Social',
				headerTintColor: '#ccff90',
				headerStyle: {
					backgroundColor : '#424242',
				},
			},
		},
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
				headerTintColor: '#ccff90',
				headerStyle: {
					backgroundColor : '#424242'
				}
			},
		},
/*		Event: {
			screen : TabNav
		}*/
		Event: {
			screen: EventScreen,
			navigationOptions: {
				title: 'WeLoveIt',
				headerTintColor: '#ccff90',
				headerStyle: {
					backgroundColor : '#424242'
				},
				// headerRight: <Button title="Info" />,
			},
		},
		HandleEvent: {
			screen: HandleEventScreen,
			navigationOptions: {
				title: 'WeLoveIt - Handle the fun',
				headerTintColor: '#ccff90',
				headerStyle: {
					backgroundColor : '#424242',
				},
			},
		},

		MainGroupPage: {
			screen: MainGroupScreen,
			navigationOptions: {
				title: 'WeLoveIt - Be Social',
				headerTintColor: '#ccff90',
				headerStyle: {
					backgroundColor : '#424242',
				},
			},
		},
	}
	,
	{
		headerMode: 'screen',
	}
);



