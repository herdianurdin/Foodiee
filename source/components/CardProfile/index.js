import React, { memo } from 'react'
import { Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import sizes from '../../assets/sizes'
import colors from '../../assets/colors'

const CardProfile = (props) => {
    const { name, email, source } = props

    return (
        <View>
            <FastImage
                resizeMode={FastImage.resizeMode.cover}
                source={source}
                style={{
                    width: sizes.s160,
                    height: sizes.s160,
                    borderRadius: sizes.s32,
                    marginBottom: sizes.s12,
                    alignSelf: 'center',
                }}
            />
            <Text
                style={{
                    fontSize: sizes.s24,
                    fontFamily: 'OpenSans-SemiBold',
                    color: colors.dark,
                    textAlign: 'center',
                }}
            >
                {name}
            </Text>
            <Text
                style={{
                    fontSize: sizes.s16,
                    fontFamily: 'OpenSans-Regular',
                    color: colors.muted,
                    textAlign: 'center',
                }}
            >
                {email}
            </Text>
        </View>
    )
}

export default memo(CardProfile)
