import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';
import { Layout } from '../constants';

const BOTTOM_BAR_HEIGHT = !Platform.isPad ? 29 : 49;

export default Card = ({ pic, title, caption }) => (
	<Tile
		imageSrc={pic}
		imageProps={{ borderRadius: 20 }}
		imageContainerStyle={styles.imageContainer}
		activeOpacity={0.9}
		title={title}
		titleStyle={styles.title}
		caption={caption}
		captionStyle={styles.caption}
		containerStyle={styles.container}
		featured
	/>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	imageContainer: {
		width: Layout.window.width - 30,
		height: Layout.window.height - BOTTOM_BAR_HEIGHT * 6,
	},
	title: {
		position: 'absolute',
		left: 10,
		bottom: 30,
	},
	caption: {
		position: 'absolute',
		left: 10,
		bottom: 10,
	},
});
