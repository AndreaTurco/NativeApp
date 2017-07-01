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
import HandleEventStyle from './Style';
import CommonTheme from '../../Theme/Common';

export default class HandleEventScreen extends Component {
	_onPressButton() {
		if (Platform.OS === 'android') {
			ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
		} else {
			Alert.alert("go to login page")
		}
	}

	handleEvent = () => {

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
			_index: typeof props.navigation.state.params !== 'undefined' ? props.navigation.state.params.indexEventToShow : 0
		};
	}


	renderRow(rowData) {
		const _indexEvent = this.state._index >= rowData.length ? rowData.length - 1 : this.state._index;
		let fullImage = {uri: rowData[_indexEvent].imgUrl};
		// const _url = require("'"+rowData[_indexEvent].imgUrl+"'");
		return (

			<View style={HandleEventStyle.eventDetails}>
				<View style={HandleEventStyle.header}>
					<View style={HandleEventStyle.roundWrapper}>
						<Image
							style={HandleEventStyle.imageWrapper}
							source={fullImage}
						/>
					</View>
					<View style={HandleEventStyle.event_description}>
						<Text style={HandleEventStyle.boldEventName}>{rowData[_indexEvent].name}</Text>
						<Text style={HandleEventStyle.eventDescription}>{rowData[_indexEvent].description}</Text>
						<Text style={HandleEventStyle.eventDescription}>{rowData[_indexEvent].date}
							- {rowData[_indexEvent].location}</Text>
						<Text style={HandleEventStyle.eventDescription}>{rowData[_indexEvent].country}
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
				<View style={HandleEventStyle.mainSection}>
					<ListView
						dataSource={this.state.dataSource}
						renderRow={this.renderRow.bind(this)}
					/>
				</View>
				{/*wrapper tasti*/}
				<View style={HandleEventStyle.footer}>
					{/*<View style={HandleEventStyle.footerButtonContainer}>*/}
						<Button
							title="handle_group"
							onPress={this._onPressButton}
							style={[HandleEventStyle.footerButton, HandleEventStyle.footerButtonGroup]}
							textStyle={CommonTheme.footerText}>
							Create/Join Group
						</Button>
						<Button
							title="buy_ticket"
							onPress={this._onPressButton}
							style={[HandleEventStyle.footerButton, HandleEventStyle.footerButtonTicket]}
							textStyle={CommonTheme.footerText}>
							Ticket
						</Button>
						<Button
							title="back_to_event"
							onPress={() => this.navigation.goBack()}
							style={[HandleEventStyle.footerButton, HandleEventStyle.footerButtonBack]}
							textStyle={CommonTheme.footerText}>
							Go Back to the event page
						</Button>
					{/*</View>*/}
				</View>
			</View>
		);
	}
}

AppRegistry.registerComponent('HandleEventScreen', () => HandleEventScreen);
