import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	Alert,
	ToastAndroid,
	Platform,
	ListView
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
			eventShowed: 0,
		};

		const _eventData = require('../../Fixture/Events.json');
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(_eventData),
		};
	}

	renderRow(rowData) {
		return (
			<View style={styles.eventDetails}>
				<Text style={styles.boldEventName}>{rowData[0].name}</Text>
				<Text style={styles.eventDescription}>{rowData[0].description}</Text>
				<Text style={styles.eventDescription}>{rowData[0].date} - {rowData[0].location}</Text>
				<Text style={styles.eventDescription}>{rowData[0].country} - {rowData[0].city}</Text>
			</View>
		)
	}

	render() {
		return (
			<View style={CommonTheme.container}>
				{/*immagine principale*/}
				<View style={styles.header}>
					<View style={styles.roundWrapper}>
						<Image
							style={styles.imageWrapper}
							source={require('../../Resources/1.jpg')}
						/>
					</View>
				</View>
				{/*info evento*/}
				<View style={styles.inputContainer}>
					<ListView
						dataSource={this.state.dataSource}
						renderRow={this.renderRow}
					/>
				</View>
				{/*wrapper tasti*/}
				<View style={styles.footer}>
					<View style={styles.footerButtonContainer}>
						<Button
							onPress={this._onPressButton}
							style={[CommonTheme.footerButton, styles.footerEventButton, CommonTheme.yellowButton]}
							textStyle={CommonTheme.footerText}>
							Book Event
						</Button>
						<Button
							onPress={this._onPressButton}
							style={[CommonTheme.footerButton, styles.footerEventButton]}
							textStyle={CommonTheme.footerText}>
							Go To Next event
						</Button>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
		header: {
			flex: 2,
			justifyContent: 'center',
		},
		inputContainer: {
			flex: 2,
			justifyContent: 'center',
			alignSelf: 'stretch',
		},
		footer: {
			flex: 1,
			alignSelf: 'stretch',
		},
		eventDetails: {
			justifyContent: 'center',
			alignItems: 'center'
		},
		boldEventName: {
			fontWeight: 'bold',
			color: '#fff',
			fontSize: 30,
			justifyContent: 'center',
			textAlign: 'center',
			marginBottom: 15,

		},
		eventDescription: {
			color: '#fff',
			justifyContent: 'center',
			textAlign: 'center',
			fontSize: 18,
			marginBottom: 8,
		},
		imageWrapper: {
			height: 200,
			borderRadius: 100,
			width: 200
		},
		footerButtonContainer: {
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
		footerEventButton: {
			flex: 1,
			margin : 5
		},
		welcome: {
			fontSize: 48,
			textAlign: 'center',
			color: '#fff',
			margin: 10,
			fontWeight: 'bold',
		}
		,
		input: {
			fontSize: 18,
			textAlign: 'center',
			color: '#fff',
			marginBottom: 25,
		}
	})
;

AppRegistry.registerComponent('EventScreen', () => EventScreen);
