import React, { memo } from 'react'
import { Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import sizes from '../../assets/sizes'
import colors from '../../assets/colors'

const BannerView = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginHorizontal: sizes.s32,
                paddingHorizontal: sizes.s16,
                paddingVertical: sizes.s8,
                backgroundColor: colors.primary,
                borderRadius: sizes.s8,
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: sizes.s16,
            }}
        >
            <Text
                style={{
                    fontSize: sizes.s20,
                    fontFamily: 'OpenSans-SemiBold',
                    width: sizes.s160,
                    color: colors.dark,
                }}
            >
                Semuanya bisa memasak
            </Text>
            <FastImage
                source={require('../../assets/images/main-banner.webp')}
                style={{
                    width: sizes.s150,
                    height: sizes.s120,
                }}
            />
        </View>
    )
}

export default memo(BannerView)
