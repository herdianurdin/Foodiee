import React, { memo } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import sizes from '../../assets/sizes'
import colors from '../../assets/colors'

const CardRecipe = (props) => {
    const { image, title, publisher, action } = props

    return (
        <TouchableOpacity
            style={{
                width: sizes.s160,
                height: sizes.s200,
                alignItems: 'center',
                marginBottom: sizes.s16,
            }}
            onPress={action}
        >
            <FastImage
                source={image}
                resizeMode={FastImage.resizeMode.cover}
                style={{
                    width: sizes.s160,
                    height: sizes.s200,
                    borderRadius: sizes.s8,
                    backgroundColor: colors.grey,
                }}
            />
            <View
                style={{
                    position: 'absolute',
                    backgroundColor: colors.muted,
                    width: sizes.s160 - sizes.s16,
                    bottom: sizes.s8,
                    padding: sizes.s8,
                    borderRadius: sizes.s8,
                }}
            >
                <Text
                    style={{
                        fontSize: sizes.s12,
                        fontFamily: 'OpenSans-SemiBold',
                        color: colors.white,
                    }}
                    numberOfLines={2}
                >
                    {title}
                </Text>
                <Text
                    style={{
                        fontSize: sizes.s10,
                        fontFamily: 'OpenSans-Regular',
                        color: colors.white,
                    }}
                    numberOfLines={1}
                >
                    {publisher}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default memo(CardRecipe)
