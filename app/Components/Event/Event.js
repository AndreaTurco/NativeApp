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
	TextInput
} from 'react-native';
import Button from 'apsl-react-native-button';
import CommonTheme from '../../Theme/Common';

export default class EventScreen extends Component {
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
			<View style={CommonTheme.container}>
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
						<Button
							onPress={this._onPressButton}
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

AppRegistry.registerComponent('EventScreen', () => EventScreen);
