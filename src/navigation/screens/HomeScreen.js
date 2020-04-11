import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Card from '../../components/Card';
import { HomeScreenPics } from '../../constants';
class HomeScreen extends Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Swiper
					cards={HomeScreenPics}
					renderCard={Card}
					infinite
					backgroundColor="white"
					cardHorizontalMargin={0}
					stackSize={2}
				/>
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

export default HomeScreen;
