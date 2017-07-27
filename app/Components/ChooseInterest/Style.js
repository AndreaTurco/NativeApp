import React, {StyleSheet} from 'react-native';

const CategoriesListStyle = StyleSheet.create({

	pageDescription: {
	},
	listOfAllTheCategories: {
		marginBottom: 50
	},
	listOfAllTheCategories: {
		marginBottom: 50
	},
	listWrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignSelf: 'stretch',
	},

	singleWrapper:{
		width : 150,
		margin: 5,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: '#76ff03'
	},
	categoryDetails: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconWrapper: {
		flex: 1,
		// paddingLeft: 15,
	},
	imageWrapper: {
		// marginLeft: 15,
		height: 80,
		borderRadius: 70,
		width: 80,
		borderWidth: 1,
		borderColor: '#76ff03'
	},
	event_description: {
		flex: 3,
		paddingHorizontal: 10,
		paddingLeft: 20,
	},
	boldEventName: {
		fontWeight: 'bold',
		fontSize: 22,
		justifyContent: 'center',
		textAlign: 'center',
		marginBottom: 15,
		color: '#ccff90'
	},
	eventDescription: {
		color: '#fff',
		justifyContent: 'center',
		textAlign: 'center',
		fontSize: 14,
		marginBottom: 8,
	},


});

export default CategoriesListStyle;