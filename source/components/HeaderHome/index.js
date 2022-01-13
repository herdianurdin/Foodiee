import React, { memo } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/Ionicons'
import sizes from '../../assets/sizes'
import colors from '../../assets/colors'

const HeaderHome = (props) => {
    const { actionAccount, actionSearch } = props

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
            <TouchableOpacity onPress={actionAccount}>
                <Icon
                    name="person"
                    size={sizes.s28}
                    color={colors.muted}
                    style={{
                        padding: sizes.s10,
                        backgroundColor: colors.grey,
                        borderRadius: sizes.s48,
                    }}
                />
            </TouchableOpacity>
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
                        marginRight: sizes.s8,
                    }}
                />
                <Text
                    style={{
                        fontSize: sizes.s32,
                        fontFamily: 'FiraSans',
                        color: colors.dark,
                    }}
                >
                    Foodiee
                </Text>
            </View>
            <TouchableOpacity onPress={actionSearch}>
                <Icon
                    name="search"
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

export default memo(HeaderHome)
