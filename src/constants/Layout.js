import ExtraDimensions from 'react-native-extra-dimensions-android';

const width = ExtraDimensions.getRealWindowWidth();
const height = ExtraDimensions.getRealWindowHeight();

export default {
	window: {
		width,
		height,
	},
	isSmallDevice: width < 375,
};
