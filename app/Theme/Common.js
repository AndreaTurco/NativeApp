import React, {StyleSheet} from 'react-native';

const CommonTheme = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#424242',
		// backgroundColor: '#707070',
		// backgroundColor: '#6031b1',
	},
	footerButton: {
		backgroundColor: '#cfcfcf',
		// backgroundColor: '#f3e5f5',
		width: 150,
		marginTop: 20,
		alignSelf : 'center',
	},
	footerText:{
		fontSize: 18,
		color: '#000'
		// color: '#4a148c'
	},
	yellowButton: {
		backgroundColor: '#b0ff57',
		// backgroundColor: '#bcff00',
	},

	borderTest : {
		borderWidth: 2,
		borderColor:'green'
	}
});

export default CommonTheme;