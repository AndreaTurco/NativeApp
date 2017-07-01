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

	handleEvent = () => {
		this.props.navigation.navigate('HandleEvent', {indexEventToShow: this.state._index});
	};

	nextEvent = () => {
		let index = this.state._index + 1;
		this.props.navigation.navigate('Event', {indexEventToShow: index});
	};

	constructor(props) {
		super(props);
/*		this.state = {
			eventShowed: props.navigation.state.params.indexEventToShow ,
		};*/
		const _eventData = require('../../Fixture/Events.json');
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(_eventData),
			_index : typeof props.navigation.state.params !== 'undefined' ? props.navigation.state.params.indexEventToShow : 0
		};
	}


	renderRow(rowData) {
		const _indexEvent = this.state._index >= rowData.length ? rowData.length - 1 : this.state._index;
		let fullImage = {uri: rowData[_indexEvent].imgUrl};
		// const _url = require("'"+rowData[_indexEvent].imgUrl+"'");
		return (

			<View style={styles.eventDetails}>
				<View style={styles.header}>
					<View style={styles.roundWrapper}>
						<Image
							style={styles.imageWrapper}
							source={fullImage}
						/>
					</View>
				</View>
				<Text style={styles.boldEventName}>{rowData[_indexEvent].name}</Text>
				<Text style={styles.eventDescription}>{rowData[_indexEvent].description}</Text>
				<Text style={styles.eventDescription}>{rowData[_indexEvent].date} - {rowData[_indexEvent].location}</Text>
				<Text style={styles.eventDescription}>{rowData[_indexEvent].country} - {rowData[_indexEvent].city}</Text>
			</View>
		)
	}

	render() {
		// const index = this.props.navigation.state.params.indexEventToShow || 0;

		return (
			<View style={CommonTheme.container}>
				{/*info evento*/}
				<View style={styles.mainSection}>
					<ListView
						dataSource={this.state.dataSource}
						renderRow={this.renderRow.bind(this)}
					/>
				</View>
				{/*wrapper tasti*/}
				<View style={styles.footer}>
					<View style={styles.footerButtonContainer}>
						<Button
							onPress={this.handleEvent()}
							style={[CommonTheme.footerButton, styles.footerEventButton, CommonTheme.yellowButton]}
							textStyle={CommonTheme.footerText}>
							Book Event
						</Button>
						<Button
							onPress={this.nextEvent}
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
			marginBottom: 20,
		},
		mainSection: {
			flex: 5,
			justifyContent: 'center',
			alignSelf: 'stretch',
		},
		footer: {
			flex: 1,
			alignSelf: 'stretch',
		},
		eventDetails: {
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 25
		},
		boldEventName: {
			fontWeight: 'bold',
			// color: '#fff',
			fontSize: 30,
			justifyContent: 'center',
			textAlign: 'center',
			marginBottom: 15,
			color: '#ccff90'
		},
		eventDescription: {
			color: '#fff',
			justifyContent: 'center',
			textAlign: 'center',
			fontSize: 18,
			marginBottom: 8,
		},
		imageWrapper: {
			height: 250,
			borderRadius: 150,
			width: 250,
			borderWidth: 1,
			borderColor: '#76ff03'
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
