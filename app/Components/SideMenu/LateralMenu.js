import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	ScrollView,
	Button,
	Image
} from 'react-native';

export default class LateralMenu extends Component {
	static navigationOptions = {
		drawerLabel: 'Home',
		drawerWidth: 200,
		drawerPosition: 'right',
		drawerIcon: ({tintColor}) => (
			<Image
				// source={require('./chats-icon.png')}
				style={[styles.icon, {tintColor: tintColor}]}
			/>
		),
	};

	render() {
		return (
			<ScrollView>
				<Button
					onPress={() => this.props.navigation.navigate('NotifyLateral')}
					title="Go to notifications"
				/>
				<Button
					onPress={() => this.props.navigation.goBack()}
					title="Go back home"
				/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	icon: {
		width: 24,
		height: 24,
	},
});

AppRegistry.registerComponent('LateralMenu', () => LateralMenu);
