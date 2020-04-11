import React from 'react';
import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
	render() {
		const { Icon, name, focused } = this.props;
		return (
			<Icon
				name={name}
				size={25}
				style={{
					width: 35,
					textAlign: 'center',
				}}
				color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
			/>
		);
	}
}
