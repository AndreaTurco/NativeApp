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
	Button
} from 'react-native';

export default class HomeScreen extends Component {
	_onPressButton(){
		if(Platform.OS === 'android') {
			ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
		} else {
			Alert.alert("go to login page")
		}
	}

	goToLoginPage = () => {
		this.props.navigation.navigate('Login');
	};

	render() {
		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={this._onPressButton}>
					<View>
						<Text style={styles.welcome}>
							We Love It
						</Text>
					</View>
				</TouchableWithoutFeedback>

				<Button style={styles.footerButton}
				        onPress={this.goToLoginPage}
				        title="Show the fun"
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
	footerButton: {
		width:150,
		marginTop: 20
	},
});

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
