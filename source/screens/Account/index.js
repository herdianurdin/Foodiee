import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { HeaderMain, CardProfile, ButtonList, ButtonMain, LoadingView } from '../../components'
import { useIsFocused } from '@react-navigation/core'
import sizes from '../../assets/sizes'
import colors from '../../assets/colors'
import auth from '@react-native-firebase/auth'

const Account = ({ navigation }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const isFocused = useIsFocused()

    useEffect(() => {
        const userAuth = auth().onAuthStateChanged((userCredentials) => {
            if (userCredentials) {
                setUser(userCredentials)
                setLoading(false)
            } else {
                navigation.replace('SignIn')
            }
        })

        return () => userAuth()
    }, [isFocused])

    return loading ? (
        <LoadingView />
    ) : (
        <SafeAreaView style={styles.container}>
            <HeaderMain title="Akun" action={() => navigation.goBack()} />
            <View style={styles.profileContainer}>
                <CardProfile
                    name={user.displayName}
                    email={user.email}
                    source={require('../../assets/images/avatar.webp')}
                />
            </View>
            <View style={styles.buttonListContainer}>
                <ButtonList title="Profil" action={() => navigation.navigate('Profile')} />
                <ButtonList title="Koleksi Resep" action={() => navigation.navigate('Collection', {userId: user.uid })} />
            </View>
            <View style={styles.buttonMainContainer}>
                <ButtonMain title="Keluar" action={() => auth().signOut()} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: sizes.s24,
        marginHorizontal: sizes.s32,
    },
    buttonListContainer: {
        marginHorizontal: sizes.s32,
        marginBottom: sizes.s20,
    },
    buttonMainContainer: {
        alignItems: 'center',
        marginTop: sizes.s10,
    },
})

export default Account
