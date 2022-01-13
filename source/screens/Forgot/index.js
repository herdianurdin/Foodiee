import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, Alert } from 'react-native'
import { ButtonMain, HeaderApp, InputText, LoadingView } from '../../components'
import { AlertError } from '../../components/Alert'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'
import auth from '@react-native-firebase/auth'

const Forgot = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const showSuccess = () => {
        Alert.alert('Berhasil Mengirim!', 'Silakan periksa email Anda!', [
            {
                text: 'Oke',
                onPress: () => {
                    navigation.replace('SignIn')
                },
                style: 'cancel',
            },
        ])
    }

    const hanldeForgotPassword = () => {
        setLoading(true)

        auth()
            .sendPasswordResetEmail(email)
            .then(showSuccess)
            .catch((error) => AlertError(error.code, () => setLoading(false)))
    }

    return loading ? (
        <LoadingView />
    ) : (
        <SafeAreaView style={styles.container}>
            <HeaderApp />
            <InputText placeholder="Email" value={email} onChangeText={setEmail} />
            <View style={styles.buttonMainContainer}>
                <ButtonMain title="Kirim" action={hanldeForgotPassword} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    buttonMainContainer: {
        alignItems: 'center',
        marginTop: sizes.s10,
    },
})

export default Forgot
