import React, {Component} from 'react';
import {
	AppRegistry,
	Text,
	View,
	Image,
	Modal,
} from 'react-native';
import CommonTheme from '../../Theme/Common';

export default class Image_F_S extends Component {


	render() {
		return (<View style={{marginTop: 22}}>
				<Modal
					animationType={"slide"}
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						alert("Modal has been closed.")
					}}
				>
					<View style={{marginTop: 22}}>
						<View>
							<Text>Hello World!</Text>

							<TouchableHighlight onPress={() => {
								this.setModalVisible(!this.state.modalVisible)
							}}>
								<Text>Hide Modal</Text>
							</TouchableHighlight>

						</View>
					</View>
				</Modal>

				<TouchableHighlight onPress={() => {
					this.setModalVisible(true)
				}}>
					<Text>Show Modal</Text>
				</TouchableHighlight>

			</View>
		);
	}
}

AppRegistry.registerComponent('Image_F_S', () => Image_F_S);
