/**
 * Created by Andrea on 28/07/2017.
 */
import React, {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

	mainSection: {
		flex: 2,
		justifyContent: 'center',
		alignSelf: 'stretch',
	},
	footer: {
		flex: 3,
		alignSelf: 'stretch',
		paddingHorizontal: 25,
		justifyContent: 'flex-end',
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
	roundWrapper : {
		flex: 1,
		paddingLeft: 5,
	},
	imageWrapper: {
		// marginLeft: 15,
		height: 120,
		borderRadius: 150,
		width: 120,
		borderWidth: 1,
		borderColor: '#76ff03'
	},
	event_description : {
		flex: 2,
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
	footerText:{
		fontSize: 18,
		color: '#000'
	},
});

export default styles;