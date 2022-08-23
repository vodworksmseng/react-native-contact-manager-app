import {createNativeStackNavigator} from "@react-navigation/native-stack";
import FormScreen from "../screens/FormScreen";
import React from "react";
import DrawerNavigator from "./DrawerNavigator";
import NotificationScreen from "../screens/NotificationScreen";
import NotificationRight from "../components/Header/NotificationRight";
import ExportCSVScreen from "../screens/ExportCSVScreen";
import {Text, View} from "react-native";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
            }}
        >
            <Stack.Screen name="LeftMenu" component={DrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Form" component={FormScreen} />
            <Stack.Screen name="Notification" component={NotificationScreen} options={{
                title: 'Notifications',
                headerRight: () => ( <NotificationRight />) }}
            />
            <Stack.Screen name="DetailScreen" component={NotificationScreen} options={{
                title: 'Detail',
                headerRight: () => ( <View><Text>Edit</Text></View>) }}
            />
            <Stack.Screen name="ExportCSV" component={ExportCSVScreen} options={{
                title: 'Export CSV',
                }} />
        </Stack.Navigator>
    );
};

export default StackNavigator;