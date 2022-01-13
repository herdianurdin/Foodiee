import React, { memo } from 'react'
import { TextInput, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const InputPassword = (props) => {
    const { togglePassword, value, onChangeText, placeholder, passwordVisibility } = props

    return (
        <View
            style={{
                marginHorizontal: sizes.s48,
                marginBottom: sizes.s18,
                height: sizes.s42,
                justifyContent: 'center',
            }}
        >
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.muted}
                style={{
                    backgroundColor: colors.grey,
                    paddingLeft: sizes.s20,
                    paddingRight: sizes.s54,
                    paddingVertical: sizes.s10,
                    color: colors.muted,
                    fontFamily: 'OpenSans-SemiBold',
                    fontSize: sizes.s16,
                    borderRadius: sizes.s8,
                }}
                secureTextEntry={passwordVisibility}
                value={value}
                onChangeText={onChangeText}
            />
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    right: sizes.s20,
                }}
                onPress={togglePassword}
            >
                <Icon name={passwordVisibility ? 'eye' : 'eye-off'} size={sizes.s24} color={colors.muted} />
            </TouchableOpacity>
        </View>
    )
}

export default memo(InputPassword)
