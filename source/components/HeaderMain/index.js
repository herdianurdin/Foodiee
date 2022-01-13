import React, { memo } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/Ionicons'
import sizes from '../../assets/sizes'
import colors from '../../assets/colors'

const HeaderMain = (props) => {
    const { action, title } = props

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: sizes.s32,
                paddingTop: sizes.s32,
                marginBottom: sizes.s24,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <FastImage
                    source={require('../../assets/images/foodie.webp')}
                    style={{
                        width: sizes.s48,
                        height: sizes.s48,
                        marginRight: sizes.s12,
                    }}
                />
                <Text
                    style={{
                        fontSize: sizes.s32,
                        fontFamily: 'FiraSans',
                        color: colors.dark,
                    }}
                >
                    {title}
                </Text>
            </View>
            <TouchableOpacity onPress={action}>
                <Icon
                    name="close"
                    size={sizes.s28}
                    color={colors.muted}
                    style={{
                        padding: sizes.s10,
                        backgroundColor: colors.grey,
                        borderRadius: sizes.s48,
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default memo(HeaderMain)
