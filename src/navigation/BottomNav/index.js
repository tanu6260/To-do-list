import { Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles';
import DetailsScreen from '../../screens/Details';
import HomeScreen from '../../screens/Home';



const { width, height } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { height: height * 0.08 },
                headerStyle: {

                    borderBottomColor: 'gray',
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',

                tabBarLabelStyle: {
                    fontSize: width * 0.035,


                },
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused, color }) => (
                        <Entypo

                            name="home"
                            size={25}
                            color={color}
                            style={styles.bottomTabIcon}
                        />
                    ),

                }}
            />
            <Tab.Screen
                name="DetailsScreen"
                component={DetailsScreen}
                options={{
                    title: 'Details',
                    tabBarIcon: ({ focused, color }) => (
                        <Entypo
                            name="info-with-circle"
                            size={25}
                            color={color}
                            style={styles.bottomTabIcon}
                        />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default BottomNav;
