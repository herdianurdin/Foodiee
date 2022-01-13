import React, { memo } from 'react'
import { SafeAreaView, Text, ActivityIndicator } from 'react-native'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const LoadingView = () => {
    return (
        <SafeAreaView
            style={{
                backgroundColor: colors.white,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <ActivityIndicator
                size="large"
                color={colors.secondary}
                style={{
                    marginBottom: sizes.s16,
                }}
            />
            <Text
                style={{
                    fontSize: sizes.s16,
                    fontFamily: 'OpenSans-SemiBold',
                    color: colors.muted,
                }}
            >
                Memuat ...
            </Text>
        </SafeAreaView>
    )
}

export default memo(LoadingView)
