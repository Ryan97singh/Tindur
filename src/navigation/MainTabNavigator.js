import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
	HomeScreen,
	ProfileScreen,
	MessagesScreen,
	TopPicksScreen,
} from './screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import TabBarIcon from '../components/TabBarIcon';
import Color from '../constants/Colors';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 25,
		color: '#000000',
	},
});

function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerShown: false,
					headerMode: 'none',
				}}
			/>
		</Stack.Navigator>
	);
}

function TopPicksStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="TopPicks"
				component={TopPicksScreen}
				options={{
					headerShown: false,
					headerMode: 'none',
				}}
			/>
		</Stack.Navigator>
	);
}

function ProfileStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					headerShown: false,
					headerMode: 'none',
				}}
			/>
		</Stack.Navigator>
	);
}
function MessagesStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Messages"
				component={MessagesScreen}
				options={{
					headerShown: false,
					headerMode: 'none',
				}}
			/>
		</Stack.Navigator>
	);
}

function TabNavigator() {
	return (
		<Tab.Navigator
			barStyle={{
				backgroundColor: '#ffffff',
				paddingBottom: 10,
			}}
			activeColor={Color.tabIconSelected}
			inactiveColor={Color.tabIconDefault}>
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={{
					tabBarLabel: 'Home',
					headerMode: 'none',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon
							Icon={MaterialCommunityIcons}
							focused={focused}
							name="fire"
						/>
					),
				}}
			/>
			<Tab.Screen
				name="TopPicks"
				component={TopPicksStack}
				options={{
					tabBarLabel: 'TopPicks',
					headerMode: 'none',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon
							Icon={FontAwesome}
							focused={focused}
							name="diamond"
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Messages"
				component={MessagesStack}
				options={{
					tabBarLabel: 'Messages',
					headerMode: 'none',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon
							Icon={FontAwesome}
							focused={focused}
							name="commenting-o"
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileStack}
				options={{
					tabBarLabel: 'Profile',
					headerMode: 'none',
					tabBarIcon: ({ focused }) => (
						<TabBarIcon
							Icon={Feather}
							focused={focused}
							name="user"
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
export default TabNavigator;
