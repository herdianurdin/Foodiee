import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text, Alert } from 'react-native'
import { ButtonMain, ButtonText, HeaderApp, InputPassword, InputText, LoadingView } from '../../components'
import { AlertError } from '../../components/Alert'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'
import auth from '@react-native-firebase/auth'

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisiblity, setPasswordVisibility] = useState(true)
    const [loading, setLoading] = useState(false)

    const handleSignIn = () => {
        if (!email || !password) {
            Alert.alert('Peringatan!', 'Mohon isi username dan password!')
        } else {
            setLoading(true)

            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home'}]
                    })
                })
                .catch((error) => {
                    AlertError(error.code, () => setLoading(false))
                })
        }
    }

    return loading ? (
        <LoadingView />
    ) : (
        <SafeAreaView style={styles.container}>
            <HeaderApp />
            <InputText placeholder="Email" value={email} onChangeText={setEmail} />
            <InputPassword
                placeholder="Kata Sandi"
                passwordVisibility={passwordVisiblity}
                togglePassword={() => setPasswordVisibility(!passwordVisiblity)}
                value={password}
                onChangeText={setPassword}
            />
            <View style={styles.buttonMainContainer}>
                <ButtonMain title="Masuk" action={handleSignIn} />
            </View>
            <TouchableOpacity onPress={() => navigation.replace('Forgot')}>
                <Text style={styles.buttonTextForgot}>Lupa kata sandi?</Text>
            </TouchableOpacity>
            <ButtonText
                textQuestion="Belum punya akun?"
                textAction="Daftar"
                action={() => navigation.replace('SignUp')}
            />
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
    buttonTextForgot: {
        textAlign: 'center',
        fontFamily: 'OpenSans-SemiBold',
        fontSize: sizes.s16,
        color: colors.muted,
        marginBottom: sizes.s36,
    },
})

export default SignIn
