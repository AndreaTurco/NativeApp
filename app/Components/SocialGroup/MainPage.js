import React, {Component} from 'react';
import {
	AppRegistry,
	Text,
	View,
	Image,
	Alert,
	ToastAndroid,
	Platform,
	ListView,
	FlatList,
	ActivityIndicator
} from 'react-native';
import {List, ListItem, SearchBar } from 'react-native-elements'
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
			loading : false,
			data: _eventData,
			page: 1,
			seed: 1,
			error : null,
			refreshing: false,
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

	state = {selected: (new Map(): Map<string, boolean>)};

	_keyExtractor = (item, index) => item.id;

	_onPressItem = (id: string) => {
		// updater functions are preferred for transactional updates
		this.setState((state) => {
			// copy the map rather than modifying state.
			const selected = new Map(state.selected);
			selected.set(id, !selected.get(id)); // toggle
			return {selected};
		});
	};

	_renderItem = ({item}) => (
		<ListItem
			id={item.id}
			onPressItem={this._onPressItem}
			// selected={!!this.state.selected.get(item.id)}
			title={item.name}
		/>
	);

	renderHeader = () => {
		return <SearchBar placeholder="Type here..." lightTheme round/>;
	};

	render() {
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
					<View style={[MainGroupStyle.showListOfAllGroup, CommonTheme.borderTest]}>
						<List>
						<FlatList
							data={this.state.data.Events[this.state._index].groups_list}
							extraData={this.state}
							keyExtractor={this._keyExtractor}
							renderItem={this._renderItem}
						  // ListHeaderComponent={this.renderHeader}
						  // ListFooterComponent={this.renderFooter}
						/>
						</List>
					</View>
					<View style={[MainGroupStyle.joinOldOrById, CommonTheme.borderTest]}>
						<Button
							title="buy_ticket"
							onPress={this._onPressButton}
							style={[MainGroupStyle.footerButton, MainGroupStyle.footerButtonTicket]}
							textStyle={CommonTheme.footerText}>
							Ticket
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

AppRegistry.registerComponent('MainGroupScreen', () => MainGroupScreen);
