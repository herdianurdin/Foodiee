import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native'
import { HeaderMain, ButtonMain, LoadingView, InputText } from '../../components'
import FastImage from 'react-native-fast-image'
import { AlertSuccess } from '../../components/Alert'
import sizes from '../../assets/sizes'
import colors from '../../assets/colors'
import auth from '@react-native-firebase/auth'

const Profile = ({ navigation }) => {
    const [user, setUser] = useState()
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)

    const handleUpdate = () => {
        setLoading(true)

        auth()
            .currentUser.updateProfile({
                displayName: name,
            })
            .then(() => {
                AlertSuccess('Profile berhasil diperbarui!', () => setLoading(false))
            })
    }

    useEffect(() => {
        const userAuth = auth().onAuthStateChanged((userCredentials) => {
            setUser(userCredentials)
            setName(userCredentials.displayName)
            setLoading(false)
        })

        return userAuth
    }, [])

    return loading ? (
        <LoadingView />
    ) : (
        <SafeAreaView style={styles.container}>
            <HeaderMain title="Profil" action={() => navigation.goBack()} />
            <View style={styles.profileContainer}>
                <TouchableOpacity>
                    <FastImage
                        source={require('../../assets/images/avatar.webp')}
                        style={{
                            width: sizes.s160,
                            height: sizes.s160,
                            borderRadius: sizes.s32,
                        }}
                    />
                </TouchableOpacity>
            </View>
            <InputText placeholder="Nama" value={name} onChangeText={setName} />
            <View style={styles.buttonMainContainer}>
                <ButtonMain title="Perbarui" action={handleUpdate} />
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
    buttonMainContainer: {
        alignItems: 'center',
        marginTop: sizes.s10,
    },
})

export default Profile
