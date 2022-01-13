import React from 'react'
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { ImageBanner, ButtonMain } from '../../components'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBanner source={require('../../assets/images/welcome-banner.webp')} />
            <Text style={styles.title}>Temukan resep masakan terbaik untukmu</Text>
            <ButtonMain title="Gabung" action={() => navigation.navigate('SignUp')} />
            <TouchableOpacity
                onPress={() =>
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    })
                }
            >
                <Text style={styles.textButton}>Lewati</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: sizes.s28,
        fontFamily: 'OpenSans-SemiBold',
        paddingHorizontal: sizes.s32,
        color: colors.dark,
        textAlign: 'center',
        marginBottom: sizes.s28,
    },
    textButton: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: sizes.s18,
        color: colors.muted,
    },
})

export default Welcome
