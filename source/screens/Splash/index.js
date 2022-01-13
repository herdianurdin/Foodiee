import React, { useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native'
import { ImageBanner } from '../../components'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'
import auth from '@react-native-firebase/auth'

const Splash = ({ navigation }) => {
    useEffect(() => {
        const userAuth = auth().onAuthStateChanged((userCredentials) => {
            setTimeout(() => {
                navigation.replace(userCredentials ? 'Home' : 'Welcome')
            }, 3000)
        })

        return userAuth
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.primary} translucent={true} />
            <ImageBanner source={require('../../assets/images/splash-banner.webp')} />
            <Text style={styles.title}>Foodiee</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'FiraSans',
        fontSize: sizes.s48,
        color: colors.dark,
    },
})

export default Splash
