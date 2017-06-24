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
	_onPressButton(){
		if(Platform.OS === 'android') {
			ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
		} else {
			Alert.alert("go to login page")
		}
	}

	constructor(props){
		super(props);
		this.state = {
			username : "",
			password : ""
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Login</Text>
				<TextInput
					style={{height: 40}}
					placeholder="Username"
					name="username"
					type="text"
					onChangeText={(text) => this.setState({text})}
				/>
				<TextInput
					style={{height: 40}}
					placeholder="Password"
					name="password"
					type="text"
					onChangeText={(text) => this.setState({text})}
				/>
				<Button style={styles.footerButton}
				        onPress={this._onPressButton}
				        title="Login"
				        color="#841584"
				        accessibilityLabel="Learn more about this purple button"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// flexDirection : 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#8d1296',
	},
	welcome: {
		fontSize: 48,
		textAlign: 'center',
		color: '#fff',
		margin: 10,
		fontWeight: 'bold',
	},
	instructions: {
		textAlign: 'center',
		// color: '#333333',
		color: '#fff',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('LoginScreen', () => LoginScreen);
