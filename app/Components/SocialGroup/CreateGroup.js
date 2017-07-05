import React, {Component} from 'react';
import {
	AppRegistry,
	Text,
	View,
	Image,
	ListView,
} from 'react-native';
import Button from 'apsl-react-native-button';
import {SocialIcon} from 'react-native-elements';

import MainGroupStyle from './Style';
import EventShortDescr from './EventShortDescr';
import CommonTheme from '../../Theme/Common';

export default class CreateGroupScreen extends Component {
	constructor(props) {
		super(props);
		const _eventData = require('../../Fixture/Events.json');
		this.state = {
			data: _eventData,
			_index: typeof props.navigation.state.params !== 'undefined' ? props.navigation.state.params.indexEventToShow : 0
		};
	}


	render() {
		return (
			<View style={CommonTheme.container}>
				{/*info evento*/}
				<View style={MainGroupStyle.mainSection}>
					<EventShortDescr
						indexEventToShow={this.state._index}
						eventData={this.state.data}
					/>
				</View>
				{/*wrapper tasti*/}
				<View style={[MainGroupStyle.footer, CommonTheme.borderTest]}>
					<View style={[CommonTheme.borderTest]}>
						<Text style={MainGroupStyle.shareFunTitle}>
							Share the fun
						</Text>
						<View style={[MainGroupStyle.inviteButton, CommonTheme.borderTest]}>
							<SocialIcon type='twitter'/>
							<SocialIcon type='facebook'/>
							<SocialIcon type='instagram'/>
						</View>

					</View>
					<View style={[MainGroupStyle.actions, CommonTheme.borderTest]}>
						<Button
							title="go_to_chat"
							onPress={() => this.props.navigation.navigate('CreateGroup', {indexEventToShow: this.state._index})}
							style={[MainGroupStyle.footerButton, MainGroupStyle.footerButtonTicket]}
							textStyle={CommonTheme.footerText}>
							Open Chat
						</Button>
						<Button
							title="group_info"
							onPress={() => this.props.navigation.navigate('CreateGroup', {indexEventToShow: this.state._index})}
							style={[MainGroupStyle.footerButton, MainGroupStyle.footerButtonTicket]}
							textStyle={CommonTheme.footerText}>
							Group Info
						</Button>
						<Button
							title="communication"
							onPress={() => this.props.navigation.navigate('CreateGroup', {indexEventToShow: this.state._index})}
							style={[MainGroupStyle.footerButton, MainGroupStyle.footerButtonTicket]}
							textStyle={CommonTheme.footerText}>
							Communication
						</Button>
					</View>
					<View style={[MainGroupStyle.createNewOne, CommonTheme.borderTest]}>
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

AppRegistry.registerComponent('CreateGroupScreen', () => CreateGroupScreen);
