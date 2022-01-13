import React, { memo } from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import sizes from '../../assets/sizes'
import colors from '../../assets/colors'

const SearchBar = (props) => {
    const { value, onChangeText, action, placeholder } = props

    return (
        <View
            style={{
                paddingHorizontal: sizes.s32,
                marginBottom: sizes.s16,
                height: sizes.s42,
                justifyContent: 'center',
            }}
        >
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.muted}
                style={{
                    backgroundColor: colors.grey,
                    paddingVertical: sizes.s10,
                    paddingLeft: sizes.s20,
                    paddingRight: sizes.s42 + sizes.s20,
                    borderRadius: sizes.s8,
                    fontFamily: 'OpenSans-SemiBold',
                    fontSize: sizes.s16,
                    color: colors.muted,
                }}
                value={value}
                onChangeText={onChangeText}
            />
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    right: sizes.s32,
                }}
                onPress={action}
            >
                <Icon
                    name="search"
                    size={sizes.s24}
                    color={colors.white}
                    style={{
                        backgroundColor: colors.muted,
                        padding: sizes.s9,
                        borderTopRightRadius: sizes.s8,
                        borderBottomRightRadius: sizes.s8,
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default memo(SearchBar)
