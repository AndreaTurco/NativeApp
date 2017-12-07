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
	TextInput,
	KeyboardAvoidingView
} from 'react-native';
import Button from 'apsl-react-native-button';
import CommonTheme from '../../Theme/Common';

export default class LoginScreen extends Component {
	_onPressButton() {
		if (Platform.OS === 'android') {
			ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
		} else {
			Alert.alert("go to login page")
		}
	}

	loginUser = () => {
		this.props.navigation.navigate('ChooseInterest');
		// this.props.navigation.navigate('Event',{indexEventToShow: 0});
	};

	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}

	render() {
		return (
			<View style={CommonTheme.container}>
					<View style={styles.header}>
						<Text style={styles.welcome}>Login</Text>
					</View>

					<View style={styles.inputContainer}>
						<TextInput
							style={styles.input}
							placeholder="Username"
							placeholderTextColor="rgba(255, 255, 255, 0.7)"
							name="username"
							returnKeyType="next"
							type="text"
							onsubmitediting={() => this.passwordInput.focus()}
							keyboardType="email-address"
							autocapitalize="none"
							underlineColorAndroid='transparent'
							autocorrect={false}
							onChangeText={(text) => this.setState({text})}
						/>
						<TextInput
							style={styles.input}
							placeholder="Password"
							placeholderTextColor="rgba(255, 255, 255, 0.7)"
							name="password"
							underlineColorAndroid='transparent'
							type="text"
							returnKeyType="go"
							secureTextEntry
							onChangeText={(text) => this.setState({text})}
							ref={(input) => this.passwordInput = input}
						/>
					</View>
					<View style={styles.footer}>
						<View>
							<Button
								onPress={this.loginUser}
								style={CommonTheme.footerButton}
								textStyle={CommonTheme.footerText}>
								Show the fun
							</Button>
						</View>
					</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		flex: 1,
		width: 350,
		justifyContent: 'center',
	},
	inputContainer: {
		flex: 2,
		width: 250,
		justifyContent: 'center',
	},
	footer: {
		flex: 1,
		width: 150,
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
		paddingHorizontal: 5,
		backgroundColor: "rgba(255,255,255,0.2)",
		borderRadius: 5
	}
});

AppRegistry.registerComponent('LoginScreen', () => LoginScreen);
