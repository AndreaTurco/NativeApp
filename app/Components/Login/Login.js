/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	Alert,
	ToastAndroid,
	Platform,
	Button,
	TextInput
} from 'react-native';

export default class LoginScreen extends Component {
	_onPressButton() {
		if (Platform.OS === 'android') {
			ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
		} else {
			Alert.alert("go to login page")
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.welcome}>Login</Text>
				</View>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Username"
						name="username"
						type="text"
						onChangeText={(text) => this.setState({text})}
					/>
					<TextInput
						style={styles.input}
						placeholder="Password"
						name="password"
						type="text"
						onChangeText={(text) => this.setState({text})}
					/>
				</View>
				<View style={styles.footer}>
					<View>
						<Button style={styles.footer}
						        onPress={this._onPressButton}
						        title="Show the fun"
						        color="#841584"
						        accessibilityLabel="Learn more about this purple button"
						/>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#8d1296',
	},
	header: {
		flex: 1,
		justifyContent: 'center',
	},
	inputContainer: {
		flex: 2,
		width : 250,
		justifyContent: 'center',
	},
	footer: {
		flex: 1,
		width : 150,
		justifyContent: 'center',
	},


	welcome: {
		fontSize: 48,
		textAlign: 'center',
		color: '#fff',
		margin: 10,
		fontWeight: 'bold',
	},
	input: {
		fontSize: 18,
		textAlign: 'center',
		color: '#fff',
		marginBottom: 25,
	}
});

AppRegistry.registerComponent('LoginScreen', () => LoginScreen);
