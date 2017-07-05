import React, {StyleSheet} from 'react-native';

const MainGroupStyle = StyleSheet.create({

	mainSection: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'stretch',
	},
	footer: {
		flex: 4,
		alignSelf: 'stretch',
		paddingHorizontal: 25,
		justifyContent: 'space-between',
		alignItems: 'stretch',
	},

	eventDetails: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 5
	},
	header: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 20,
		flexDirection: 'row'
	},
	roundWrapper: {
		flex: 1,
		paddingLeft: 15,
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
		textAlign: 'left',
		marginBottom: 15,
		color: '#ccff90'
	},
	eventDescription: {
		color: '#fff',
		justifyContent: 'center',
		textAlign: 'left',
		fontSize: 14,
		marginBottom: 8,
	},

	showListOfAllGroup: {},
	joinOldOrById: {},
	createNewOne: {},

	shareFunTitle : {
		textAlign: 'center',
		color: 'white'
	},
	inviteButton: {
		flexDirection: 'row',
		justifyContent: 'center',
	},

	footerButton: {
		backgroundColor: '#cfcfcf',
		// backgroundColor: '#f3e5f5',
		marginVertical: 5,
		height: 44,
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center',
	},
	footerButtonGroup: {
		backgroundColor: '#76ff03',
	},
	footerButtonTicket: {
		backgroundColor: '#b2ff59',
	},
	footerText: {
		fontSize: 18,
		color: '#000'
	},
});

export default MainGroupStyle;