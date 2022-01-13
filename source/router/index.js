import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from 'react-native-splash-screen'
import { Splash, Welcome, SignIn, SignUp, Forgot, Account, Profile, Home, Search, Detail, Collection } from '../screens'

const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        <NavigationContainer onReady={() => SplashScreen.hide() } >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Welcome" component={Welcome} />

                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Forgot" component={Forgot} />

                <Stack.Screen name="Account" component={Account} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Collection" component={Collection} />

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Search" component={Search} />

                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
