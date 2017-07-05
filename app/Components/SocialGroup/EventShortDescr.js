import React, {Component} from 'react';
import {
	AppRegistry,
	Text,
	View,
	Image,
	ListView,
} from 'react-native';
import MainGroupStyle from './Style';
import CommonTheme from '../../Theme/Common';

export default class EventShortDescr extends Component {

	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			loading: false,
			data: props.eventData,
			page: 1,
			seed: 1,
			error: null,
			refreshing: false,
			dataSource: ds.cloneWithRows(props.eventData),
			_index: props.indexEventToShow
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
		return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={this.renderRow.bind(this)}
			/>
		);
	}
}

AppRegistry.registerComponent('EventShortDescr', () => EventShortDescr);
