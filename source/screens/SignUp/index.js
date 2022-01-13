import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, Alert } from 'react-native'
import { ButtonMain, ButtonText, HeaderApp, InputPassword, InputText, LoadingView } from '../../components'
import { AlertError } from '../../components/Alert'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'
import auth from '@react-native-firebase/auth'

const SignUp = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisiblity, setPasswordVisibility] = useState(true)
    const [loading, setLoading] = useState(false)

    const handleSignUp = () => {
        if (!name || !email || !password) {
            Alert.alert('Peringatan!', 'Mohon isi semua datanya!')
        } else {
            setLoading(true)

            auth()
                .createUserWithEmailAndPassword(email, password)
                .then((userCredentials) => {
                    const user = userCredentials.user
                    user.updateProfile({
                        displayName: name,
                    })

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
            <InputText placeholder="Nama" value={name} onChangeText={setName} />
            <InputText placeholder="Email" value={email} onChangeText={setEmail} />
            <InputPassword
                placeholder="Buat Kata Sandi"
                passwordVisibility={passwordVisiblity}
                togglePassword={() => setPasswordVisibility(!passwordVisiblity)}
                value={password}
                onChangeText={setPassword}
            />
            <View style={styles.buttonMainContainer}>
                <ButtonMain title="Daftar" action={handleSignUp} />
            </View>
            <ButtonText
                textQuestion="Sudah punya akun?"
                textAction="Masuk"
                action={() => navigation.replace('SignIn')}
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
})

export default SignUp
