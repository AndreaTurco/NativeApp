import React, {StyleSheet} from 'react-native';

const CommonTheme = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#6031b1',
	},
	footerButton: {
		backgroundColor: '#f3e5f5',
		width: 150,
		marginTop: 20,
		alignSelf : 'center',
	},
	footerText:{
		fontSize: 18,
		color: '#4a148c'
	},
	yellowButton: {
		backgroundColor: '#bcff00',
	},
});

export default CommonTheme;