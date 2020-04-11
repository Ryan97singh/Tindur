import * as React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './src/navigation/MainTabNavigator';


const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<TabNavigator/>
		</NavigationContainer>
	);
}

export default App;
