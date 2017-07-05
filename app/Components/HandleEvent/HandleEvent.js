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
import HandleEventStyle from './Style';
import EventShortDescr from '../SocialGroup/EventShortDescr';
import CommonTheme from '../../Theme/Common';

export default class HandleEventScreen extends Component {
	_onPressButton() {
		if (Platform.OS === 'android') {
			ToastAndroid.showWithGravity('All Your Base Are Belong To Us', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
		} else {
			Alert.alert("go to login page")
		}
	}

	constructor(props) {
		super(props);
		/*		this.state = {
		 eventShowed: props.navigation.state.params.indexEventToShow ,
		 };*/
		const _eventData = require('../../Fixture/Events.json');
		this.state = {
			data: _eventData,
			_index: typeof props.navigation.state.params !== 'undefined' ? props.navigation.state.params.indexEventToShow : 0
		};
	}


	render() {
		// const index = this.props.navigation.state.params.indexEventToShow || 0;

		return (
			<View style={CommonTheme.container}>
				{/*info evento*/}
				<View style={HandleEventStyle.mainSection}>
					<EventShortDescr
						indexEventToShow={this.state._index}
						eventData={this.state.data}
					/>
				</View>
				{/*wrapper tasti*/}
				<View style={HandleEventStyle.footer}>
						<Button
							title="handle_group"
							onPress={() => this.props.navigation.navigate('MainGroupPage', {indexEventToShow: this.state._index})}
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
							onPress={() => this.props.navigation.goBack()}
							style={[HandleEventStyle.footerButton, HandleEventStyle.footerButtonBack]}
							textStyle={CommonTheme.footerText}>
							Go Back to the event page
						</Button>
				</View>
			</View>
		);
	}
}

AppRegistry.registerComponent('HandleEventScreen', () => HandleEventScreen);
