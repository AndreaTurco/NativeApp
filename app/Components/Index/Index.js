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
	Platform
} from 'react-native';
import Button from 'apsl-react-native-button';
import CommonTheme from '../../Theme/Common';

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
			<View style={CommonTheme.container}>
				<TouchableWithoutFeedback onPress={this._onPressButton}>
					<View>
						<Text style={styles.welcome}>
							JoyTrip
						</Text>
					</View>
				</TouchableWithoutFeedback>

				<Button
					onPress={this.goToLoginPage}
					style={CommonTheme.footerButton}
					textStyle={CommonTheme.footerText}>
					Start the tour
				</Button>

			</View>
		);
	}
}

const styles = StyleSheet.create({
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

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
