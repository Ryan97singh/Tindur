import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import MessagesComponent from '../../components/MessagesComponent';

class MessagesScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<MessagesComponent />
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default MessagesScreen;
