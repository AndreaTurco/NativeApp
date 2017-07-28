import React, {Component} from 'react';
import {
	AppRegistry,
	Text,
	View,
	Image,
	Modal,
	TouchableHighlight
} from 'react-native';
import CommonTheme from '../../Theme/Common';

export default class Image_F_S extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			imagePath : props.imageSource
		};
	}

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}

	render() {
		return (<View style={{marginTop: 22}}>
				<Modal
					animationType={"fade"}
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						alert("Modal has been closed.")
					}}
				>
					<View style={{marginTop: 22}}>
						<View>
							<Image
								style={{
									height : 300
								}}
								source={this.state.imagePath}
							/>

							<TouchableHighlight onPress={() => {
								this.setModalVisible(!this.state.modalVisible)
							}}>
								<Text
									style={{
										marginTop: 30,
										fontSize: 30,
										fontWeight: 'bold',
									}}
								>Back To Event</Text>
							</TouchableHighlight>

						</View>
					</View>
				</Modal>

				<TouchableHighlight onPress={() => {
					this.setModalVisible(true)
				}}>
					<Image
						style={{
							height: 250,
							borderRadius: 150,
							width: 250,
							borderWidth: 1,
							borderColor: '#76ff03'
						}}
						source={this.state.imagePath}
					/>
				</TouchableHighlight>

			</View>
		);
	}
}

AppRegistry.registerComponent('Image_F_S', () => Image_F_S);
