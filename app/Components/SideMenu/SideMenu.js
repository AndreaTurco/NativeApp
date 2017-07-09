import React, {Component} from 'react';
import {
	AppRegistry,
	View,
	Text,
	Button
} from 'react-native';
import {SideMenu, List, ListItem, Icon} from 'react-native-elements';
export default class SideMenuClass extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
		this.toggleSideMenu = this.toggleSideMenu.bind(this);
	}

	onSideMenuChange(isOpen: boolean) {
		this.setState({
			isOpen: isOpen
		})
	}

	toggleSideMenu() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		const MenuComponent = (
			<View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50, }}>
				<Text>1point</Text>
			</View>
		);

		return (
			<SideMenu
				isOpen={this.state.isOpen}
				menuPosition={'right'}
				onChange={this.onSideMenuChange.bind(this)}
				menu={MenuComponent}>
				<Text toggleSideMenu={this.toggleSideMenu.bind(this)}>asdsdas</Text>
			</SideMenu>
		);
	}
}


AppRegistry.registerComponent('SideMenuClass', () => SideMenuClass);
