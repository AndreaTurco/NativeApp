import React, {Component} from 'react';
import {
	AppRegistry,
	Text,
	View,
	Image,
	ScrollView,
	ListView,
	TouchableHighlight
} from 'react-native';
import Button from 'apsl-react-native-button';
import {Icon, SocialIcon} from 'react-native-elements';

import CategoriesListStyle from './Style';
import CommonTheme from '../../Theme/Common';

export default class ChooseInterestScreen extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		const _catData = require('../../Fixture/Interest.json');
		this.state = {
			loading: false,
			data: _catData,
			dataSource: ds.cloneWithRows(_catData),
		};
	}

	renderRow(rowData) {
		// const _indexEvent = this.state._index >= rowData.length ? rowData.length - 1 : this.state._index;
		let fullImage = {uri: rowData.imgUrl};
		// const _url = require("'"+rowData[_indexEvent].imgUrl+"'");
		return (
			<TouchableHighlight
				style={[CategoriesListStyle.singleWrapper]}
			  onPress = {() => {
			  	//@todo set the correct link to the first/random event in the list
				  this.props.navigation.navigate('Event',{indexEventToShow: 0});
			  }}
			>
				<View style={CategoriesListStyle.categoryDetails}>
					<View style={CategoriesListStyle.iconWrapper}>
						<Image
							style={CategoriesListStyle.imageWrapper}
							source={fullImage}
						/>
					</View>
					<View style={CategoriesListStyle.event_description}>
						<Text style={CategoriesListStyle.boldEventName}>{rowData.name}</Text>
						<Text style={CategoriesListStyle.eventDescription}>{rowData.description}</Text>
					</View>
				</View>
			</TouchableHighlight>
		)
	}

	render() {
		return (
				<View style={CommonTheme.containerGrid}>
					<View style={CategoriesListStyle.pageDescription}>
						<Text style={{color: 'white'}}>List of all categories</Text>
					</View>
					{/*wrapper icons*/}
					<View style={[CategoriesListStyle.listOfAllTheCategories]}>
						<ListView
							dataSource={this.state.dataSource}
							renderRow={this.renderRow.bind(this)}
						  contentContainerStyle={{flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'center', alignItems : 'stretch'}}
						/>
					</View>
				</View>
		);
	}
}

AppRegistry.registerComponent('ChooseInterestScreen', () => ChooseInterestScreen);
