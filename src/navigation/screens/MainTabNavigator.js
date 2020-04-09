import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import {
// 	MessagesScreen,
// 	ProfileScreen,
// 	TopPicksScreen,
// 	HomeScreen,
// } from './screens';
// import MessagesScreen from './MessagesScreen';
// import ProfileScreen from './ProfileScreen';
// import TopPicksScreen from './screens/TopPicksScreen';
// import HomeScreen from './HomeScreen';
// import {
// 	MaterialCommunityIcons,
// 	FontAwesome,
// 	Feather,
// } from 'react-native-vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import TabBarIcon from '../../components/TabBarIcon';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Home Screen</Text>
		</View>
	);
};

ProfileScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Profile Screen</Text>
		</View>
	);
};

TopPicksScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>TopPicks Screen</Text>
		</View>
	);
};

MessagesScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Messages Screen</Text>
		</View>
	);
};

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
				}}
			/>
		</Stack.Navigator>
	);
}

function TabNavigator() {
	return (
		<Tab.Navigator
			barStyle={{
				backgroundColor: '#f04b76',
			}}>
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={{
					tabBarLabel: 'Home',
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
