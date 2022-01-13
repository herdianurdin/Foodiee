import { Alert } from 'react-native'

const messages = {
    'auth/invalid-email': 'Email yang Anda masukan salah!',
    'auth/user-not-found': 'Email belum terdaftar!',
    'auth/wrong-password': 'Kata sandi yang Anda masukan salah!',
    'auth/too-many-requests': 'Terlalu banyak permintaan masuk!',
    'auth/email-already-in-use': 'Email telah digunakan!'
}

const AlertError = (error, setLoading) => {
    const message = messages[error]

    Alert.alert('Peringatan!', message, [
        {
            text: 'OKE',
            onPress: setLoading,
            style: 'cancel',
        },
    ])
}

const AlertSuccess = (message, setLoading) => {
    Alert.alert('Berhasil!', message, [
        {
            text: 'OKE',
            onPress: setLoading,
            style: 'cancel'
        }
    ])
}

export { AlertError, AlertSuccess }
