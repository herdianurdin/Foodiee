import React, { memo } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const HeaderDetail = (props) => {
    const { actionBack, actionBookmark, bookmarkIcon, disabled } = props

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: sizes.s32,
                marginTop: sizes.s32,
                marginBottom: sizes.s16,
            }}
        >
            <TouchableOpacity onPress={actionBack}>
                <Icon name="arrow-back" color={colors.dark} size={sizes.s32} />
            </TouchableOpacity>
            <Text
                style={{
                    fontSize: sizes.s28,
                    fontFamily: 'OpenSans-SemiBold',
                    color: colors.dark,
                }}
            >
                Resep
            </Text>
            <TouchableOpacity disabled={disabled} onPress={actionBookmark}>
                <Icon name={bookmarkIcon} color={disabled ? '#00000000' : colors.dark} size={sizes.s32} />
            </TouchableOpacity>
        </View>
    )
}

export default memo(HeaderDetail)
