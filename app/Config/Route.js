import React from 'react';
import {StackNavigator, TabNavigator, DrawerNavigator, DrawerItems} from 'react-navigation';
import {Button} from 'react-native';
// import { Icon } from 'react-native-elements';

// import LateralMenu        from '../Components/SideMenu/LateralMenu';
import HomeScreen           from '../Components/Index/Index';
import LoginScreen          from '../Components/Login/Login';
import ChooseInterestScreen from '../Components/ChooseInterest/ChooseInterest';
import EventScreen          from '../Components/Event/Event';
import HandleEventScreen    from '../Components/HandleEvent/HandleEvent';
import MainGroupScreen      from '../Components/SocialGroup/MainPage';
import CreateGroupScreen    from '../Components/SocialGroup/CreateGroup';
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
 });

export const DrawerNav = DrawerNavigator({
	MenuLateral: {
		screen: LateralMenu,
		navigationOptions: ({ navigation }) => ({
			drawerWidth: 200,
			drawerPosition: 'right',
		})
	},
});

 // headerRight: <Button
 // 	title="Info"
 // 	onPress={
 // 		() => navigation.navigate('LeftTest')
 // 	}
 // />,

 // LeftTest: {
 // 	screen: DrawerNav
 // },
 */

export const Stack = StackNavigator({
		ChooseInterest: {
			screen: ChooseInterestScreen,
			navigationOptions: {
				title: 'Choose the fun section',
				headerTintColor: '#ccff90',
				headerStyle: {
					backgroundColor: '#424242'
				},
				// headerRight: <Button title="Info" />,
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
					backgroundColor: '#424242'
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
					backgroundColor: '#424242'
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
					backgroundColor: '#424242',
				},
			},
		},

		MainGroupPage: {
			screen: MainGroupScreen,
			navigationOptions: {
				title: 'WeLoveIt - Be Social',
				headerTintColor: '#ccff90',
				headerStyle: {
					backgroundColor: '#424242',
				},
			},
		},
		CreateGroup: {
			screen: CreateGroupScreen,
			navigationOptions: ({ navigation }) => ({
				title: 'WeLoveIt - Begin to Be Social',
				headerTintColor: '#ccff90',
				headerStyle: {
					backgroundColor: '#424242',
				},
			}),
		},

	}
	,
	{
		headerMode: 'screen',
	}
);
