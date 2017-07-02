import React, {Component} from 'react';
import {
	AppRegistry,
	Text,
	View,
	Image,
	Alert,
	ToastAndroid,
	Platform,
	ListView
} from 'react-native';
import Button from 'apsl-react-native-button';
import MainGroupStyle from './Style';
import CommonTheme from '../../Theme/Common';

export default class MainGroupScreen extends Component {
	_onPressButton() {
		if (Platform.OS === 'android') {
			ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
		} else {
			Alert.alert("go to login page")
		}
	}

	constructor(props) {
		super(props);
		const _eventData = require('../../Fixture/Events.json');
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(_eventData),
			_index: typeof props.navigation.state.params !== 'undefined' ? props.navigation.state.params.indexEventToShow : 0
		};
	}


	renderRow(rowData) {
		const _indexEvent = this.state._index >= rowData.length ? rowData.length - 1 : this.state._index;
		let fullImage = {uri: rowData[_indexEvent].imgUrl};
		// const _url = require("'"+rowData[_indexEvent].imgUrl+"'");
		return (

			<View style={MainGroupStyle.eventDetails}>
				<View style={MainGroupStyle.header}>
					<View style={MainGroupStyle.roundWrapper}>
						<Image
							style={MainGroupStyle.imageWrapper}
							source={fullImage}
						/>
					</View>
					<View style={MainGroupStyle.event_description}>
						<Text style={MainGroupStyle.boldEventName}>{rowData[_indexEvent].name}</Text>
						<Text style={MainGroupStyle.eventDescription}>{rowData[_indexEvent].country}
							- {rowData[_indexEvent].city}</Text>
					</View>
				</View>
			</View>
		)
	}

	render() {
		// const index = this.props.navigation.state.params.indexEventToShow || 0;
		return (
			<View style={CommonTheme.container}>
				{/*info evento*/}
				<View style={MainGroupStyle.mainSection}>
					<ListView
						dataSource={this.state.dataSource}
						renderRow={this.renderRow.bind(this)}
					/>
				</View>
				{/*wrapper tasti*/}
				<View style={MainGroupStyle.footer}>
					<View style={MainGroupStyle.showListOfAllGroup}>
						<Button
							title="handle_group"
							onPress={this._onPressButton}
							style={[MainGroupStyle.footerButton, MainGroupStyle.footerButtonGroup]}
							textStyle={CommonTheme.footerText}>
							Create/Join Group
						</Button>
					</View>
					<View style={MainGroupStyle.joinOldOrById}>
						<Button
							title="buy_ticket"
							onPress={this._onPressButton}
							style={[MainGroupStyle.footerButton, MainGroupStyle.footerButtonTicket]}
							textStyle={CommonTheme.footerText}>
							Ticket
						</Button>
					</View>
						<View style={MainGroupStyle.createNewOne}>
						<Button
							title="back_to_event"
							onPress={() => this.props.navigation.goBack()}
							style={[MainGroupStyle.footerButton, MainGroupStyle.footerButtonBack]}
							textStyle={CommonTheme.footerText}>
							Go Back to the event page
						</Button>
						</View>
				</View>
			</View>
		);
	}
}

AppRegistry.registerComponent('MainGroupScreen', () => MainGroupScreen);
